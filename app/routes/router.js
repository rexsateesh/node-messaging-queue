var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.controller');
var taskController = require('../controllers/task.controller');

router.use('/', indexController);
router.use('/task', taskController)

module.exports = router;
