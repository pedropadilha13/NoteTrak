(function (window, document) {
    'use strict';

    function Projeto(attributes = {}) {
        var attr = Object(attributes);
        this.id = attr.id || 0;
        this.nome = attr.nome || '';
        this.empresa = attr.empresa || '';
        this.contato = attr.contato || '';
        this.status = attr.status || '';
    };

    Projeto.prototype.pesquisar = function pesquisar(filtros = {}) {
        return new Ajax('/api/projetos/pesquisar', filtros);
    };

    window.NoteTrakModules.Projeto = Projeto;
})(window, document);