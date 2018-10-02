(function (window, document) {
    'use strict';

    var Projeto = window.NoteTrakModules.Projeto;

    var projeto = new Projeto();

    // TODO: criar funcoes genericas de pre-envio de formularios e conclusao de requisicoes
    var $formPesquisarProjetos = document.querySelector('form[data-id="pesquisarProjetos"]');
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
})(window, document);