const Sequelize = require('sequelize');
const Database = require('../Database');
const StatusProjetos = require('./StatusProjetos');

const sequelize = Database.getInstance();

const Projeto = sequelize.define('Projetos', {
    projetoid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    statusprojetoid: {
        type: Sequelize.INTEGER,
        references: {
            model: StatusProjetos,
            key: 'statusprojetoid'
        }
    },
    nome: Sequelize.STRING,
    empresa: Sequelize.STRING,
    contato: Sequelize.STRING,
    comentarios: Sequelize.STRING(510)
});

module.exports = Projeto;