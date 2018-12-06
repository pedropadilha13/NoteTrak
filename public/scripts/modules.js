window.NoteTrakModules.Projeto = (function (window, document) {
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

    return Projeto;
})(window, document);

window.NoteTrakModules.Pergunta = (function (window, document) {
    'use strict';

    function Pergunta() {}

    Pergunta.prototype.editar = function editar() {
        return new Ajax('/api/perguntas/pesquisar');
    }

    Pergunta.prototype.pesquisar = function pesquisar() {
        return new Ajax('/api/perguntas/pesquisar');
    }

    Pergunta.prototype.getBox = function getBox(pergunta) {
        var perguntaid = pergunta.perguntaid | 0;
        var $element = document.createElement('div');
        var $box = document.createElement('div');
        var $section1 = document.createElement('div');
        var $section2 = document.createElement('div');
        var $p = document.createElement('p');
        var $a = document.createElement('a');
        var $icon = document.createElement('i');
        $element.classList.add('box');
        $box.classList.add('columns');
        $section1.classList.add('column', 'is-11');
        $section2.classList.add('column', 'is-1');
        $a.classList.add('button', 'is-primary');
        $icon.classList.add('fas', 'fa-pencil-alt');
        $p.innerText = pergunta.descricao || '';
        $a.onclick = function () {
            var msg = $p.innerText;
            var $input = document.createElement('input');
            var $icon = document.createElement('i');
            var $saveButton = document.createElement('a');
            $icon.classList.add('fas', 'fa-save');
            $saveButton.classList.add('button', 'is-info');
            $saveButton.appendChild($icon);
            $saveButton.onclick = function () {
                var newMsg = $input.value;
                $saveButton.classList.add('is-loading');
                this.editar().then(response => {
                    var code = response.code | 0;
                    if (code === 1) {
                        $p.innerText = newMsg;
                        $section1.empty().appendChild($p);
                        $section2.empty().appendChild($a);
                    }
                }).always(function () {
                    $saveButton.classList.remove('is-loading');
                });
            }.bind(this);
            $input.classList.add('input');
            $input.setAttribute('type', 'text');
            $input.value = msg;
            $section1.empty().appendChild($input);
            $section2.empty().appendChild($saveButton);
        }.bind(this);
        $a.appendChild($icon);
        $section1.appendChild($p);
        $section2.appendChild($a);
        $box.appendChild($section1);
        $box.appendChild($section2);
        $element.appendChild($box);
        return $element;
    }

    return Pergunta;
})(window, document);

window.NoteTrakModules.Dimensao = (function (window, document) {
    'use strict';

    function Dimensao() {}

    Dimensao.prototype.editar = function editar() {
        return new Ajax('/api/dimensoes/pesquisar');
    }

    Dimensao.prototype.pesquisar = function pesquisar() {
        return new Ajax('/api/dimensoes/pesquisar');
    }

    Dimensao.prototype.getBox = function getBox(descricao) {
        var dimensaoid = descricao.dimensaoid | 0;
        var $element = document.createElement('div');
        var $box = document.createElement('div');
        var $section1 = document.createElement('div');
        var $section2 = document.createElement('div');
        var $p = document.createElement('p');
        var $a = document.createElement('a');
        var $icon = document.createElement('i');
        $element.classList.add('box');
        $box.classList.add('columns');
        $section1.classList.add('column', 'is-11');
        $section2.classList.add('column', 'is-1');
        $a.classList.add('button', 'is-primary');
        $icon.classList.add('fas', 'fa-pencil-alt');
        $p.innerText = descricao.descricao || '';
        $a.onclick = function () {
            var msg = $p.innerText;
            var $input = document.createElement('input');
            var $icon = document.createElement('i');
            var $saveButton = document.createElement('a');
            $icon.classList.add('fas', 'fa-save');
            $saveButton.classList.add('button', 'is-info');
            $saveButton.appendChild($icon);
            $saveButton.onclick = function () {
                var newMsg = $input.value;
                $saveButton.classList.add('is-loading');
                this.editar().then(response => {
                    var code = response.code | 0;
                    if (code === 1) {
                        $p.innerText = newMsg;
                        $section1.empty().appendChild($p);
                        $section2.empty().appendChild($a);
                    }
                }).always(function () {
                    $saveButton.classList.remove('is-loading');
                });
            }.bind(this);
            $input.classList.add('input');
            $input.setAttribute('type', 'text');
            $input.value = msg;
            $section1.empty().appendChild($input);
            $section2.empty().appendChild($saveButton);
        }.bind(this);
        $a.appendChild($icon);
        $section1.appendChild($p);
        $section2.appendChild($a);
        $box.appendChild($section1);
        $box.appendChild($section2);
        $element.appendChild($box);
        return $element;
    }

    return Dimensao;
})(window, document);