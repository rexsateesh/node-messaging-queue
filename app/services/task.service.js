const db = require('../../models');
const redisQueue = require('../lib/redis');

const taskService = {
    getAllTask(req, res) {
        db.Task.findAll().then((tasks) => res.send({success: true, data: tasks}))
        .catch((err) => res.send({success: false, data: err}));
    },
    createTask(req, res) {
        redisQueue.send(req.body).then(() => {
            res.send({success: true, data: 'Task added into queue'});
        }, error => {
            res.send({success: false, data: 'Somethig went wrong'});
        });
    },
    createTaskQueue() {
        redisQueue.createQueue();
    },
    readQueueAndCreateTask() {
        redisQueue.receive().then((queue) => {
            if (typeof queue.id === 'undefined')
                return;
            
            db.Task.create(JSON.parse(queue.message)).then(res => {
                console.log(`Created task for ${queue.id}`);
                redisQueue.delete(queue.id).then(() => console.log(`Deleted queue id ${queue.id}`))
            });
        });
    }
}

module.exports = taskService;