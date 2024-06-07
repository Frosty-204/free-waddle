const Tour = require('../models/tourModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const Reviews = require('../models/reviewModel');

exports.getOverview = catchAsync(async (req, res) => {
  // 1) Get tour data from collection
  const tours = await Tour.find();
  // 2) Build Template
  // 3) Render that template using tour data from 1
  res.status(200).render('overview', {
    title: 'All Tours',
    tours
  });
});

// Details page
exports.getTour = catchAsync(async (req, res, next) => {
  // 1) get the data, for the requested tour (including review and guides)
  const tourSlug = req.params.tourSlug;
  const tour = await Tour.findOne({ slug: tourSlug }).populate({
    path: 'reviews',
    populate: {
      path: 'user',
      fields: 'review rating user'
    }
  });

  if (!tour) {
    return next(new AppError('There is no tour with that name', 404));
  }
  // 2) Build Template
  // 3) Render that template using tour data from 1
  res.status(200).render('tour', {
    title: tourSlug + ' Tour',
    tour
  });
});

// Signup page

exports.getSignUp = (req, res) => {
  res.status(200).render('signup', {
    title: 'Sign Up'
  });
};

exports.getResetPassword = (req, res) => {
  res.status(200).render('resetpassword', {
    title: 'Reset Password'
  });
};

exports.getForgotPassword = (req, res) => {
  res.status(200).render('forgotpassword', {
    title: 'Forget Password'
  });
};
// Login page
exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into you account'
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account'
  });
};

// Instead of doing populate
exports.getMyTours = catchAsync(async (req, res, next) => {
  // 1) Find all bookings
  const bookings = await Booking.find({ user: req.user.id });
  console.log(bookings);
  // 2) Find Tours with the returned ID'S
  const tourIDs = bookings.map(el => {
    return el.tour;
  });
  console.log(tourIDs);
  const tours = await Tour.find({ _id: { $in: tourIDs } });

  res.status(200).render('overview', {
    title: 'My Tours',
    tours
  });
});

exports.updateUserData = catchAsync(async (req, res, next) => {
  // const updatedUser = await User.findByIdAndUpdate(req.user.id, {
  //     name: req.body.name,
  //     email: req.body.email
  //   },
  //   {
  //     new: true,
  //     runValidators: true
  //   }
  // );
  res.status(200).render('account', {
    title: 'Your account',
    user: req.user
  });
});

exports.getAdminDashboardTours = catchAsync(async (req, res, next) => {
  // Define the limit and page number for pagination
  const limit = req.query.limit ? req.query.limit : 20;
  const page = req.query.page ? req.query.page : 1;
  const name = req.query.search ? req.query.search : ' ';
  // Calculate the offset based on the page number and limit
  const offset = (parseInt(page) - 1) * parseInt(limit);

  // Find all bookings
  const tours = await Tour.find({
    name: { $regex: new RegExp(`${name}`, 'i') }
  })
    .skip(offset)
    .limit(parseInt(limit));
  const guides = await User.find({
    $or: [{ role: 'guide' }, { role: 'lead-guide' }]
  })
    .skip(offset)
    .limit(parseInt(limit));

  console.log('step 77 :', guides);
  const count = parseInt(
    await Tour.countDocuments({ name: { $regex: new RegExp(`${name}`, 'i') } })
  );

  res.status(200).render('manageTours', {
    title: 'Manage Tours',
    tours,
    count,
    total_pages: Math.ceil(count / limit),
    current_url_query: req.query,
    url: req.url,
    guides: guides
  });
});
exports.getAdminDashboardUsers = catchAsync(async (req, res, next) => {
  // Define the limit and page number for pagination
  const limit = req.query.limit ? req.query.limit : 20;
  const page = req.query.page ? req.query.page : 1;
  const name = req.query.search ? req.query.search : ' ';
  // Calculate the offset based on the page number and limit
  const offset = (parseInt(page) - 1) * parseInt(limit);

  // Find all bookings
  const users = await User.find({
    name: { $regex: new RegExp(`${name}`, 'i') }
  })
    .skip(offset)
    .limit(parseInt(limit));

  const count = parseInt(
    await User.countDocuments({ name: { $regex: new RegExp(`${name}`, 'i') } })
  );

  // Find tours with the returned IDs
  // const tourIDs = tours.map((el) => el.tour);
  // const tours = await Tour.find({ _id: { $in: tourIDs } });
  // console.log("tour :", tours);
  if (!(req.query && req.query.page)) req.query.page = 1;
  res.status(200).render('manageUsers', {
    title: 'Manage Users',
    users,
    count,
    total_pages: Math.ceil(count / limit),
    current_url_query: req.query,
    url: req.url
  });
});
exports.getAdminDashboardBooking = catchAsync(async (req, res, next) => {
  // Define the limit and page number for pagination
  const limit = req.query.limit ? req.query.limit : 20;
  const page = req.query.page ? req.query.page : 1;
  const name = req.query.search ? req.query.search : ' ';
  // Calculate the offset based on the page number and limit
  const offset = (parseInt(page) - 1) * parseInt(limit);

  // Find all bookings
  const bookings = await Booking.find(/* { _id: { $in: ["664e13881f4bfd006b607644"] } } */)
    .sort({ _id: -1 })
    .skip(offset)
    .limit(parseInt(limit));

  console.log('bookings :', bookings);
  const count = parseInt(await Booking.countDocuments({}));

  // Find Booking with the returned IDs

  if (!(req.query && req.query.page)) req.query.page = 1;
  res.status(200).render('manageBookings', {
    title: 'Manage Bookings',
    bookings,
    count,
    total_pages: Math.ceil(count / limit),
    current_url_query: req.query,
    url: req.url
  });
});
exports.getAdminDashboardReviews = catchAsync(async (req, res, next) => {
  // Define the limit and page number for pagination
  const limit = req.query.limit ? req.query.limit : 20;
  const page = req.query.page ? req.query.page : 1;
  const name = req.query.search ? req.query.search : ' ';
  // Calculate the offset based on the page number and limit
  const offset = (parseInt(page) - 1) * parseInt(limit);

  // Find all bookings
  const reviews = await Reviews.find(/* { _id: { $in: ["664e13881f4bfd006b607644"] } } */)
    .sort({ _id: -1 })
    .skip(offset)
    .limit(parseInt(limit));

  console.log('reviews :', reviews);
  const count = parseInt(await Reviews.countDocuments({}));

  // Find Booking with the returned IDs

  if (!(req.query && req.query.page)) req.query.page = 1;
  res.status(200).render('manageReviews', {
    title: 'Manage Reviews',
    reviews,
    count,
    total_pages: Math.ceil(count / limit),
    current_url_query: req.query,
    url: req.url
  });
});
