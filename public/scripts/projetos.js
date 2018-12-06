(function (window, document) {
    'use strict';

    var Projeto = window.NoteTrakModules.Projeto;
    var Pergunta = window.NoteTrakModules.Pergunta;

    var projeto = new Projeto({ projetoid: getIdFromUrl() });
    var perguntas = new Pergunta();

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
        bindTabs();
        projeto.visualizar().then(function (result) {
            fillTabGeral((result.body || {}).projeto);
            perguntas.pesquisar().then(function (result) {
                fillTabPerguntas(result.body.perguntas);
            });
        });
    }

    function fillTabGeral(projeto) {
        var projeto = new Projeto(projeto || {});
        initializeChart($graficoProjetos, ['Ativos e Devices', 'Comunicação e Conectividade', 'Serviços de Backend', 'Padrões & Requerimentos regulatórios', 'Ambiente de Projeto'], [2.48, 2, 3.25, 1.92, 2.25]);
        projeto.fillPageByClass();
    }

    function fillTabPerguntas(perguntas) {
        var $documentFragment = document.createDocumentFragment();
        if (Array.isArray(perguntas)) {
            perguntas.forEach(function (pergunta) {
                var $p = document.createElement('p');
                $p.textContent = pergunta.descricao || '';
                $documentFragment.appendChild($p);
            });
            var $div = document.querySelector('[data-id="perguntas"]');
            if ($div) {
                $div.appendChild($documentFragment);
            }
        }
    }

    function initializeChart(context, labels, chartData) {
        return new Chart(context, {
            type: 'radar',
            data: {
                labels,
                datasets: [{
                    backgroundColor: 'rgba(71, 187, 270, 0.25)',
                    data: chartData
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

    function bindTabs() {
        var $tabs = document.querySelectorAll('[data-tab-target]');
        $tabs.forEach(function ($tab) {
            $tab.addEventListener('click', function (event) {
                $tabs.forEach(function ($tab) {
                    if ($tab !== event.currentTarget) {
                        $tab.classList.remove('is-active');
                        toggleCurrentTab($tab, 'none');
                    } else {
                        $tab.classList.add('is-active')
                        toggleCurrentTab($tab, 'block');
                    }
                });
            });
        });
    }

    function toggleCurrentTab($tab, display) {
        var $tabContent = document.querySelector($tab.getAttribute('data-tab-target') || '');
        if ($tabContent) {
            $tabContent.style.display = display;
        }
    }
})(window, document);