var express = require('express');
var router = express.Router();

// TODO: alterar para manter as rotas dinamicas e bem organizadas (usar routes/view como exemplo)
router.get('/projetos/pesquisar', function (req, res, next) {
    setTimeout(() => {
        res.json({
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
    }, 300);
});

module.exports = router;