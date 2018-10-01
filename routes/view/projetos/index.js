var express = require('express');
var router = express.Router();

var tab = 1;
var css = ['projetos'];
var js = ['projetos'];

router.get('/', function (req, res, next) {
    res.render('projetos', {
        js,
        tab,
        css,
        title: 'Projetos'
    });
});

router.get('/:id', function (req, res, next) {
    res.render('projeto', {
        js,
        tab,
        css,
        id: req.params.id
    });
});

module.exports = router;