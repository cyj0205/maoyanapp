 var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require("./dao/db");

<<<<<<< HEAD
// var indexRouter = require('./routes/index');

=======
var indexRouter = require('./routes/index');
<<<<<<< HEAD
// var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');
// var clazzsRouter = require('./routes/clazzs');
=======
<<<<<<< HEAD
>>>>>>> 59d6d57fab16c3402d4cdb99906c94eb0307d6dd
var seatsRouter = require('./routes/seats');
var cinemasRouterCk = require('./routes/cinemasCk');
var theatersRouterCk = require('./routes/theatersCk');
var badSeatsRouter = require('./routes/badSeats');
<<<<<<< HEAD

=======
=======
>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757
>>>>>>> 59d6d57fab16c3402d4cdb99906c94eb0307d6dd

// // var usersRouter = require('./routes/users');
// var studentsRouter = require('./routes/students');
// var clazzsRouter = require('./routes/clazzs');
var cinemasRouter = require('./routes/cinemas');

// var usersRouter = require('./routes/users');
var schedulesRouter = require('./routes/schedules');

// var cinemasRouter = require('./routes/');





var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.use('/', indexRouter); 
app.use('/seats', seatsRouter); 
app.use('/cinemasCk', cinemasRouterCk); 
app.use('/theatersCk', theatersRouterCk); 
app.use('/badSeats', badSeatsRouter); 

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
<<<<<<< HEAD
app.use('/movies', moviesRouter); 
// app.use('/clazzs', clazzsRouter); 
=======

// app.use('/students', studentsRouter); 
// app.use('/clazzs', clazzsRouter); 
app.use('/cinemas', cinemasRouter); 

app.use('/schedules', schedulesRouter);


<<<<<<< HEAD

=======
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
