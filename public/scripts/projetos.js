(function (window, document) {
    'use strict';

    var Projeto = window.NoteTrakModules.Projeto;
    var Pergunta = window.NoteTrakModules.Pergunta;
    var Dimensao = window.NoteTrakModules.Dimensao;

    var projeto = new Projeto({ projetoid: getIdFromUrl() });
    var perguntas = new Pergunta();
    var dimensao = new Dimensao();

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
        var $listaDimensoes = document.querySelector('[data-id="listaDimensoes"]');
        var $chartInfo = document.querySelector('[data-id="chartInfo"]');
        setSpinner($listaDimensoes);
        setSpinner($chartInfo);
        projeto.visualizar().then(function (result = []) {
            var proj = result[0] || {};
            Ajax('/api/dimensoescategorias/pesquisar').then(function (response) {
                var dimensoesCategorias = response.dimensoesCategorias || [];
                Ajax('/api/dimensoessubcategorias/pesquisar').then(function (response) {
                    var dimensoesSubcategorias = response.dimensoes || [];
                    fillTabGeral(proj);
                    dimensao.pesquisar().then(function (response) {
                        var mixedObject = dimensao.mixObject(dimensoesCategorias, dimensoesSubcategorias, response.dimensoes || []);
                        Ajax('/api/projetosdimensoes/pesquisar').then(function (response) {
                            var projetosDimensoes = response.body.projetosDimensoes || [];
                            var $boxProjetosDimensoes = document.createDocumentFragment();
                            for (var categoriaid in mixedObject) {
                                var categoria = mixedObject[categoriaid];
                                var $hr = document.createElement('hr');
                                var $p = document.createElement('p');
                                var $span1 = document.createElement('span');
                                var $span2 = document.createElement('span');
                                $hr.style.margin = '0px';
                                $span1.innerText = categoria.descricao || '';
                                $span2.innerText = '0,00';
                                $p.setAttribute('data-categoria', categoriaid);
                                $p.appendChild($span1);
                                $p.appendChild($span2);
                                $boxProjetosDimensoes.appendChild($hr);
                                $boxProjetosDimensoes.appendChild($p);
                            }
                            $chartInfo.empty().appendChild($boxProjetosDimensoes);
                            fillTabDimensoes($listaDimensoes, mixedObject, projetosDimensoes);
                            initializeChart($graficoProjetos, $chartInfo);
                        });
                    });
                    perguntas.pesquisar().then(function (result) {
                        fillTabPerguntas(result.body.perguntas);
                    });
                });
            });
        });
    }

    function fillTabDimensoes($listaDimensoes, response, projetosDimensoes) {
        var $finalElement = document.createDocumentFragment();
        for (var categoriaid in response) {
            var categoria = response[categoriaid];
            var $elementCategoria = document.createElement('div');
            var $titleCategoria = document.createElement('h3');
            $titleCategoria.classList.add('categoriaTitle');
            $titleCategoria.innerText = categoria.descricao || 'Categoria ' + categoriaid;
            $elementCategoria.appendChild($titleCategoria);
            for (var subcategoriaid in categoria.subCategorias) {
                var subcategoria = categoria.subCategorias[subcategoriaid];
                var dimensoes = subcategoria.dimensoes || [];
                var $element = document.createElement('div');
                $element.classList.add('divSubcategoria');
                var $titleSubcategoria = document.createElement('h4');
                $titleSubcategoria.classList.add('subcategoriaTitle');
                $titleSubcategoria.innerText = subcategoria.descricao || 'Subcategoria ' + subcategoriaid;
                $element.appendChild($titleSubcategoria);
                dimensoes.forEach(function (dimensao, index) {
                    var $div = document.createElement('div');
                    if (index % 2 === 0) {
                        $div.style.backgroundColor = '#f0f0f0';
                    }
                    var $span1 = document.createElement('span');
                    var $span2 = document.createElement('input');
                    var $span3 = document.createElement('span');
                    $div.style.display = 'flex';
                    $div.style.justifyContent = 'space-between';
                    $span1.style.width = '35%';
                    $span1.innerText = dimensao.descricao || '';
                    $span2.style.width = '20%';
                    $span2.style.textAlign = 'right';
                    $span2.value = 0;
                    $span2.min = 0;
                    $span2.max = 4;
                    $span2.setAttribute('type', 'number');
                    $span2.setAttribute('data-inputcategoria', categoriaid);
                    $span2.classList.add('input', 'is-small');
                    $span2.onchange = function () {
                        setSpinner($span3);
                        projeto.visualizar().then(function () {
                            var final = '';
                            var total = 0;
                            var categoriaid = $span2.getAttribute('data-inputcategoria') | 0;
                            var $inputs = document.querySelectorAll('[data-inputcategoria="' + categoriaid + '"]');
                            var $chartInfo = document.querySelector('[data-id="chartInfo"]');
                            var value = Math.max(0, $span2.value | 0) % 5;
                            for (var projetoDimensao of projetosDimensoes) {
                                if (dimensao.dimensaoid == projetoDimensao.dimensaoid && value == projetoDimensao.nivel) {
                                    final = projetoDimensao.descricao || '';
                                    break;
                                }
                            }
                            $span3.empty().innerText = final;
                            $inputs.forEach(function ($input) {
                                total += Math.max(0, $input.value | 0) % 5;
                            });
                            $chartInfo.querySelector('p[data-categoria="' + categoriaid + '"] > *:last-child').innerText = String((total / $inputs.length).toFixed(2)).replace('.', ',');
                            initializeChart($graficoProjetos, $chartInfo);
                        });
                    };
                    $span3.style.width = '45%';
                    $span3.style.paddingLeft = '10px';
                    $div.appendChild($span1);
                    $div.appendChild($span2);
                    $div.appendChild($span3);
                    $element.appendChild($div);
                });
                $elementCategoria.appendChild($element);
            }
            $finalElement.appendChild($elementCategoria);
        }
        $listaDimensoes.empty().appendChild($finalElement);
    }

    function fillTabGeral(projeto) {
        var projeto = new Projeto(projeto || {});
        projeto.fillPageByClass();
    }

    function fillTabPerguntas(perguntas) {
        if (Array.isArray(perguntas)) {
            var $documentFragment = document.createDocumentFragment();
            perguntas.forEach(function (pergunta, index) {
                var $box = document.createElement('div');
                var $columns = document.createElement('div');
                var $col1 = document.createElement('div');
                var $col2 = document.createElement('div');
                var $col3 = document.createElement('div');
                var $p = document.createElement('p');
                var $labelSim = document.createElement('label');
                var $labelNao = document.createElement('label');
                var $inputSim = document.createElement('input');
                var $inputNao = document.createElement('input');
                var $textSim = document.createElement('span');
                var $textNao = document.createElement('span');
                $inputSim.setAttribute('type', 'radio');
                $inputSim.setAttribute('name', 'pergunta' + index);
                $inputNao.setAttribute('type', 'radio');
                $inputNao.setAttribute('name', 'pergunta' + index);
                $box.classList.add('box');
                $columns.classList.add('columns');
                $col1.classList.add('column', 'is-10');
                $col2.classList.add('column', 'is-1');
                $col3.classList.add('column', 'is-1');
                $p.textContent = pergunta.descricao || '';
                $textSim.textContent = 'Sim';
                $textNao.textContent = 'Não';
                $labelSim.appendChild($inputSim);
                $labelSim.appendChild($textSim);
                $labelNao.appendChild($inputNao);
                $labelNao.appendChild($textNao);
                $col1.appendChild($p);
                $col2.appendChild($labelSim);
                $col3.appendChild($labelNao);
                $columns.appendChild($col1);
                $columns.appendChild($col2);
                $columns.appendChild($col3);
                $box.appendChild($columns);
                $documentFragment.appendChild($box);
            });
            var $div = document.querySelector('[data-id="perguntas"]');
            if ($div) {
                $div.appendChild($documentFragment);
            }
        }
    }

    function initializeChart(context, $element) {
        var labels = [];
        var chartData = [];
        $element.querySelectorAll('p > *:first-child').forEach(function ($label) {
            labels.push($label.innerText);
        });
        $element.querySelectorAll('p > *:last-child').forEach(function ($value) {
            chartData.push(Number($value.innerText.replace(',', '.')));
        });
        return new Chart(context.empty(), {
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