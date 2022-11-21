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

var logger = new _logger2.default('MemoryStorage');

var defaultOptions = {
    expiration: '3600' // seconds


    /**
    * MemoryStorage as an alternative to LocalStorage. Items will not live beyond session.
    * Still do JSON stringify so consistant with LocalStorage, also ensures immutable in cache.
    */
};
var MemoryStorage = function () {
    function MemoryStorage(options) {
        _classCallCheck(this, MemoryStorage);

        logger.debug('creating MemoryStorage instance', options);

        this._options = Object.assign({}, defaultOptions, options);

        this._store = {};
    }

    _createClass(MemoryStorage, [{
        key: 'options',
        value: function options(_options) {
            if (_options) {
                this._options = Object.assign({}, this._options, _options);
            }

            return this._options;
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

            this._store[key] = item;
        }
    }, {
        key: 'get',
        value: function get(key) {
            if (!key) {
                logger.warn('no key to get');
                return;
            }

            var item = this._store[key];
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

            delete this._store[key];
        }
    }, {
        key: 'clear',
        value: function clear() {
            this._store = {};
        }
    }, {
        key: 'purgeExpired',
        value: function purgeExpired() {
            var _this = this;

            Object.keys(this._store).forEach(function (key) {
                var item = _this._store[key];
                if (_this._isExpired(item)) {
                    delete _this._store[key];
                }
            });
        }
    }, {
        key: '_isExpired',
        value: function _isExpired(item) {
            var cur = _JS2.default.ts();
            return item.ts + this._options.expiration * 1000 < cur;
        }
    }]);

    return MemoryStorage;
}();

exports.default = MemoryStorage;