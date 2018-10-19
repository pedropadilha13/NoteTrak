const path = require('path');
const express = require('express');
const router = express.Router();

const basePathControllers = [ __dirname, '..', '..', 'api', 'controllers' ];

const Projetos = require(path.join(...basePathControllers, 'Projetos.js'));

// TODO: alterar para manter as rotas dinamicas e bem organizadas (usar routes/view como exemplo)
router.get('/projetos/pesquisar', Projetos.listar);
router.get('/projetos/pesquisar/inativos', Projetos.pesquisarInativos);
router.get('/projetos/pesquisar/:id', Projetos.pesquisar);
router.post('/projetos/adicionar', Projetos.adicionar);
router.post('/projetos/atualizar', Projetos.atualizar);

module.exports = router;