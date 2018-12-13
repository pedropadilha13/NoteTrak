(function (window, document) {
    'use strict';

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

    function getIdFromUrl() {
        return window.location.pathname.replace(/.*?(\d+$)/, function (s, c) { return c; }) | 0;
    }

    function getProgressBar(progress = 33, status = 1) {
        var $progress = document.createElement('progress');
        var color = status === 0 ? 'is-danger' : progress === 100 ? 'is-success' : 'is-warning';
        $progress.max = 100;
        $progress.value = progress;
        $progress.innerText = progress + '%';
        $progress.classList.add('progress');
        $progress.classList.add(color);
        return $progress;
    }

    function isFunction(param) {
        return Object.prototype.toString.call(param) === '[object Function]';
    }

    function isNumber(param) {
        return Object.prototype.toString.call(param) === '[object Number]';
    }

    function isString(param) {
        return Object.prototype.toString.call(param) === '[object String]';
    }

    function setSpinner($element) {
        $element.empty().innerHTML = '<div class="has-text-centered"><i class="fas fa-circle-notch fa-spin fa-lg"></i></div>';
    }

    Element.prototype.empty = function empty() {
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
        return this;
    }

    Element.prototype.collapse = function collapse(display = 'toggle') {
        var $element = this;

        function collapseShow() {
            $element.style.maxHeight = $element.scrollHeight + 'px';
        }

        function collapseHide() {
            $element.style.maxHeight = null;
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

    var $dataCollapsedElements = document.querySelectorAll('[data-collapsed="false"]') || [];
    $dataCollapsedElements.forEach(function ($element) {
        $element.collapse('show');
    });

    var $hasDropdownElements = document.querySelectorAll('.has-dropdown') || [];
    $hasDropdownElements.forEach(function ($element) {
        Dropdown($element);
    });

    window.Ajax = Ajax;
    window.getProgressBar = getProgressBar;
    window.getIdFromUrl = getIdFromUrl;
    window.isFunction = isFunction;
    window.isNumber = isNumber;
    window.isString = isString;
    window.setSpinner = setSpinner;
    window.NoteTrakModules = {};
})(window, document);