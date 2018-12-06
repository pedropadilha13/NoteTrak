var express = require('express');
var router = express.Router();

var projetos = require('./projetos');
var perguntas = require('./perguntas');
var dimensoes = require('./dimensoes');

router.get('/', function (req, res, next) {
    res.render('index', {
        tab: 0,
        css: ['projetos'],
        js: ['inicio']
    });
});

router.use('/projetos', projetos);
router.use('/perguntas', perguntas);
router.use('/dimensoes', dimensoes);

module.exports = router;