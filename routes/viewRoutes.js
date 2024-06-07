const express = require('express');
const router = express.Router();
const {
  getOverview,
  getTour,
  getLoginForm,
  getAccount,
  updateUserData,
  getMyTours,
  getSignUp,
  getResetPassword,
  getForgotPassword,
  getAdminDashboardTours,
  getAdminDashboardUsers,
  getAdminDashboardBooking,
  getAdminDashboardReviews
} = require('../controllers/viewController');
const {
  protect,
  isLoggedIn,
  restrictTo,
  resetPassword
} = require('../controllers/authController');

const { creatBookingCheckout } = require('../controllers/bookingController');

router.get('/', isLoggedIn, creatBookingCheckout, getOverview);
router.get('/tour/:tourSlug', isLoggedIn, getTour);
router.get('/signup', getSignUp);
router.get('/login', isLoggedIn, getLoginForm);
router.get('/forgotPassword', isLoggedIn, getForgotPassword);
router.get('/resetPassword/:token', getResetPassword);
router.get('/me', protect, getAccount);
router.get('/my-tours', protect, getMyTours);

// NOTE ADMIN AREA

router.get(
  '/manage-tours',
  protect,
  restrictTo('admin'),
  getAdminDashboardTours
);
router.get(
  '/manage-users',
  protect,
  restrictTo('admin'),
  getAdminDashboardUsers
);
router.get(
  '/manage-bookings',
  protect,
  restrictTo('admin'),
  getAdminDashboardBooking
);
router.get(
  '/manage-reviews',
  protect,
  restrictTo('admin'),
  getAdminDashboardReviews
);

router.post('/submit-user-data', protect, updateUserData);

module.exports = router;
