require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const appRouter = require('./app/routes/router');
const errorHandler = require('./app/middleware/errorHandler.middlware');
const taskService = require('./app/services/task.service')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(appRouter); // Router Handler

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

app.use(errorHandler); // Error Handler

taskService.createTaskQueue(); // Create task queue
(function(callback) {
    setInterval(callback, 1000);
}(taskService.readQueueAndCreateTask));

module.exports = app;
