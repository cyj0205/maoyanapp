var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {targetUrl} = require("./util/baseConfig");


// var indexRouter = require('./routes/index');

// var seatsRouter = require('./routes/seats');


// var indexRouter = require('./routes/index');

// var usersRouter = require('./routes/users');
// var studentsRouter = require('./routes/students');

// var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');

// var seatsRouter = require('./routes/seats');



// var usersRouter = require('./routes/users');
// var schedulesRouter = require('./routes/schedules');

// var usersRouter = require('./routes/users');
// var studentsRouter = require('./routes/students');



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

app.use('/movies', moviesRouter);
// app.use('/students', studentsRouter);

// app.use('/seats', seatsRouter);

// app.use('/users', usersRouter);
// app.use('/schedules', schedulesRouter);

// app.use('/students', studentsRouter);



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
