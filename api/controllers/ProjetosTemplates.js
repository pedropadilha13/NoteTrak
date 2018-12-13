const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const ProjetosTemplates = sequelize.import(path.join(...basePathModels, 'ProjetosTemplates.js'));

module.exports = {
    listar: function (req, res, next) {
        ProjetosTemplates.findAll().then(result => {
            return res.json({
                code: 1,
                body: {
                    projetosTemplates: result
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
        ProjetosTemplates.findById(req.params.id).then(result => {
            return res.json({
                code: 1,
                body: {
                    projetoTemplate: result
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
        ProjetosTemplates.create(req.body).then(result => {
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
        ProjetosTemplates.update(req.body, {
            where: {
                templateid: req.body.templateid
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
