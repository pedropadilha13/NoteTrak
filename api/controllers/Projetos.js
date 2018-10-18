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
                    body: result
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
                        result
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
        
    }

};