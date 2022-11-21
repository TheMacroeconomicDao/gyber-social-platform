'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Device = require('../Device');

var _Device2 = _interopRequireDefault(_Device);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = new _logger2.default('SSO.LinkedIn');

var default_options = {
    api_key: null,
    script: 'http://platform.linkedin.com/in.js?async=true'

    /**
    * Reference: https://developer.linkedin.com/docs/getting-started-js-sdk
    */
};
var LinkedIn = function () {
    function LinkedIn(options) {
        _classCallCheck(this, LinkedIn);

        if (typeof options === 'string') {
            options = { api_key: options };
        }
        this._options = Object.assign({}, default_options, options);
        if (!this._options.api_key) {
            logger.warn('missing api_key');
        }

        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
        this.check = this.check.bind(this);
        this.ready = this.ready.bind(this);

        this._user = this._user.bind(this);
        this._initIn = this._initIn.bind(this);
        this._fullyLoaded = this._fullyLoaded.bind(this);

        this._IN = null;
        this._INLoaded = false;

        this._createScript();
    }

    _createClass(LinkedIn, [{
        key: 'signIn',
        value: function signIn() {
            var IN = this._IN;
            if (!IN) {
                return Promise.reject('no IN instance');
            }

            var that = this;
            return new Promise(function (resolve, reject) {
                IN.User.authorize(function () {
                    that._user().then(function (user) {
                        return resolve(user);
                    }).catch(function (err) {
                        return reject(err);
                    });
                });
            });
        }
    }, {
        key: 'signOut',
        value: function signOut() {
            var IN = this._IN;
            if (!IN) {
                return Promise.reject('no IN instance');
            }

            var that = this;
            return new Promise(function (resolve, reject) {
                IN.User.logout(function () {
                    logger.debug('signed out');
                    resolve();
                });
            });
        }
    }, {
        key: 'check',
        value: function check() {
            var IN = this._IN;
            if (!IN) {
                return Promise.reject('no IN instance');
            }

            if (!IN.User.isAuthorized()) {
                return Promise.reject('not authorized');
            }

            return this._user();
        }
    }, {
        key: 'ready',
        value: function ready() {
            var api_key = this._options.api_key;

            if (!api_key) {
                return Promise.reject('missing api_key');
            }

            var that = this;
            return new Promise(function (resolve, reject) {
                var checkCount = 0;
                var checkIN = function checkIN() {
                    checkCount++;
                    if (that._IN && that._INLoaded) {
                        resolve();
                        return;
                    }

                    if (window.IN) {
                        that._initIn();
                        return;
                    }

                    if (checkCount < 5) {
                        window.setTimeout(checkIN, 500);
                    } else {
                        reject('timeout');
                    }
                };
                checkIN();
            });
        }
    }, {
        key: '_user',
        value: function _user() {
            var IN = this._IN;
            return new Promise(function (resolve, reject) {
                IN.API.Raw('/people/~').result(function (profile) {
                    var firstName = profile.firstName,
                        lastName = profile.lastName,
                        id = profile.id,
                        headline = profile.headline;

                    resolve({
                        id: id,
                        firstName: firstName,
                        lastName: lastName,
                        headline: headline
                    });
                }).error(function (err) {
                    return reject(err);
                });
            });
        }
    }, {
        key: '_createScript',
        value: function _createScript() {
            if (window.IN) {
                this._initIn();
            }

            var script = this._options.script;

            if (script === 'none') {
                return;
            }

            window._in_onload = this._fullyLoaded;
            _Device2.default.createScript(this._options.script, true, this._initIn);
        }
    }, {
        key: '_initIn',
        value: function _initIn() {
            logger.debug('init IN');
            var api_key = this._options.api_key;

            if (!api_key) {
                logger.warn('missing api_key');
                return;
            }

            var IN = window.IN;
            IN.init({
                api_key: api_key,
                authorize: true,
                onLoad: "_in_onload"
            });
            this._IN = IN;
        }
    }, {
        key: '_fullyLoaded',
        value: function _fullyLoaded() {
            logger.debug('fully loaded');
            this._INLoaded = true;
        }
    }]);

    return LinkedIn;
}();

exports.default = LinkedIn;