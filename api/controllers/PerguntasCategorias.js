const path = require('path');
const Database = require('../Database');

const basePathModels = [__dirname, '..', 'models'];
const sequelize = Database.getInstance();
const PerguntasCategoria = sequelize.import(path.join(...basePathModels, 'PerguntasCategoria.js'));

module.exports = {

};
