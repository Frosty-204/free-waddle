// eslint-disable-next-line arrow-body-style
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((next) => {

      console.log(next);
    });
  };
};

/* This code defines a utility function catchAsync that helps in handling errors in asynchronous functions. It takes a single argument fn which is an asynchronous function.

The catchAsync function returns a new anonymous function that takes 3 arguments, req, res, and next. The returned function is an Express.js middleware function that wraps the fn function.

When the returned function is executed, it first calls the fn function and passes it req, res, and next arguments. If fn throws an error, it is caught by the catch block, which passes it to the next middleware function in the chain using next(error).


// No this comment was made by chatGPT, so don't expect me to understand it...

// However if i somehow don't really understand how this works, i should just use normal try...catch block,
// not like it'd really affect anything, and besides ong i'm just a beginner :sob:
*/
