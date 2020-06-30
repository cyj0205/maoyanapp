var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require("./dao/db");

var indexRouter = require('./routes/index');
<<<<<<< HEAD
// // var usersRouter = require('./routes/users');
// var studentsRouter = require('./routes/students');
// var clazzsRouter = require('./routes/clazzs');
var cinemasRouter = require('./routes/cinemas');
=======
// var usersRouter = require('./routes/users');
var schedulesRouter = require('./routes/schedules');
<<<<<<< HEAD
var cinemasRouter = require('./routes');
=======
>>>>>>> ccc2b440d42137fbff7895207a94c74bade393ec
>>>>>>> 017d0a72eb220c21f052a4c85e654d0830021125


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
<<<<<<< HEAD
// app.use('/students', studentsRouter); 
// app.use('/clazzs', clazzsRouter); 
app.use('/cinemas', cinemasRouter); 
=======
app.use('/schedules', schedulesRouter);
>>>>>>> ccc2b440d42137fbff7895207a94c74bade393ec


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
