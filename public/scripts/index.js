(function (window, document) {
    'use strict';

    function Dropdown($element) {
        var wasClicked = false;

        $element.addEventListener('mouseover', handleDropdownMouseover);
        $element.addEventListener('mouseout', handleDropdownMouseout);
        $element.addEventListener('click', handleDropdownClick);

        function handleDropdownMouseout() {
            if ($element.classList.contains('is-active')) {
                $element.classList.remove('is-active');
            }
        }

        function handleDropdownMouseover() {
            if (!$element.classList.contains('is-active')) {
                $element.classList.add('is-active');
            }
        }

        function handleDropdownClick() {
            document.addEventListener('click', handleClickAnywhere, true);
            if (!wasClicked) {
                wasClicked = true;
                $element.removeEventListener('mouseout', handleDropdownMouseout);
                handleDropdownMouseover();
            }
        }

        function handleClickAnywhere(ev) {
            document.removeEventListener('click', handleClickAnywhere);
            if (wasClicked) {
                wasClicked = false;
                $element.addEventListener('mouseout', handleDropdownMouseout);
                handleDropdownMouseout();
                ev.stopPropagation();
            }
        }

        return $element;
    }

    function isFunction(param) {
        return Object.prototype.toString.call(param) === '[object Function]';
    }

    function Ajax(ajaxUrl, body = {}, method = 'GET', headers = { 'Content-Type': 'application/json' }) {
        if (!(this instanceof Ajax)) {
            return new Ajax(ajaxUrl, body, method, headers);
        }
        this.ajaxUrl = ajaxUrl;
        this.body = body;
        this.method = method;
        this.headers = headers;
        this.xhr = new XMLHttpRequest();
        ['then', 'error', 'always'].forEach(function (prop) {
            this[prop] = (function (propName) {
                return function (callbackParam) {
                    this['__' + propName] = function (params) {
                        if (isFunction(callbackParam)) {
                            callbackParam.apply(undefined, params);
                        }
                    }
                    return this;
                }.bind(this);
            }.bind(this))(prop);
            this['__' + prop] = function () {};
        }.bind(this));
        this.xhr.onreadystatechange = function () {
            try {
                if (this.xhr.readyState === 4) {
                    if (this.xhr.status >= 200 && this.xhr.status < 300) {
                        var response = JSON.parse(this.xhr.responseText);
                        this.__then([ response ]);
                        this.__always([ this.xhr ]);
                    } else {
                        throw new Error('Erro na requisicao!');
                    }
                }
            } catch (e) {
                this.__error([ e, this.xhr ]);
                this.__always([ this.xhr ]);
            }
        }.bind(this);
        this.xhr.open(this.method, this.ajaxUrl, true);
        for (var prop in headers) {
            this.xhr.setRequestHeader(prop, headers[prop]);
        }
        this.xhr.send(JSON.stringify(this.body));
    };

    Element.prototype.collapse = function collapse(display = 'toggle') {
        var $element = this;

        function collapseShow() {
            $element.style.maxHeight = $element.scrollHeight + 'px';
            $element.style.overflow = 'unset';
        }

        function collapseHide() {
            $element.style.maxHeight = null;
            $element.style.overflow = 'hidden';
        }

        switch (display) {
            case 'toggle':
                $element.style.maxHeight ? collapseHide() : collapseShow();
                break;
            case 'hide':
                collapseHide();
                break;
            case 'show':
                collapseShow();
                break;
        }

        return $element;
    };

    document.querySelectorAll('[data-collapsed="false"]').forEach(function ($element) {
        $element.collapse('show');
    });

    document.querySelectorAll('.has-dropdown').forEach(function ($element) {
        Dropdown($element);
    });

    window.Ajax = Ajax;
    window.isFunction = isFunction;
    window.NoteTrakModules = {};
})(window, document);