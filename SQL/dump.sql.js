/** 
 * ARQUIVO GERADO PARA CRIACAO DAS
 * TABELAS UTILIZANDO O SEQUELIZE.
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

StatusProjetos.sync()
    .then(() => Projetos.sync())
    .then(() => PerguntasCategorias.sync())
    .then(() => Perguntas.sync())
    .then(() => ProjetosPerguntas.sync())
    .then(() => DimensoesCategorias.sync())
    .then(() => DimensoesSubcategorias.sync())
    .then(() => Dimensoes.sync())
    .then(() => ProjetosDimensoes.sync())
    .then(() => ProjetosTemplates.sync())
    .then(() => {
        Database.closeInstance();
        console.log('\n\nTODAS AS TABELAS FORAM CRIADAS COM SUCESSO!\n\n');
    })
    .catch(error => console.log(error));