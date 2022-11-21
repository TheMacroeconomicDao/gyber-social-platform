'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MemoryStorage = exports.LocalStorage = undefined;

var _Device = require('../Device');

var _Device2 = _interopRequireDefault(_Device);

var _LocalStorage = require('./LocalStorage');

var _LocalStorage2 = _interopRequireDefault(_LocalStorage);

var _MemoryStorage = require('./MemoryStorage');

var _MemoryStorage2 = _interopRequireDefault(_MemoryStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _instance = _Device2.default.hasWindow() ? new _LocalStorage2.default() : new _MemoryStorage2.default();

exports.default = _instance;
exports.LocalStorage = _LocalStorage2.default;
exports.MemoryStorage = _MemoryStorage2.default;