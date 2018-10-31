const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const ProjetosTemplates = sequelize.import(path.join(...basePathModels, 'ProjetosTemplates.js'));

module.exports = {

};
