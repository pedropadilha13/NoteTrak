const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const Projetos = sequelize.import(path.join(...basePathModels, 'Projetos.js'));

module.exports = {
    listar: function (req, res, next) {
        sequelize.query('SELECT * FROM Projetos AS P INNER JOIN StatusProjetos AS SP ON SP.statusprojetoid = P.statusprojetoid', { type: sequelize.QueryTypes.SELECT }).then(result => {
            return res.json({
                code: 1,
                body: {
                    projetos: result
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
        var query = 'SELECT * FROM Projetos AS P INNER JOIN StatusProjetos AS SP ON SP.statusprojetoid = P.statusprojetoid WHERE P.projetoid = ' + (req.params.id | 0);
        sequelize.query(query, { type: sequelize.QueryTypes.SELECT }).then(response => {
            return res.json(response);
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
