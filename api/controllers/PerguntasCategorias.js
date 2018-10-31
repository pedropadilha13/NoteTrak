const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const PerguntasCategorias = sequelize.import(path.join(...basePathModels, 'PerguntasCategorias.js'));

module.exports = {
    listar: function (req, res, next) {
        PerguntasCategorias.findAll().then(result => {
            return res.json({
                code: 1,
                body: {
                    perguntasCategorias: result
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
        PerguntasCategorias.findById(req.params.id).then(result => {
            return res.json({
                code: 1,
                body: {
                    perguntaCategoria: result
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
        PerguntasCategorias.create(req.body).then(result => {
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
        PerguntasCategorias.update(req.body, {
            where: {
                perguntacategoriaid: req.body.perguntacategoriaid
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
