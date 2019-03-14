const errorHandler = function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Oop\'s something went wrong!')
}

module.exports = errorHandler;