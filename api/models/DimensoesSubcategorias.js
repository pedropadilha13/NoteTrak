const path = require('path');
const Database = require('../Database');

const sequelize = Database.getInstance();
const DimensoesCategorias = sequelize.import(path.join(__dirname, 'DimensoesCategorias.js'));

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('DimensoesSubcategorias', {
        dimensaosubcategoriaid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dimensaocategoriaid: {
            type: DataTypes.INTEGER,
            references: {
                model: DimensoesCategorias,
                key: 'dimensaocategoriaid'
            }
        },
        descricao: DataTypes.STRING,
        ordem: DataTypes.INTEGER,
        ativo: DataTypes.TINYINT
    });
};