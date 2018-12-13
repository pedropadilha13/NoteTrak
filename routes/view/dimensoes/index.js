var express = require('express');
var router = express.Router();

var tab = 3;
var css = [];
var js = ['dimensoes'];

router.get('/', function (req, res, next) {
    res.render('dimensoes', {
        js,
        tab,
        css,
        title: 'Dimensões do Projeto'
    });
});

module.exports = router;