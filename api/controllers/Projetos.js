const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const Projetos = sequelize.import(path.join(...basePathModels, 'Projetos.js'));
const StatusProjetos = sequelize.import(path.join(...basePathModels, 'StatusProjetos.js'));

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
    adicionar: function(req, res, next) {
        Pojetos.create({
            values: req.body
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
    atualizar: function(req, res, next) {
        Projetos.update({
            values: req.body,
            options: {
                where: {id: req.body.id}
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
    pesquisarInativos: function (req, res, next) {
        Projetos.findAll({
            include: {
                model: StatusProjetos,
                where: {
                    ativo: 0
                }
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