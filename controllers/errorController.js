const AppError = require('./../utils/appError');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateErrorDB = (err) => {
  // console.log(err.errmsg);
  // NOTE This regex matches a string enclosed in quotes or double
  // however it's an array so we take the first element
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  // console.log(value);
  const message = `Duplicate field value: ${value}. Please use another value`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError('Invalid token. Please log in again', 401);

const handleJWTExpiredError = () =>
  new AppError('Your token has expired! Please log in again', 401);

const sendErrorDev = (err, req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    // IMPORTANT API
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      error: err,
      stack: err.stack,
    });
  }
  // IMPORTANT Rendered webpage
  res.status(err.statusCode).render('error', {
    title: 'Something went wrong!',
    msg: err.message,
  });
};

const sendErrorProd = (err, req, res) => {
  // Operational, truested error: send message to client
  if (req.originalUrl.startsWith('/api')) {
    // IMPORTANT API
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        // error: err,
        // kind: err.kind,
        // name: err.name,
        // path: err.path,
        // value: err.value,
      });
      // Programming or other unknown error: don't leak error details
    }
    //  Log error
    // console.error('ERROR ⚠️', err);
    // Send generic message
    return res.status(500).json({
      status: 'error',
      message: 'Something went very wrong',
    });
  }

  // IMPORTANT Rendered webpage
  // A) Operational, trusted error: send message to client
  if (err.isOperational) {
    console.log(err);
    return res.status(err.statusCode).render('error', {
      title: 'Something went wrong!',
      msg: err.message,
    });
  }
  // B) Programming or other unknown error: don't leak error details
  // 1) Log error
  console.error('ERROR 💥', err);
  // 2) Send generic message
  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong!',
    msg: 'Please try again later.',
  });
};

module.exports = (err, req, res, next) => {
  //   console.log(err.stack);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  }
  if (process.env.NODE_ENV === 'production') {
    if (err.kind === 'ObjectId') err.statusCode = 400;
    // console.log(
    //   '---------------------',
    //   err.name,
    //   err.kind,
    //   '---------------------'
    // );

    // let error = { ...err };

    // if (error.kind === 'ObjectId') error.statusCode = 404;

    if (err.name === 'CastError' || err.kind === 'ObjectId') {
      err = handleCastErrorDB(err);
    }
    if (err.code === 11000) {
      err = handleDuplicateErrorDB(err);
    }
    if (err.name === 'ValidationError') {
      err = handleValidationErrorDB(err);
    }
    if (err.name === 'JsonWebTokenError') {
      err = handleJWTError();
    }
    if (err.name === 'TokenExpiredError') {
      err = handleJWTExpiredError();
    }
    sendErrorProd(err, req, res);
  }
};

/*
This is the global error handler or controller, in it we coordinate how will
the errors will be handled 
*/

/* 

for instance suppose we have this simple try...catch block, 

exports.getTour = async (req, res, next) => {
try {
  const tour = await Tour.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  })
 } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: message,
    })
  }
};

so after implementing this controller we end up with 

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.id);
  // Tour.findOne({_id: req.params.id})

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
});

IMPORTANT to note that this also includes the catchAsync, so it's better to
check it to have better understanding of it.
anyhow explaining this would be that the catchAsync acts like a middleware? and sends the error 
for express to catch it through the next()
*/
