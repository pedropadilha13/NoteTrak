const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const StatusProjetos = sequelize.import(path.join(...basePathModels, 'StatusProjetos.js'));

module.exports = {
    listar: function (req, res, next) {
        StatusProjetos.findAll().then(result => {
            return res.json({
                code: 1,
                body: {
                    statusProjetos: result
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
        StatusProjetos.findById(req.params.id).then(result => {
            return res.json({
                code: 1,
                body: {
                    statusProjeto: result
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
        StatusProjetos.create(req.body).then(result => {
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
        StatusProjetos.update(req.body, {
            where: {
                statusprojetoid: req.body.statusprojetoid
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
