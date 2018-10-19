(function (window, document) {
    'use strict';

    var Projeto = window.NoteTrakModules.Projeto;

    var projeto = new Projeto();

    // TODO: criar funcoes genericas de pre-envio de formularios e conclusao de requisicoes
    var $formPesquisarProjetos = document.querySelector('form[data-id="pesquisarProjetos"]');
    var $graficoProjetos = document.querySelector('[data-id="graficoProjetos"]');

    if ($formPesquisarProjetos) {
        $formPesquisarProjetos.addEventListener('submit', function (e) {
            e.preventDefault();
            var $resultadoPesquisaProjetos = document.querySelector('[data-id="resultadoPesquisaProjetos"]');
            var $inputPesquisarControl = e.currentTarget.querySelector('input[name="pesquisar"]').parentNode;
            $inputPesquisarControl.classList.add('is-loading');
            setSpinner($resultadoPesquisaProjetos);
            projeto.pesquisar().then(function (result) {
                var $documentFragment = document.createDocumentFragment();
                var projetos = result.body.projetos || [];
                projetos.forEach(function (projeto) {
                    var p = new Projeto(projeto);
                    $documentFragment.appendChild(p.getBox());
                });
                $resultadoPesquisaProjetos.empty().appendChild($documentFragment);
                $resultadoPesquisaProjetos.collapse('show');
                $inputPesquisarControl.classList.remove('is-loading');
            });
        });
    }

    if ($graficoProjetos) {
        var chartProjetos = new Chart($graficoProjetos, {
            type: 'radar',
            data: {
                labels: ['Ativos e Devices', 'Comunicação e Conectividade', 'Serviços de Backend', 'Padrões & Requerimentos regulatórios', 'Ambiente de Projeto'],
                datasets: [{
                    backgroundColor: 'rgba(71, 187, 270, 0.25)',
                    data: [2.48, 2, 3.25, 1.92, 2.25]
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scale: {
                    ticks: {
                        stepSize: 0.5
                    }
                }
            }
        });
    }
})(window, document);