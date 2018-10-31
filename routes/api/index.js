const path = require('path');
const express = require('express');
const router = express.Router();

const basePathControllers = [ __dirname, '..', '..', 'api', 'controllers' ];

const Projetos = require(path.join(...basePathControllers, 'Projetos.js'));
const Perguntas = require(path.join(...basePathControllers, 'Perguntas.js'));
const Dimensoes = require(path.join(...basePathControllers, 'Dimensoes.js'));

// TODO: alterar para manter as rotas dinamicas e bem organizadas (usar routes/view como exemplo)
// /projetos
router.get('/projetos/pesquisar', Projetos.listar);
router.get('/projetos/pesquisar/inativos', Projetos.pesquisarInativos);
router.get('/projetos/pesquisar/:id', Projetos.pesquisar);
router.post('/projetos/adicionar', Projetos.adicionar);
router.post('/projetos/atualizar', Projetos.atualizar);

// /perguntas
router.get('/perguntas/pesquisar', Perguntas.listar);
router.get('/perguntas/pesquisar/:id', Perguntas.pesquisar);
router.post('/perguntas/adicionar', Perguntas.adicionar);
router.post('/perguntas/atualizar', Perguntas.atualizar);

// /dimensoes
router.get('/dimensoes/pesquisar', Dimensoes.listar);
router.get('/dimensoes/pesquisar/:id', Dimensoes.pesquisar);
router.post('/dimensoes/adicionar', Dimensoes.adicionar);
router.post('/dimensoes/atualizar', Dimensoes.atualizar);

module.exports = router;
