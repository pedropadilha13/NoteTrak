const path = require('path');
const Database = require('../Database');

const sequelize = Database.getInstance();
const DimensoesSubcategorias = sequelize.import(path.join(__dirname, 'DimensoesSubcategorias.js'));

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Dimensoes', {
        dimensaoid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dimensaosubcategoriaid: {
            type: DataTypes.INTEGER,
            references: {
                model: DimensoesSubcategorias,
                key: 'dimensaosubcategoriaid'
            }
        },
        descricao: DataTypes.STRING,
        ordem: DataTypes.INTEGER,
        ativo: DataTypes.TINYINT
    });
};