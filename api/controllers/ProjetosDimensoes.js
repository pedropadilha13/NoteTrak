const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const ProjetosDimensoes = sequelize.import(path.join(...basePathModels, 'ProjetosDimensoes.js'));

module.exports = {
    listar: function (req, res, next) {
        ProjetosDimensoes.findAll().then(result => {
            return res.json({
                code: 1,
                body: {
                    projetosDimensoes: result
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
        ProjetosDimensoes.findById(req.params.id).then(result => {
            return res.json({
                code: 1,
                body: {
                    projetoDimensao: result
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
        ProjetosDimensoes.create(req.body).then(result => {
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
        ProjetosDimensoes.update(req.body, {
            where: {
                projetodimensaoid: req.body.projetodimensaoid
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
