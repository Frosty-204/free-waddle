/* eslint-disable import/no-extraneous-dependencies */
const multer = require('multer');
const sharp = require('sharp');
const User = require('../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/img/users');
  },
  filename: (req, file, cb) => {
    // user-5yg12m350-j03.jpeg
    const ext = file.mimetype.split('/')[1];
    cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
  },
});

// const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {

    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  // dest: './public/img/users/',
  fileFilter: multerFilter,
});

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}/jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/user/${req.file.filename}`);

  next();
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // console.log(File);

  // NOTE Create error if user POSTs password data

  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password upddates. Please use /updateMyPassword',
        400,
      ),
    );
  }

  // NOTE Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'name', 'email');
  if (req.file) filteredBody.photo = req.file.filename;

  // NOTE Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  console.log("req :", req.body);
  console.log("file", req.file);
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.password,
    role: req.body.role,
    photo: req.file.filename
  });

  res.status(201).json({
    status: 'success',
    data: {
      data: newUser,
    },
  });
});

exports.getAllUsers = factory.getAll(User);

exports.getUser = factory.getOne(User);

// IMPORTANT DO NOT UPDATE PASSWORDS WITH THESE
exports.updateUser = catchAsync(async (req, res, next) => {
  console.log(req.files.photo);
  console.log(req.body);

  const old_user_photo = (await User.findById(req.params.id)).photo
  console.log("step 139 :", old_user_photo);
  if (req.body.password)
    req.body.password = await bcrypt.hash(req.body.password, 12);

  if (req.files.photo) {

    try {
      if (old_user_photo)
        fs.unlinkSync('public/img/users/' + old_user_photo)
      console.log(req.photo);
      req.body.photo = (await req.photo.save('public/img/users')).split('users/')[1]
    } catch (e) {
      console.log(e);
    }
  }
  const doc = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: doc,
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {

  const doc = await User.findByIdAndDelete(req.params.id);

  console.log("step 1");


  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }
  else {
    if (doc.photo != 'default.jpg') {
      try {
        const del = fs.unlinkSync('./public/img/users/' + doc.photo);
        console.log(del);

      } catch (e) {
        console.log(e);
      }

    }
  }
  res.status(201).json({
    status: 'success',
    data: doc,
  });
})
