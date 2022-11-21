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

var logger = new _logger2.default('SSO.Facebook');

var default_options = {
    facebook_app_id: null,
    script: 'https://connect.facebook.net/en_US/sdk.js',
    scope: 'public_profile,email'

    /**
    * Reference: https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
    */
};
var Facebook = function () {
    function Facebook(options) {
        _classCallCheck(this, Facebook);

        if (typeof options === 'string') {
            options = { facebook_app_id: options };
        }
        this._options = Object.assign({}, default_options, options);
        if (!this._options.facebook_app_id) {
            logger.warn('missing facebook_app_id');
        }

        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
        this.check = this.check.bind(this);
        this.ready = this.ready.bind(this);

        this._fbAsyncInit = this._fbAsyncInit.bind(this);
        this._user = this._user.bind(this);

        this._fb = null;

        this._createScript();
    }

    _createClass(Facebook, [{
        key: 'signIn',
        value: function signIn() {
            var _this = this;

            var fb = this._fb;
            if (!fb) {
                return Promise.reject('no fb instance');
            }

            var scope = this._options.scope;

            return this.check().then(function (authResponse) {
                return _this._user(authResponse);
            }).catch(function (err) {
                return new Promise(function (resolve, reject) {
                    fb.login(function (response) {
                        resolve(_this._user(response.authResponse));
                    }, { scope: scope });
                });
            });
        }
    }, {
        key: 'signOut',
        value: function signOut() {
            var fb = this._fb;
            if (!fb) {
                return Promise.reject('no fb instance');
            }

            return new Promise(function (resolve, reject) {
                fb.logout(function (response) {
                    logger.debug('signed out', response);
                    resolve();
                });
            });
        }
    }, {
        key: 'check',
        value: function check() {
            var fb = this._fb;
            if (!fb) {
                return Promise.reject('no fb instance');
            }

            return new Promise(function (resolve, reject) {
                fb.getLoginStatus(function (response) {
                    if (response.status === 'connected') {
                        resolve(response.authResponse);
                    } else {
                        reject(response);
                    }
                });
            });
        }
    }, {
        key: 'ready',
        value: function ready() {
            var facebook_app_id = this._options.facebook_app_id;

            if (!facebook_app_id) {
                return Promise.reject('missing facebook_app_id in props');
            }

            var that = this;
            return new Promise(function (resolve, reject) {
                var checkCount = 0;
                var checkFB = function checkFB() {
                    checkCount++;
                    if (that._fb) {
                        resolve();
                        return;
                    }

                    if (window.FB) {
                        that._fb = window.FB;
                        resolve();
                        return;
                    }

                    if (checkCount < 5) {
                        window.setTimeout(checkFB, 500);
                    } else {
                        reject('timeout');
                    }
                };
                checkFB();
            });
        }
    }, {
        key: '_user',
        value: function _user(authResponse) {
            if (!authResponse) {
                return Promise.reject('no authResponse');
            }
            var accessToken = authResponse.accessToken,
                userID = authResponse.userID;

            if (!accessToken) {
                return Promise.reject('no accessToken');
            }

            var fb = this._fb;
            return new Promise(function (resolve, reject) {
                fb.api('/me', function (response) {
                    var user = {
                        accessToken: accessToken,
                        userID: userID,
                        name: response.name
                    };

                    logger.debug('user', user);
                    resolve(user);
                });
            });
        }
    }, {
        key: '_fbAsyncInit',
        value: function _fbAsyncInit() {
            logger.debug('init FB');

            var facebook_app_id = this._options.facebook_app_id;

            if (!facebook_app_id) {
                logger.warn('missing facebook_app_id in props');
                return;
            }

            var fb = window.FB;
            fb.init({
                appId: facebook_app_id,
                cookie: true,
                xfbml: true,
                version: 'v2.11'
            });
            this._fb = fb;
        }
    }, {
        key: '_createScript',
        value: function _createScript() {
            if (window.FB) {
                this._fbAsyncInit();
                return;
            }

            var script = this._options.script;

            if (script === 'none') {
                if (window.FB) {
                    this._fb = window.FB;
                }
                return;
            }

            window.fbAsyncInit = this._fbAsyncInit;
            _Device2.default.createScript(this._options.script, true);
        }
    }]);

    return Facebook;
}();

exports.default = Facebook;