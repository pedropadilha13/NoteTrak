var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.json({
        code: 1,
        body: 'It works!'
    });
});

module.exports = router;