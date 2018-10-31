const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const Perguntas = sequelize.import(path.join(...basePathModels, 'Perguntas.js'));

module.exports = {
    listar: function (req, res, next) {
        Perguntas.findAll().then(result => {
            //console.log(result);
            return res.json({
                code: 1,
                body: {
                    perguntas: result
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
        Perguntas.findById(req.params.id).then(result => {
            return res.json({
                code: 1,
                body: {
                    pergunta: result
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
        Perguntas.create(req.body).then(result => {
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
        Perguntas.update(req.body, {
            where: {
                perguntaid: req.body.perguntaid
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
    },

};
