const express = require('express')
const router = express.Router();
const taskService = require('../services/task.service');
const redisQueue = require('../lib/redis');

router.get('/', (req, res) => taskService.getAllTask(req, res));
router.post('/', (req, res) => taskService.createTask(req, res));

module.exports = router;