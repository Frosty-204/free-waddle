const crypto = require('crypto');
const validator = require('validator');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    valide: [validator.isEmail, 'Please enter a valid email!'],
  },
  photo: {
    type: String,
    default: 'default.jpeg',
  },

  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user',
  },

  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // runs on create()/save()
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same',
    },
  },

  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    defaul: true,
    select: false,
  },
});

userSchema.pre('save', async function (next) {
  // run function if password was modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  // delete passwordConfirm and it won't appear in the datanase
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function (next) {
  // NOTE Checks if the password got modified or if it's a new document
  if (!this.isModified('password') || this.isNew) return next();

  // NOTE If above is true then update the time, else abort
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  // THIS POINTS TO THE CURRENT QUERY

  this.find({ active: { $ne: false } });
  next();
});

// NOTE candidate is req.body.password, and the user is the one stored in the database

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10,
    );

    return JWTTimestamp < changedTimestamp;
  }

  //  Not changed
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  // Should be random but not really extreme to encrypt
  const resetToken = crypto.randomBytes(32).toString('hex');

  // NOTE This gets stored in the user document and then compared with the reset token to grant access
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // console.log({ resetToken }, this.passwordResetToken);

  // console.log(resetToken, 'IS RESET TOKEN');

  // For how long the password will be available > 10 mins
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
