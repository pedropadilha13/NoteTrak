const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const ProjetosPerguntas = sequelize.import(path.join(...basePathModels, 'ProjetosPerguntas.js'));

module.exports = {
    listar: function (req, res, next) {
        ProjetosPerguntas.findAll().then(result => {
            return res.json({
                code: 1,
                body: {
                    projetosPerguntas: result
                }
            });
        }).catch(error => {
            return res.json({
                code: 0,
                body: {
                    error
                }
            });
        });
    },
    pesquisar: function (req, res, next) {
        ProjetosPerguntas.findById(req.params.id).then(result => {
            return res.json({
                code: 1,
                body: {
                    projetoPergunta: result
                }
            });
        }).catch(error => {
            return res.json({
                code: 0,
                body: {
                    error
                }
            });
        });
    },
    adicionar: function (req, res, next) {
        ProjetosPerguntas.create(req.body).then(result => {
            return res.json({
                code: 1,
                body: result
            });
        }).catch(error => {
            return res.json({
                code: 0,
                body: error
            });
        });
    },
    atualizar: function (req, res, next) {
        ProjetosPerguntas.update(req.body, {
            where: {
                projetoperguntaid: req.body.projetoperguntaid
            }
        }).then(result => {
            return res.json({
                code: 1,
                body: result
            });
        }).catch(error => {
            return res.json({
                code: 0,
                body: error
            });
        });
    }
};
