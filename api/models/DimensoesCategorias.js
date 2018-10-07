module.exports = (sequelize, DataTypes) => {
    return sequelize.define('DimensoesCategorias', {
        dimensaocategoriaid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: DataTypes.STRING,
        ordem: DataTypes.INTEGER,
        ativo: DataTypes.TINYINT
    });
};