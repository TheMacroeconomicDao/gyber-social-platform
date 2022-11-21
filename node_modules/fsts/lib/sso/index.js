'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Google = require('./Google');

var _Google2 = _interopRequireDefault(_Google);

var _Facebook = require('./Facebook');

var _Facebook2 = _interopRequireDefault(_Facebook);

var _LinkedIn = require('./LinkedIn');

var _LinkedIn2 = _interopRequireDefault(_LinkedIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SSO = {
    Google: _Google2.default,
    Facebook: _Facebook2.default,
    LinkedIn: _LinkedIn2.default
};

exports.default = SSO;