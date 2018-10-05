const Database = require('../Database');
const Sequelize = require('sequelize');

const sequelize = Database.getInstance();

const StatusProjetos = sequelize.define('StatusProjetos', {
    statusprojetoid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: Sequelize.STRING,
    ordem: Sequelize.INTEGER,
    ativo: Sequelize.TINYINT
});

module.exports = StatusProjetos;