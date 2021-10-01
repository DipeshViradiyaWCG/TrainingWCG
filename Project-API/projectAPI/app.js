var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var exphbs = require('express-handlebars');
var mongoose = require('mongoose');


mongoose.connect(
  // "localhost:27017/crud-multiple",
  "mongodb://crud-multiple:crud-multiple@localhost:27017/crud-multiple").then(
    () => {console.log("Connected");}
  ).catch(
    (err) => {throw err;}
);

var indexRouter = require('./routes/index');
var productRouter = require('./routes/product');
// var adminRouter = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: 'main',
    extname: ".handlebars",
    partialsDir: [path.join(__dirname, "views/partials")],
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/products', productRouter);

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
  res.status(err.status || 500).send("error");
  // res.render('error');
});

module.exports = app;
