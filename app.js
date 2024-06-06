/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const express = require('express');
// const pug = require('pug');
const morgan = require('morgan');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const fileEasyUpload = require("express-easy-fileuploader")
// const helmet = require('helmet');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const bodyParser = require('body-parser')
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const viewRouter = require('./routes/viewRoutes');

dotenv.config({ path: './config.env' });

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// IMPORTANT GLOBAL MIDDLEWAE

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Implement of cros
// app.use(cors());
// app.use(
//   cors({
//     origin: '*',
//   }),
// );

// app.options('*', cors());

// const corsOptions = {
//   origin: [
//     'https://natours-ijrr.onrender.com',
//     'https://www.example.com',
//     'https://www.anotherdomain.com',
//     'http://127.0.0.1:3000/api/v1/users/login',
//   ],
// };

// app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));

// NOTE Set Security HTTP headers
// app.use(
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         defaultSrc: ["'self'"],
//         scriptScr: [
//           "'self'",
//           'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
//         ],
//       },
//     },
//   }),
// );

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit request from same API
// NOTE This is to prevent brute force, DOS attacks what it does is that it
// limits requests to only 100 per hour, and it should be adapted on desire
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 100,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// NOTE Body parser, reading data from body into req.body
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  fileEasyUpload({
    app,
    fileUploadOptions: {
      limits: { fileSize: 500 * 1024 * 1024 },
    }
  })
);
// NOTE Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// NOTE Data sanitization against XSS
app.use(xss());

// NOTE Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  }),
);

app.use(compression());

// NOTE Serving static files
// app.use(express.static(`${__dirname}/public`));

// NOTE Test middleware
app.use((req, res, next) => {
  // console.log(req.cookies);
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// BR ROUTES

app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// DESC Error handling middleware
app.use(globalErrorHandler);

module.exports = app;
