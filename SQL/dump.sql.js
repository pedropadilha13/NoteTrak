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
const PerguntasCategorias = sequelize.import(path.join(...basePath, 'PerguntasCategorias.js'));
const Perguntas = sequelize.import(path.join(...basePath, 'Perguntas.js'));
const ProjetosPerguntas = sequelize.import(path.join(...basePath, 'ProjetosPerguntas.js'));
const DimensoesCategorias = sequelize.import(path.join(...basePath, 'DimensoesCategorias.js'));
const DimensoesSubcategorias = sequelize.import(path.join(...basePath, 'DimensoesSubcategorias.js'));
const Dimensoes = sequelize.import(path.join(...basePath, 'Dimensoes.js'));
const ProjetosDimensoes = sequelize.import(path.join(...basePath, 'ProjetosDimensoes.js'));
const ProjetosTemplates = sequelize.import(path.join(...basePath, 'ProjetosTemplates.js'));

StatusProjetos.sync({ force: true })
    .then(() => Projetos.sync({ force: true }))
    .then(() => PerguntasCategorias.sync({ force: true }))
    .then(() => Perguntas.sync({ force: true }))
    .then(() => ProjetosPerguntas.sync({ force: true }))
    .then(() => DimensoesCategorias.sync({ force: true }))
    .then(() => DimensoesSubcategorias.sync({ force: true }))
    .then(() => Dimensoes.sync({ force: true }))
    .then(() => ProjetosDimensoes.sync({ force: true }))
    .then(() => ProjetosTemplates.sync({ force: true }))
    .then(() => {
        console.log('Tabelas criadas com sucesso!');
        Database.closeInstance();
    })
    .catch(error => console.log(error));