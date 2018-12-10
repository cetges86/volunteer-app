const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');
// const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//app.use('/users', usersRouter);

//THIS CODE DOES SOMETHING THAT BLOCKS MY MONGO CLIENT REQ - EVERYTHING IS A 404
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('error'+ err);
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/volunteer_posts";
mongoose.Promise = Promise;
console.log(MONGODB_URI);
mongoose.connect(MONGODB_URI);

var port = process.env.PORT || '3001';
app.listen(port, () => {
  console.log("Server started on port: " + port);
  //process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); });
});


module.exports = app;
