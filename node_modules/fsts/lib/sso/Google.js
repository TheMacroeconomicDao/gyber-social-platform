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

var logger = new _logger2.default('SSO.Google');

var default_options = {
    google_client_id: null,
    script: 'https://apis.google.com/js/platform.js',
    scope: 'profile email openid'

    /**
    * Reference: https://developers.google.com/identity/sign-in/web/reference
    */
};
var Google = function () {
    function Google(options) {
        _classCallCheck(this, Google);

        if (typeof options === 'string') {
            options = { google_client_id: options };
        }
        this._options = Object.assign({}, default_options, options);
        if (!this._options.google_client_id) {
            logger.warn('missing google_client_id');
        }

        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
        this.check = this.check.bind(this);
        this.ready = this.ready.bind(this);

        this._initGapi = this._initGapi.bind(this);
        this._user = this._user.bind(this);

        this._ga = null;

        this._createScript();
    }

    _createClass(Google, [{
        key: 'signIn',
        value: function signIn() {
            var _this = this;

            if (!this._ga) {
                return Promise.reject('no ga instance');
            }

            return this._ga.signIn().then(function (googleUser) {
                return _this._user(googleUser);
            });
        }
    }, {
        key: 'signOut',
        value: function signOut() {
            if (!this._ga) {
                return Promise.reject('no ga instance');
            }

            return this._ga.signOut();
        }
    }, {
        key: 'check',
        value: function check() {
            var _this2 = this;

            if (!this._ga) {
                return Promise.reject('no ga instance');
            }

            return new Promise(function (resolve, reject) {
                var googleUser = _this2._ga.currentUser.get();
                if (!googleUser) {
                    reject('no google user');
                    return;
                }
                if (googleUser.isSignedIn()) {
                    resolve(_this2._user(googleUser));
                } else {
                    reject('not signed in');
                }
            });
        }
    }, {
        key: 'ready',
        value: function ready() {
            var google_client_id = this._options.google_client_id;

            if (!google_client_id) {
                return Promise.reject('missing google_client_id in options');
            }

            var that = this;
            return new Promise(function (resolve, reject) {
                var checkCount = 0;
                var checkGA = function checkGA() {
                    checkCount++;
                    if (that._ga) {
                        resolve();
                        return;
                    }

                    if (window.gapi) {
                        that._initGapi();
                        return;
                    }

                    if (checkCount < 5) {
                        window.setTimeout(checkGA, 500);
                    } else {
                        reject('timeout');
                    }
                };
                checkGA();
            });
        }
    }, {
        key: '_user',
        value: function _user(googleUser) {
            var _googleUser$getAuthRe = googleUser.getAuthResponse(),
                id_token = _googleUser$getAuthRe.id_token;

            var profile = googleUser.getBasicProfile();
            return {
                id_token: id_token,
                email: profile.getEmail(),
                name: profile.getName()
            };
        }
    }, {
        key: '_createScript',
        value: function _createScript() {
            if (window.gapi) {
                this._initGapi();
                return;
            }

            var script = this._options.script;

            if (script === 'none') {
                return;
            }

            var src = this._options.script;
            _Device2.default.createScript(src, true, this._initGapi);
        }
    }, {
        key: '_initGapi',
        value: function _initGapi() {
            logger.debug('init gapi');
            var _options = this._options,
                google_client_id = _options.google_client_id,
                scope = _options.scope;

            if (!google_client_id) {
                logger.warn('missing google_client_id in options');
                return;
            }

            var that = this;
            var g = window.gapi;
            g.load('auth2', function () {
                g.auth2.init({
                    client_id: google_client_id,
                    scope: scope
                }).then(function (ga) {
                    that._ga = ga;
                });
            });
        }
    }]);

    return Google;
}();

exports.default = Google;