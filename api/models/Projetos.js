const path = require('path');
const Database = require('../Database');

const sequelize = Database.getInstance();
const StatusProjetos = sequelize.import(path.join(__dirname, 'StatusProjetos.js'));

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Projetos', {
        projetoid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        statusprojetoid: {
            type: DataTypes.INTEGER,
            references: {
                model: StatusProjetos,
                key: 'statusprojetoid'
            }
        },
        nome: DataTypes.STRING,
        empresa: DataTypes.STRING,
        contato: DataTypes.STRING,
        comentarios: DataTypes.STRING(510)
    });
};
