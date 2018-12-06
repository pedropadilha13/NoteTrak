var express = require('express');
var router = express.Router();

var tab = 2;
var css = [];
var js = ['perguntas'];

router.get('/', function (req, res, next) {
    res.render('perguntas', {
        js,
        tab,
        css,
        title: 'Formulário de Perguntas'
    });
});

module.exports = router;