(function (window, document) {
    'use strict';

    function Projeto(attributes = {}) {
        var attr = Object(attributes);
        this.projetoid = attr.projetoid | 0;
        this.nome = attr.nome || '';
        this.empresa = attr.empresa || '';
        this.contato = attr.contato || '';
        this.status = attr.status || '';
        this.statusId = attr.statusId == null ? -1 : attr.statusId;
        this.progresso = (attr.progresso | 0) % 101;
    };

    Projeto.prototype.fillPageByClass = function fillPageByClass($context = document) {
        for (var prop in this) {
            var value = this[prop];
            if (isString(value) || isNumber(value)) {
                var $elements = $context.querySelectorAll('.' + prop);
                for (var i = 0; i < $elements.length; i++) {
                    $elements[i].textContent = value;
                }
            }
        }
    };

    Projeto.prototype.getBox = function getBox() {
        var $divBoxProjetos = document.createElement('div');
        var $pTitleProjeto = document.createElement('p');
        var $spanNomeProjeto = document.createElement('span');
        var $spanStatusProjeto = document.createElement('span');
        var $progressBar = getProgressBar(this.progresso, this.statusId);
        $divBoxProjetos.classList.add('boxProjetos');
        $pTitleProjeto.classList.add('titleProjeto');
        $spanNomeProjeto.innerText = (`${this.nome} ${this.contato ? `(${this.contato + (this.empresa ? (', ' + this.empresa) : '')})` : this.empresa ? `(${this.empresa})` : ''}`);
        $spanStatusProjeto.innerText = this.status;
        $pTitleProjeto.appendChild($spanNomeProjeto);
        $pTitleProjeto.appendChild($spanStatusProjeto);
        $divBoxProjetos.appendChild($pTitleProjeto);
        $divBoxProjetos.appendChild($progressBar);
        $divBoxProjetos.onclick = function () {
            window.location.assign('/projetos/' + this.projetoid);
        }.bind(this);
        return $divBoxProjetos;
    };

    Projeto.prototype.pesquisar = function pesquisar(filtros = {}) {
        return new Ajax('/api/projetos/pesquisar', filtros);
    };

    Projeto.prototype.visualizar = function visualizar() {
        return new Ajax('/api/projetos/pesquisar/' + this.projetoid);
    };

    window.NoteTrakModules.Projeto = Projeto;
})(window, document);