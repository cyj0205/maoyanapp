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
var adminsRouter = require('./routes/admins');
var usersRouter = require('./routes/users');
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 478c5bbab4ebc93b3c3d2d064027e7a34649c105
// var usersRouter = require('./routes/users');
// var studentsRouter = require('./routes/students');
// var clazzsRouter = require('./routes/clazzs');
var theatersRouter = require('./routes/theaters');
var GetcinemaRouter = require('./routes/Getcinema');
// var cinemasRouter = require('./routes/theaters');
var app = express();
// var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');
var seatsRouter = require('./routes/seats');
var cinemasRouterCk = require('./routes/cinemasCk');
var theatersRouterCk = require('./routes/theatersCk');
var badSeatsRouter = require('./routes/badSeats');
<<<<<<< HEAD
=======
=======
>>>>>>> 40b14582022bfa0bfbe300fd1a47676f90df4757
>>>>>>> 57a6baf23a07d4691d65f10435f87658596df05a

// // var usersRouter = require('./routes/users');
// var studentsRouter = require('./routes/students');
// var clazzsRouter = require('./routes/clazzs');
>>>>>>> 478c5bbab4ebc93b3c3d2d064027e7a34649c105
var cinemasRouter = require('./routes/cinemas');
var schedulesRouter = require('./routes/schedules');
<<<<<<< HEAD
>>>>>>> 1bc0d791fe28a596ebfd8ce87c4debf5f874daee

=======
>>>>>>> 57a6baf23a07d4691d65f10435f87658596df05a



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
<<<<<<< HEAD
// app.use('/', indexRouter)
// app.use('/users', usersRouter);
=======
=======
app.use('/', indexRouter);
<<<<<<< HEAD
app.use('/admins',adminsRouter);
app.use('/users', usersRouter);
=======
// app.use('/users', usersRouter);

>>>>>>> 478c5bbab4ebc93b3c3d2d064027e7a34649c105
// app.use('/students', studentsRouter); 
app.use('/theaters', theatersRouter); 
app.use('/Getcinema', GetcinemaRouter); 
app.use('/movies', moviesRouter); 
<<<<<<< HEAD
=======
// app.use('/clazzs', clazzsRouter); 
<<<<<<< HEAD
app.use('/cinemas', cinemasRouter); 

app.use('/schedules', schedulesRouter);
>>>>>>> 1bc0d791fe28a596ebfd8ce87c4debf5f874daee

=======
=======

// app.use('/students', studentsRouter); 
// app.use('/clazzs', clazzsRouter); 
>>>>>>> 478c5bbab4ebc93b3c3d2d064027e7a34649c105
app.use('/cinemas', cinemasRouter); 
app.use('/schedules', schedulesRouter);
>>>>>>> 57a6baf23a07d4691d65f10435f87658596df05a



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
