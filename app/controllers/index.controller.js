const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.json({success: true, data: 'Welcome to McKinley & Rice'});
})

module.exports = router;