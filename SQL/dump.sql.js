/** 
 * ARQUIVO GERADO PARA CRIACAO DAS
 * TABELAS UTILIZANDO O SEQUELIZE.
 * 
 *  ________________________
 * |                        |
 * |   !!!  CUIDADO  !!!    |
 * |                        |
 * | Este arquivo dropa as  |
 * | tabelas para recria-las|
 * | depois. NUNCA EXECUTE  |
 * | SEM ABSOLUTA CERTEZA   |
 * | DO QUE ESTA FAZENDO.   |
 * |________________________|
 * 
 */

const path = require('path');
const Database = require('../api/Database');
const sequelize = Database.getInstance();

const basePath = [ __dirname, '..', 'api', 'models' ];

const StatusProjetos = sequelize.import(path.join(...basePath, 'StatusProjetos.js'));
const Projetos = sequelize.import(path.join(...basePath, 'Projetos.js'));

StatusProjetos.sync({ force: true })
    .then(() => Projetos.sync({ force: true }))
    .then(() => {
        console.log('Tabelas criadas com sucesso!');
        Database.closeInstance();
    })
    .catch(error => console.log(error));