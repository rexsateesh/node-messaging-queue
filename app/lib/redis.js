const RedisSMQ = require('rsmq');
const queueName = 'tasks';
const redis = new RedisSMQ({
    host: process.env.REDIS_HOST || '127.0.0.1', 
    port: process.env.REDIS_PORT || 6379,
    ns: "rsmq"
});

const redisQueue = {
    createQueue() {
        redis.createQueueAsync({qname: queueName}).catch(() => {
            console.log(`Queue '${queueName}' already exists`);
        });
    },
    send(msg) {
        return redis.sendMessageAsync({qname: queueName, message: JSON.stringify(msg)});
    },
    receive() {
        return redis.receiveMessageAsync({qname: queueName});
    },
    delete(queueId) {
        return redis.deleteMessageAsync({qname: queueName, id: queueId});
    },
    listQueues() {
        return redis.listQueuesAsync();
    }
}

module.exports = redisQueue;