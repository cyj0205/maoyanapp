var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {targetUrl} = require("./util/baseConfig");

<<<<<<< HEAD

// var indexRouter = require('./routes/index');

// var seatsRouter = require('./routes/seats');


// var indexRouter = require('./routes/index');

=======
<<<<<<< HEAD
// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var studentsRouter = require('./routes/students');
=======
var indexRouter = require('./routes/index');
<<<<<<< HEAD
>>>>>>> 478c5bbab4ebc93b3c3d2d064027e7a34649c105
// var usersRouter = require('./routes/users');
// var studentsRouter = require('./routes/students');

// var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');

// var seatsRouter = require('./routes/seats');



// var usersRouter = require('./routes/users');
// var schedulesRouter = require('./routes/schedules');

// var usersRouter = require('./routes/users');
// var studentsRouter = require('./routes/students');

<<<<<<< HEAD

=======
>>>>>>> 3d9c2cb2bf53c440b14f535e099e05d49c78163b
>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757
>>>>>>> 59d6d57fab16c3402d4cdb99906c94eb0307d6dd
>>>>>>> 1bc0d791fe28a596ebfd8ce87c4debf5f874daee
>>>>>>> 478c5bbab4ebc93b3c3d2d064027e7a34649c105

var app = express();

const { createProxyMiddleware } = require('http-proxy-middleware');
const router = require('../myapp/routes/cinemasCk');
const options = {
  target: targetUrl, // target host
  changeOrigin: true, // needed for virtual hosted sites
  pathRewrite: {
    '^/api': '/', // rewrite path
  },
};
const exampleProxy = createProxyMiddleware(options);

app.use(logger('dev'));



app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
app.use(jwt({ secret: secretKey,credentialsRequired: true}).unless({path: ['/users/login',"/users/reg"]}));
=======
>>>>>>> 1bc0d791fe28a596ebfd8ce87c4debf5f874daee
app.use('/api', exampleProxy);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use("/",router)

// app.use('/', indexRouter);

// app.use('/seats', seatsRouter);



// app.use('/', indexRouter);


// app.use('/', indexRouter);

<<<<<<< HEAD
=======
<<<<<<< HEAD
// app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/students', studentsRouter);
=======
app.use('/', indexRouter);
<<<<<<< HEAD
// app.use('/users', usersRouter);
// app.use('/students', studentsRouter);
=======
<<<<<<< HEAD
>>>>>>> 478c5bbab4ebc93b3c3d2d064027e7a34649c105
app.use('/movies', moviesRouter);
// app.use('/students', studentsRouter);

// app.use('/seats', seatsRouter);

// app.use('/users', usersRouter);
// app.use('/schedules', schedulesRouter);

// app.use('/students', studentsRouter);

<<<<<<< HEAD

=======
>>>>>>> 3d9c2cb2bf53c440b14f535e099e05d49c78163b
>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757
>>>>>>> 59d6d57fab16c3402d4cdb99906c94eb0307d6dd
>>>>>>> 1bc0d791fe28a596ebfd8ce87c4debf5f874daee
>>>>>>> 478c5bbab4ebc93b3c3d2d064027e7a34649c105

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
