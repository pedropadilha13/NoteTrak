const path = require('path');
const Database = require('../Database');

const basePathModels = [ __dirname, '..', 'models' ];
const sequelize = Database.getInstance();
const Projetos = sequelize.import(path.join(...basePathModels, 'Projetos.js'));

module.exports = {
    listar: function (req, res, next) {
        Projetos.findAll()
            .then(() => {
                return res.json({
                    code: 1,
                    body: {
                        projetos: [
                            {
                                id: 1,
                                nome: 'Sistema de Consultoria em IoT',
                                empresa: 'BandTec',
                                contato: 'Mateus Larrubia',
                                status: 'Desenvolvimento',
                                statsId: 3,
                                progresso: 50
                            },
                            {
                                id: 2,
                                nome: 'Track & Trace',
                                empresa: 'Device BI',
                                status: 'Fase de Entrevistas',
                                statusId: 2,
                                progresso: 30
                            },
                            {
                                id: 3,
                                nome: 'Rastreabilidade de Notebooks',
                                status: 'Cancelado',
                                statusId: 0,
                                progresso: 100
                            }
                        ]
                    }
                });
            })
            .catch(error => {
                return res.json({
                    code: 0,
                    body: {
                        error
                    }
                });
            });
    }
};