class APIFeatures {
  // The first passed argument is a query command such as .find(), as for the second
  // it's the query we're trying to return to the end user e.g. req.query

  constructor(query, queryString) {
    this.query = query; //This is actually just Tour.find()
    this.queryString = queryString; //While this is the url content
  }

  // to clean the given query string from unnecessary quaries and values

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);
    // DESC Advanced filtering

    // Helps delivering the query to be normally processed by mongoose

    // We convert it to string to be able to use String methods such as replace()
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
      // sort('price ratingsAverage')
    } else {
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }

    return this;
  }

  paginate() {
    const page = +this.queryString.page || 1;
    const limit = +this.queryString.limit || 100;
    const skip = (page - 1) * limit;

    // e.g. page=2&limit=10 1-10 page 1, 11-20 page 2

    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}
module.exports = APIFeatures;

// NOTE Filtering
// const queryObj = { ...req.query };
// const excludedFields = ['page', 'sort', 'limit', 'fields'];
// excludedFields.forEach((el) => delete queryObj[el]);

// console.log(req.query);

// // NOTE Advenced filtering

// let queryStr = JSON.stringify(queryObj);
// queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

// IMPORTANT QUERY BUILDING

// NOTE Sorting
// if (req.query.sort) {
//   const sortBy = req.query.sort.split(',').join(' ');
//   query = query.sort(sortBy);
// } else {
//   query.sort('-createdAt');
// }

// NOTE Fields limiting
// if (req.query.fields) {
//   const fields = req.query.fields.split(',').join(' ');
//   query = query.select(fields);
// } else {
//   query.select('-__v');
// }

// NOTE Pagination

// const page = +req.query.page || 1;
// const limit = +req.query.limit || 100;
// const skip = (page - 1) * limit;

// // BR Example ?page=3&limit=10 === page 1 <=> 1-10, page 2 <=> 11-20, page 3 <=> 21-30
// query = query.skip(skip).limit(limit);

// if (req.query.page) {
//   const numTours = await Tour.countDocuments();
//   if (skip > numTours) throw new Error('This page does not exist');
// }

module.exports = APIFeatures;
