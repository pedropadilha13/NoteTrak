const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const DimensoesCategorias = sequelize.import(path.join(...basePathModels, 'DimensoesCategorias.js'));

module.exports = {

};
