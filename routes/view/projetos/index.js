var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('projetos', {
        title: 'Projetos'
    });
});

router.get('/:id', function (req, res, next) {
    res.render('projeto', {
        id: req.params.id
    });
});

module.exports = router;