'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _JS = require('../JS');

var _JS2 = _interopRequireDefault(_JS);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = new _logger2.default('LocalStorage');

var defaultOptions = {
    prefix: '_fsts_',
    expiration: '3600' // seconds
};

var LocalStorage = function () {
    function LocalStorage(options) {
        _classCallCheck(this, LocalStorage);

        logger.debug('creating LocalStorage instance', options);

        this._options = Object.assign({}, defaultOptions, options);
    }

    _createClass(LocalStorage, [{
        key: 'options',
        value: function options(_options) {
            if (_options) {
                this._options = Object.assign({}, this._options, _options);
            }

            return this._options;
        }
    }, {
        key: 'key',
        value: function key(_key) {
            return this._options.prefix + _key;
        }
    }, {
        key: 'set',
        value: function set(key, value) {
            if (!key) {
                logger.warn('no key to set');
                return;
            }
            if (_JS2.default.isUndefined(value) || value === null) {
                logger.worn('nothing to set for ' + key);
                return;
            }

            var item = {
                data: JSON.stringify(value),
                ts: _JS2.default.ts()
            };

            this._setItem(key, item);
        }
    }, {
        key: 'get',
        value: function get(key) {
            if (!key) {
                logger.warn('no key to get');
                return;
            }

            var item = this._getItem(key);
            if (!item) {
                logger.verbose('cache miss: ' + key);
                return null;
            }

            if (this._isExpired(item)) {
                logger.verbose('cache miss: ' + key);
                return null;
            }

            logger.verbose('cache hit: ' + key);
            return JSON.parse(item.data);
        }
    }, {
        key: 'remove',
        value: function remove(key) {
            if (!key) {
                logger.warn('no key to remove');
                return;
            }

            this._removeItem(key);
        }
    }, {
        key: 'clear',
        value: function clear() {
            var store = window.localStorage;
            while (store.length > 0) {
                var key = store.key(0);
                store.removeItem(key);
            }
        }
    }, {
        key: 'purgeExpired',
        value: function purgeExpired() {
            var store = window.localStorage;
            while (store.length > 0) {
                var key = store.key(0);
                var item = JSON.parse(store.getItem(key));
                if (this._isExpired(item)) {
                    store.removeItem(key);
                }
            }
        }
    }, {
        key: '_setItem',
        value: function _setItem(key, item) {
            window.localStorage.setItem(this.key(key), JSON.stringify(item));
        }
    }, {
        key: '_getItem',
        value: function _getItem(key) {
            var item = window.localStorage.getItem(this.key(key));
            if (!item) {
                return null;
            }

            var it = JSON.parse(item);
            return {
                data: it.data,
                ts: it.ts * 1
            };
        }
    }, {
        key: '_removeItem',
        value: function _removeItem(key) {
            window.localStorge.removeItem(this.key(key));
        }
    }, {
        key: '_isExpired',
        value: function _isExpired(item) {
            var cur = _JS2.default.ts();
            return item.ts + this._options.expiration * 1000 < cur;
        }
    }]);

    return LocalStorage;
}();

exports.default = LocalStorage;