var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {targetUrl} = require("./util/baseConfig");

var indexRouter = require('./routes/index');
<<<<<<< HEAD
// var usersRouter = require('./routes/users');
// var studentsRouter = require('./routes/students');
=======
<<<<<<< HEAD
// var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');
=======
<<<<<<< HEAD
var seatsRouter = require('./routes/seats');
=======


// var usersRouter = require('./routes/users');
// var schedulesRouter = require('./routes/schedules');

// var usersRouter = require('./routes/users');
// var studentsRouter = require('./routes/students');

>>>>>>> 3d9c2cb2bf53c440b14f535e099e05d49c78163b
>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757
>>>>>>> 59d6d57fab16c3402d4cdb99906c94eb0307d6dd

var app = express();

const { createProxyMiddleware } = require('http-proxy-middleware');
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
app.use('/api', exampleProxy);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
<<<<<<< HEAD
// app.use('/users', usersRouter);
// app.use('/students', studentsRouter);
=======
<<<<<<< HEAD
app.use('/movies', moviesRouter);
// app.use('/students', studentsRouter);
=======
<<<<<<< HEAD
app.use('/seats', seatsRouter);
=======
// app.use('/users', usersRouter);
// app.use('/schedules', schedulesRouter);

// app.use('/students', studentsRouter);

>>>>>>> 3d9c2cb2bf53c440b14f535e099e05d49c78163b
>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757
>>>>>>> 59d6d57fab16c3402d4cdb99906c94eb0307d6dd

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
