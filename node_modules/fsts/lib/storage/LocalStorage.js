'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ConsoleLogger = require('../logger/ConsoleLogger');

var _ConsoleLogger2 = _interopRequireDefault(_ConsoleLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = new _ConsoleLogger2.default('LocalStorage');

var key_holder = '_fsts_ls_key_holder';

var LocalStorageClass = function () {
    function LocalStorageClass() {
        var key_holder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : key_holder;

        _classCallCheck(this, LocalStorageClass);

        logger.debug('instantiated LocalStorageClass with ' + key_holder);
        this.key_holder = key_holder;
    }

    _createClass(LocalStorageClass, [{
        key: 'set',
        value: function set(key, value) {}
    }, {
        key: 'get',
        value: function get(key) {}
    }, {
        key: 'remove',
        value: function remove(key) {}
    }, {
        key: 'clear',
        value: function clear() {}
    }]);

    return LocalStorageClass;
}();