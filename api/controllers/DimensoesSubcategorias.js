const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const DimensoesSubcategorias = sequelize.import(path.join(...basePathModels, 'DimensoesSubcategorias.js'));

module.exports = {

};
