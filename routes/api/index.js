const path = require('path');
const express = require('express');
const router = express.Router();

const basePathControllers = [ __dirname, '..', '..', 'api', 'controllers' ];

const Dimensoes = require(path.join(...basePathControllers, 'Dimensoes.js'));
const DimensoesCategorias = require(path.join(...basePathControllers, 'DimensoesCategorias.js'));
const DimensoesSubCategorias = require(path.join(...basePathControllers, 'DimensoesSubcategorias.js'));
const Perguntas = require(path.join(...basePathControllers, 'Perguntas.js'));
const PerguntasCategorias = require(path.join(...basePathControllers, 'PerguntasCategorias.js'));
const Projetos = require(path.join(...basePathControllers, 'Projetos.js'));
const ProjetosDimensoes = require(path.join(...basePathControllers, 'ProjetosDimensoes.js'));
const ProjetosPerguntas = require(path.join(...basePathControllers, 'ProjetosPerguntas.js'));
const ProjetosTemplates = require(path.join(...basePathControllers, 'ProjetosTemplates.js'));
const StatusProjetos = require(path.join(...basePathControllers, 'StatusProjetos.js'));
const Testes = require(path.join(...basePathControllers, 'Testes.js'));

// TODO: alterar para manter as rotas dinamicas e bem organizadas (usar routes/view como exemplo)

// /dimensoes
router.get('/dimensoes/pesquisar', Dimensoes.listar);
router.get('/dimensoes/pesquisar/:id', Dimensoes.pesquisar);
router.post('/dimensoes/adicionar', Dimensoes.adicionar);
router.post('/dimensoes/atualizar', Dimensoes.atualizar);

// /dimensoescategorias
router.get('/dimensoescategorias/pesquisar', DimensoesCategorias.listar);
router.get('/dimensoescategorias/pesquisar/:id', DimensoesCategorias.pesquisar);
router.post('/dimensoescategorias/adicionar', DimensoesCategorias.adicionar);
router.post('/dimensoescategorias/atualizar', DimensoesCategorias.atualizar);

// /dimensoessubcategorias
router.get('/dimensoessubcategorias/pesquisar', DimensoesSubCategorias.listar);
router.get('/dimensoessubcategorias/pesquisar/:id', DimensoesSubCategorias.pesquisar);
router.post('/dimensoessubcategorias/adicionar', DimensoesSubCategorias.adicionar);
router.post('/dimensoessubcategorias/atualizar', DimensoesSubCategorias.atualizar);

// /perguntas
router.get('/perguntas/pesquisar', Perguntas.listar);
router.get('/perguntas/pesquisar/:id', Perguntas.pesquisar);
router.post('/perguntas/adicionar', Perguntas.adicionar);
router.post('/perguntas/atualizar', Perguntas.atualizar);

// /perguntascategorias
router.get('/perguntascategorias/pesquisar', PerguntasCategorias.listar);
router.get('/perguntascategorias/pesquisar/:id', PerguntasCategorias.pesquisar);
router.post('/perguntascategorias/adicionar', PerguntasCategorias.adicionar);
router.post('/perguntascategorias/atualizar', PerguntasCategorias.atualizar);

// /projetos
router.get('/projetos/pesquisar', Projetos.listar);
router.get('/projetos/pesquisar/inativos', Projetos.pesquisarInativos);
router.get('/projetos/pesquisar/:id', Projetos.pesquisar);
router.post('/projetos/adicionar', Projetos.adicionar);
router.post('/projetos/atualizar', Projetos.atualizar);

// /projetosdimensoes
router.get('/projetosdimensoes/pesquisar', ProjetosDimensoes.listar);
router.get('/projetosdimensoes/pesquisar/:id', ProjetosDimensoes.pesquisar);
router.post('/projetosdimensoes/adicionar', ProjetosDimensoes.adicionar);
router.post('/projetosdimensoes/atualizar', ProjetosDimensoes.atualizar);

// /projetosperguntas
router.get('/projetosperguntas/pesquisar', ProjetosPerguntas.listar);
router.get('/projetosperguntas/pesquisar/:id', ProjetosPerguntas.pesquisar);
router.post('/projetosperguntas/adicionar', ProjetosPerguntas.adicionar);
router.post('/projetosperguntas/atualizar', ProjetosPerguntas.atualizar);

// /projetostemplates
router.get('/projetostemplates/pesquisar', ProjetosTemplates.listar);
router.get('/projetostemplates/pesquisar/:id', ProjetosTemplates.pesquisar);
router.post('/dimeprojetostemplatesnsoes/adicionar', ProjetosTemplates.adicionar);
router.post('/projetostemplates/atualizar', ProjetosTemplates.atualizar);

// /statusprojetos
router.get('/statusprojetos/pesquisar', StatusProjetos.listar);
router.get('/statusprojetos/pesquisar/:id', StatusProjetos.pesquisar);
router.post('/statusprojetos/adicionar', StatusProjetos.adicionar);
router.post('/statusprojetos/atualizar', StatusProjetos.atualizar);

// /teste
router.get('/teste/join/:id', Testes.testeJoin);

module.exports = router;
