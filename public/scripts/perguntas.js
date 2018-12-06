(function (window, document) {
    'use strict';

    var Pergunta = new window.NoteTrakModules.Pergunta();
    var $listaPerguntas = document.querySelector('[data-id="listaPerguntas"]');
    
    setSpinner($listaPerguntas);
    Pergunta.pesquisar().then(response => {
        var code = response.code | 0;
        if (code === 1) {
            var perguntas = response.body.perguntas || [];
            var $boxes = document.createDocumentFragment();
            perguntas.forEach(pergunta => {
                $boxes.appendChild(Pergunta.getBox(pergunta));
            });
            $listaPerguntas.empty().appendChild($boxes);
        }
    });

})(window, document);