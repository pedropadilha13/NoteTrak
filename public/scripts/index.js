(function (window, document) {
    'use strict';

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

    Element.prototype.collapse = function collapse() {
        if (this.style.maxHeight) {
            this.style.maxHeight = null;
        } else {
            this.style.maxHeight = this.scrollHeight + 'px';
        }
    };

    window.Ajax = Ajax;
    window.isFunction = isFunction;
})(window, document);