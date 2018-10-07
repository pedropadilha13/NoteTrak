const path = require('path');
const Database = require('../Database');

const sequelize = Database.getInstance();
const Projetos = sequelize.import(path.join(__dirname, 'Projetos.js'));
const Dimensoes = sequelize.import(path.join(__dirname, 'Dimensoes.js'));

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('ProjetosTemplates', {
        templateid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        projetoid: {
            type: DataTypes.INTEGER,
            references: {
                model: Projetos,
                key: 'projetoid'
            }
        },
        dimensaoid: {
            type: DataTypes.INTEGER,
            references: {
                model: Dimensoes,
                key: 'dimensaoid'
            }
        },
        nivel: DataTypes.TINYINT
    });
};