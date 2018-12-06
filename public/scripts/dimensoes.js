(function (window, document) {
    'use strict';

    var Dimensao = new window.NoteTrakModules.Dimensao();
    var $listaDimensoes = document.querySelector('[data-id="listaDimensoes"]');
    
    setSpinner($listaDimensoes);
    Dimensao.pesquisar().then(response => {
        var code = response.code | 0;
        if (code === 1) {
            var dimensoes = response.dimensoes || [];
            var $boxes = document.createDocumentFragment();
            dimensoes.forEach(dimensao => {
                $boxes.appendChild(Dimensao.getBox(dimensao));
            });
            $listaDimensoes.empty().appendChild($boxes);
        }
    });

})(window, document);