const path = require('path');
const Database = require('../Database');

const sequelize = Database.getInstance();
const Perguntas = sequelize.import(path.join(__dirname, 'Perguntas.js'));
const Projetos = sequelize.import(path.join(__dirname, 'Projetos.js'));

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('ProjetosPerguntas', {
        projetoperguntaid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        perguntaid: {
            type: DataTypes.INTEGER,
            references: {
                model: Perguntas,
                key: 'perguntaid'
            }
        },
        projetoid: {
            type: DataTypes.INTEGER,
            references: {
                model: Projetos,
                key: 'projetoid'
            }
        },
        resposta: DataTypes.TINYINT,
        comentario: DataTypes.STRING
    });
};