'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Url = require('../Url');

var _Url2 = _interopRequireDefault(_Url);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = new _logger2.default('Ajax');

var default_options = {
    root: '',
    type: 'json',
    dataType: 'json'
};

var Ajax = function () {
    function Ajax(options) {
        _classCallCheck(this, Ajax);

        this._options = Object.assign({}, default_options, options);
    }

    _createClass(Ajax, [{
        key: 'ajax',
        value: function ajax(url, options) {
            var default_options = {
                method: 'GET',
                root: this._options.root,
                redirect: 'follow',
                headers: {}
            };
            var opt = Object.assign({}, default_options, options);

            var fetch_url = _Url2.default.join(opt.root, opt.url);
            var init = {
                method: opt.Method,
                headers: new Headers(opt.headers)
            };
            if (opt.data) {
                init.body = opt.data;
            }
            return fetch(fetch_url, init).then(function (response) {
                logger.verbose(response);
                var data = void 0;
                if (opt.dataType === 'json') {
                    data = response.json();
                } else if (opt.dataType === 'blob') {
                    data = response.blob();
                } else {
                    data = response.text();
                }
                return {
                    ok: response.ok,
                    status: response.status,
                    statusText: response.statusText,
                    data: data
                };
            }).catch(function (err) {
                logge.error(err);
                return {
                    ok: false,
                    status: 500,
                    data: err
                };
            });
        }
    }, {
        key: 'get',
        value: function get(url, options) {
            var default_options = {
                method: 'GET'
            };
            var opt = Object.assign({}, default_options, options);
            return this.ajax(url, opt);
        }
    }, {
        key: 'post',
        value: function post(url, data, options) {
            var default_options = {
                method: 'POST',
                data: data
            };
            var opt = Object.assign({}, default_options, options);
            return this.ajax(url, opt);
        }
    }, {
        key: 'put',
        value: function put(url, data, options) {
            var default_options = {
                method: 'PUT',
                data: data
            };
            var opt = Object.assign({}, default_options, options);
            return this.ajax(url, opt);
        }
    }, {
        key: 'delete',
        value: function _delete(url, options) {
            var default_options = {
                method: 'DELETE'
            };
            var opt = Object.assign({}, default_options, options);
            return this.ajax(url, opt);
        }
    }, {
        key: 'head',
        value: function head(url, options) {
            var default_options = {
                method: 'HEAD'
            };
            var opt = Object.assign({}, default_options, options);
            return this.ajax(url, opt);
        }
    }]);

    return Ajax;
}();

exports.default = Ajax;