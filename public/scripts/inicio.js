(function (window, document) {
    'use strict';

    var Projeto = window.NoteTrakModules.Projeto;

    var mainBoxes = [
        {
            filtros: {},
            $element: document.querySelector('[data-id="projetosPassados"]')
        },
        {
            filtros: {},
            $element: document.querySelector('[data-id="projetosPresentes"]')
        },
        {
            filtros: {},
            $element: document.querySelector('[data-id="projetosFuturos"]')
        }
    ];
    var projeto = new Projeto();

    mainBoxes.forEach(function (box) {
        setSpinner(box.$element);
        projeto.pesquisar(box.filtros).then(function (response) {
            var projetos = response.body.projetos || [];
            var $fragment = document.createDocumentFragment();
            projetos.forEach(function (projeto) {
                var p = new Projeto(projeto);
                $fragment.appendChild(p.getBox());
            });
            box.$element.empty().appendChild($fragment);
        });
    });

})(window, document);