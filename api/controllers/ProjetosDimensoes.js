const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const ProjetoDimensoes = sequelize.import(path.join(...basePathModels, 'ProjetoDimensoes.js'));

module.exports = {

};
