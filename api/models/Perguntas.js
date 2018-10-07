const path = require('path');
const Database = require('../Database');

const sequelize = Database.getInstance();
const PerguntasCategorias = sequelize.import(path.join(__dirname, 'PerguntasCategorias.js'));

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Perguntas', {
        perguntaid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        perguntacategoriaid: {
            type: DataTypes.INTEGER,
            references: {
                model: PerguntasCategorias,
                key: 'perguntacategoriaid'
            }
        },
        descricao: DataTypes.STRING,
        ordem: DataTypes.INT,
        ativo: DataTypes.TINYINY
    });
};