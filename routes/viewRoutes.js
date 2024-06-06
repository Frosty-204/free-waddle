const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.get(
  '/',
  authController.isLoggedIn,
  bookingController.createBookingCheckout,
  viewsController.getOverview,
);
router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/signup', getSignUp);
router.get('/me', authController.protect, viewsController.getAccount);
router.get('/my-tours', authController.protect, viewsController.getMyTours);
router.get('/manage-tours', authController.protect, authController.restrictTo('admin'), viewsController.getAdminDashboardTours)
router.get('/manage-users', authController.protect, authController.restrictTo('admin'), viewsController.getAdminDashboardUsers)
router.get('/manage-bookings', authController.protect, authController.restrictTo('admin'), viewsController.getAdminDashboardBooking)
router.get('/manage-reviews', authController.protect, authController.restrictTo('admin'), viewsController.getAdminDashboardReviews)

router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData,
);

module.exports = router;



