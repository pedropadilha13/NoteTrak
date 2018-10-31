const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const ProjetosPerguntas = sequelize.import(path.join(...basePathModels, 'ProjetosPerguntas.js'));

module.exports = {

};
