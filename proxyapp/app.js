var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require("express-jwt");
const {secretKey} = require("./util/salt");
const {targetUrl} = require("./util/baseConfig");

var indexRouter = require('./routes/index');
<<<<<<< HEAD

// var usersRouter = require('./routes/users');
// var schedulesRouter = require('./routes/schedules');
=======
// var usersRouter = require('./routes/users');
// var studentsRouter = require('./routes/students');
>>>>>>> 017d0a72eb220c21f052a4c85e654d0830021125

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
// app.use(jwt({ secret: secretKey,credentialsRequired: true}).unless({path: ['/users/login',"/users/reg"]}));
app.use('/api', exampleProxy);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
// app.use('/users', usersRouter);
<<<<<<< HEAD
// app.use('/schedules', schedulesRouter);
=======
// app.use('/students', studentsRouter);
>>>>>>> 017d0a72eb220c21f052a4c85e654d0830021125

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
