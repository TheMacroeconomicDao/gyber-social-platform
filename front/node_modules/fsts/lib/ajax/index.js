'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ajax = undefined;

var _Ajax = require('./Ajax');

var _Ajax2 = _interopRequireDefault(_Ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ajax = new _Ajax2.default();

exports.default = ajax;
exports.Ajax = _Ajax2.default;