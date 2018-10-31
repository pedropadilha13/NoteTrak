const path = require('path');
const express = require('express');
const router = express.Router();

const basePathControllers = [ __dirname, '..', '..', 'api', 'controllers' ];

const Dimensoes = require(path.join(...basePathControllers, 'Dimensoes.js'));
const DimensoesCategorias = require(path.join(...basePathControllers, 'DimensoesCategorias.js'));
const DimensoesSubcategorias = require(path.join(...basePathControllers, 'DimensoesSubcategorias.js'));
const Perguntas = require(path.join(...basePathControllers, 'Perguntas.js'));
const PerguntasCategorias = require(path.join(...basePathControllers, 'PerguntasCategorias.js'));
const Projetos = require(path.join(...basePathControllers, 'Projetos.js'));
const ProjetosDimensoes = require(path.join(...basePathControllers, 'ProjetosDimensoes.js'));
const ProjetosPerguntas = require(path.join(...basePathControllers, 'ProjetosPerguntas.js'));
const ProjetosTemplates = require(path.join(...basePathControllers, 'ProjetosTemplates.js'));
const StatusProjetos = require(path.join(...basePathControllers, 'StatusProjetos.js'));

// TODO: alterar para manter as rotas dinamicas e bem organizadas (usar routes/view como exemplo)

// /dimensoes
router.get('/dimensoes/pesquisar', Dimensoes.listar);
router.get('/dimensoes/pesquisar/:id', Dimensoes.pesquisar);
router.post('/dimensoes/adicionar', Dimensoes.adicionar);
router.post('/dimensoes/atualizar', Dimensoes.atualizar);

// /dimensoescategorias
router.get('/dimensoescategorias/pesquisar', Dimensoes.listar);
router.get('/dimensoescategorias/pesquisar/:id', Dimensoes.pesquisar);
router.post('/dimensoescategorias/adicionar', Dimensoes.adicionar);
router.post('/dimensoescategorias/atualizar', Dimensoes.atualizar);

// /dimensoessubcategorias
router.get('/dimensoessubcategorias/pesquisar', Dimensoes.listar);
router.get('/dimensoessubcategorias/pesquisar/:id', Dimensoes.pesquisar);
router.post('/dimensoessubcategorias/adicionar', Dimensoes.adicionar);
router.post('/dimensoessubcategorias/atualizar', Dimensoes.atualizar);

// /perguntas
router.get('/perguntas/pesquisar', Perguntas.listar);
router.get('/perguntas/pesquisar/:id', Perguntas.pesquisar);
router.post('/perguntas/adicionar', Perguntas.adicionar);
router.post('/perguntas/atualizar', Perguntas.atualizar);

// /perguntascategorias
router.get('/perguntascategorias/pesquisar', Dimensoes.listar);
router.get('/perguntascategorias/pesquisar/:id', Dimensoes.pesquisar);
router.post('/perguntascategorias/adicionar', Dimensoes.adicionar);
router.post('/perguntascategorias/atualizar', Dimensoes.atualizar);

// /projetos
router.get('/projetos/pesquisar', Projetos.listar);
router.get('/projetos/pesquisar/inativos', Projetos.pesquisarInativos);
router.get('/projetos/pesquisar/:id', Projetos.pesquisar);
router.post('/projetos/adicionar', Projetos.adicionar);
router.post('/projetos/atualizar', Projetos.atualizar);

// /projetosdimensoes
router.get('/projetosdimensoes/pesquisar', Dimensoes.listar);
router.get('/projetosdimensoes/pesquisar/:id', Dimensoes.pesquisar);
router.post('/projetosdimensoes/adicionar', Dimensoes.adicionar);
router.post('/projetosdimensoes/atualizar', Dimensoes.atualizar);

// /projetosperguntas
router.get('/projetosperguntas/pesquisar', Dimensoes.listar);
router.get('/projetosperguntas/pesquisar/:id', Dimensoes.pesquisar);
router.post('/projetosperguntas/adicionar', Dimensoes.adicionar);
router.post('/projetosperguntas/atualizar', Dimensoes.atualizar);

// /projetostemplates
router.get('/projetostemplates/pesquisar', Dimensoes.listar);
router.get('/projetostemplates/pesquisar/:id', Dimensoes.pesquisar);
router.post('/dimeprojetostemplatesnsoes/adicionar', Dimensoes.adicionar);
router.post('/projetostemplates/atualizar', Dimensoes.atualizar);

// /statusprojetos
router.get('/statusprojetos/pesquisar', Dimensoes.listar);
router.get('/statusprojetos/pesquisar/:id', Dimensoes.pesquisar);
router.post('/statusprojetos/adicionar', Dimensoes.adicionar);
router.post('/statusprojetos/atualizar', Dimensoes.atualizar);

module.exports = router;
