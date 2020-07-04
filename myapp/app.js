var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("./dao/db");
var app = express();
var adminsRouter = require('./routes/admins');
var usersRouter = require('./routes/users');
var theatersRouter = require('./routes/theaters');
var GetcinemaRouter = require('./routes/Getcinema');

var moviesRouter = require('./routes/movies');
var seatsRouter = require('./routes/seats');
var cinemasRouterCk = require('./routes/cinemasCk');
var theatersRouterCk = require('./routes/theatersCk');
var badSeatsRouter = require('./routes/badSeats');
var cinemasRouter = require('./routes/cinemas');
var schedulesRouter = require('./routes/schedules');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); 
app.use('/seats', seatsRouter); 
app.use('/cinemasCk', cinemasRouterCk); 
app.use('/theatersCk', theatersRouterCk); 
app.use('/badSeats', badSeatsRouter); 
app.use('/admins',adminsRouter);
app.use('/users', usersRouter);
app.use('/theaters', theatersRouter); 
app.use('/Getcinema', GetcinemaRouter); 
app.use('/movies', moviesRouter); 
app.use('/cinemas', cinemasRouter); 
app.use('/schedules', schedulesRouter);

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
