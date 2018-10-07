const path = require('path');
const Database = require('../Database');

const sequelize = Database.getInstance();
const Dimensoes = sequelize.import(path.join(__dirname, 'Dimensoes.js'));
const Projetos = sequelize.import(path.join(__dirname, 'Projetos.js'));

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('ProjetosDimensoes', {
        projetodimensaoid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dimensaoid: {
            type: DataTypes.INTEGER,
            references: {
                model: Dimensoes,
                key: 'dimensaoid'
            }
        },
        projetoid: {
            type: DataTypes.INTEGER,
            references: {
                model: Projetos,
                key: 'projetoid'
            }
        },
        nivel: DataTypes.TINYINT,
        descricao: DataTypes.STRING
    });
};