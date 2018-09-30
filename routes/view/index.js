var express = require('express');
var router = express.Router();

var projetos = require('./projetos');

router.get('/', function (req, res, next) {
    res.render('index');
});

router.use('/projetos', projetos);

module.exports = router;