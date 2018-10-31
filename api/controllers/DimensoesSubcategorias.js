const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const DimensoesSubcategorias = sequelize.import(path.join(...basePathModels, 'DimensoesSubcategorias.js'));

module.exports = {
    listar: function (req, res, next) {
        DimensoesSubcategorias.findAll().then(results => {
            return res.json({
                code: 1,
                dimensoes: results
            });
        }).catch(error => {
            return res.json({
                code: 0,
                body: error
            });
        });
    },
    pesquisar: function (req, res, next) {
        DimensoesSubcategorias.findById(req.params.id).then(result => {
            return res.json({
                code: 1,
                dimensao: result
            });
        }).catch(error => {
            return res.json({
                code: 0,
                body: error
            });
        });
    },
    adicionar: function (req, res, next) {
        DimensoesSubcategorias.create(req.body).then(result => {
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
        DimensoesSubcategorias.update(req.body, {
            where: {
                dimensaosubcategoriaid: req.body.dimensaosubcategoriaid
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
