'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Url = function () {
    function Url() {
        _classCallCheck(this, Url);
    }

    _createClass(Url, null, [{
        key: 'params',
        value: function params(url) {
            var parts = url.split('?');
            if (parts.length < 2) {
                return {};
            }

            parts = parts[1].split('#')[0].split('&');
            var obj = {};
            parts.forEach(function (part) {
                var n_v = part.split('=');
                var name = n_v[0];
                var value = n_v.length > 1 ? n_v.slice(1).join('') : '';
                obj[name] = decodeURIComponent(value);
            });

            return obj;
        }
    }, {
        key: 'join',
        value: function join() {
            if (arguments.length === 0) {
                return '/';
            }

            var url = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
                if (!url.endsWith('/')) {
                    url = url + '/';
                }
                url += arguments[i];
            }

            return url;
        }
    }]);

    return Url;
}();

exports.default = Url;