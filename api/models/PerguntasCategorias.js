module.exports = (sequelize, DataTypes) => {
    return sequelize.define('PerguntasCategorias', {
        perguntacategoriaid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: DataTypes.STRING,
        ordem: DataTypes.INTEGER,
        ativo: DataTypes.TINYINT
    });
};