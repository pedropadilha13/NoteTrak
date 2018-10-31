const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const DimensoesCategorias = sequelize.import(path.join(...basePathModels, 'DimensoesCategorias.js'));

module.exports = {
    listar: function (req, res, next) {
        DimensoesCategorias.findAll().then(results => {
            return res.json({
                code: 1,
                dimensoesCategorias: results
            });
        }).catch(error => {
            return res.json({
                code: 0,
                body: error
            });
        });
    },
    pesquisar: function (req, res, next) {
        DimensoesCategorias.findById(req.params.id).then(result => {
            return res.json({
                code: 1,
                dimensaoCategoria: result
            });
        }).catch(error => {
            return res.json({
                code: 0,
                body: error
            });
        });
    },
    adicionar: function (req, res, next) {
        DimensoesCategorias.create(req.body).then(result => {
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
        Dimensoes.update(req.body, {
            where: {
                dimensaocategoriaid: req.body.dimensaocategoriaid
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
