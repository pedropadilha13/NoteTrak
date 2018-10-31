const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const StatusProjetos = sequelize.import(path.join(...basePathModels, 'StatusProjetos.js'));

module.exports = {

};
