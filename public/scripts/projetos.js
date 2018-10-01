(function (window, document) {
    'use strict';

    var Projeto = window.NoteTrakModules.Projeto;

    var projeto = new Projeto();

    // TODO: criar funcoes genericas de pre-envio de formularios e conclusao de requisicoes
    document.querySelector('form[data-id="pesquisarProjetos"]').addEventListener('submit', function (e) {
        e.preventDefault();
        var $resultadoPesquisaProjetos = document.querySelector('[data-id="resultadoPesquisaProjetos"]');
        var $inputPesquisarControl = e.currentTarget.querySelector('input[name="pesquisar"]').parentNode;
        $inputPesquisarControl.classList.add('is-loading');
        $resultadoPesquisaProjetos.collapse('hide');
        projeto.pesquisar().always(function () {
            $resultadoPesquisaProjetos.innerHTML = (
                `<a class="box">
                    <p class="titleProjeto">
                        <span>Track & Trace (Dirk Slama, Bosch SI)</span>
                        <span>Fase de Entrevistas</span>
                    </p>
                    <progress class="progress is-warning" value="30" max="100">30%</progress>
                </a>`
            );
            setTimeout(function () {
                $resultadoPesquisaProjetos.collapse('show');
                $inputPesquisarControl.classList.remove('is-loading');
            }, 1000);
        });
    });
})(window, document);