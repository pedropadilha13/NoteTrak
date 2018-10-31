const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const Projetos = sequelize.import(path.join(...basePathModels, 'Projetos.js'));

module.exports = {
    listar: function (req, res, next) {
        Projetos.findAll()
            .then(result => {
                console.log(result);
                return res.json({
                    code: 1,
                    body: {
                        projetos: result
                    }
                });
            })
            .catch(error => {
                return res.json({
                    code: 0,
                    body: {
                        error
                    }
                });
            });
    },
    pesquisar: function (req, res, next) {
        Projetos.findById(req.params.id).then(result => {
            if (result) {
                return res.json({
                    code: 1,
                    body: {
                        projeto: result
                    }
                });
            } else {
                return res.json({});
            }
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
        Projetos.create(req.body).then(result => {
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
        Projetos.update(req.body, {
            where: { projetoid: req.body.projetoid }
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
    pesquisarInativos: function (req, res, next) {
        Projetos.findAll({
            where: {
                statusprojetoid: 4
            }
        }).then(results => {
            return res.json({
                code: 1,
                body: {
                    projetos: results
                }
            });
        }).catch(error => {
            return res.json({
                code: 0,
                body: error
            });
        });
    }
};
