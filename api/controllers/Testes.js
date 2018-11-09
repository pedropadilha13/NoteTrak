const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const Projetos = sequelize.import(path.join(...basePathModels, 'Projetos.js'));
const StatusProjetos = sequelize.import(path.join(...basePathModels, 'StatusProjetos.js'));

Projetos.hasOne(StatusProjetos, {foreignKey: 'statusprojetoid'});

module.exports = {
    testeJoin: function (req, res, next) {
        let id = req.params.id;
        Projetos.findById(id, {
            include: [StatusProjetos]
        }).then(result => {
            return res.json({
                code: 1,
                body: {
                    message: result
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
