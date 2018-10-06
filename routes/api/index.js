const path = require('path');
const express = require('express');
const router = express.Router();

const basePathControllers = [ __dirname, '..', '..', 'api', 'controllers' ];

const Projetos = require(path.join(...basePathControllers, 'Projetos.js'));

// TODO: alterar para manter as rotas dinamicas e bem organizadas (usar routes/view como exemplo)
router.get('/projetos/pesquisar', Projetos.listar);

module.exports = router;