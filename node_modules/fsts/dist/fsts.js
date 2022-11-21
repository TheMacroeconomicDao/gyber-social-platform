'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var JS = function () {
    function JS() {
        babelHelpers.classCallCheck(this, JS);
    }

    babelHelpers.createClass(JS, null, [{
        key: 'isString',

        // String
        value: function isString(val) {
            return typeof val === 'string';
        }
    }, {
        key: 'padNumber',
        value: function padNumber(n, length) {
            if (n < 0) {
                return '-' + JS.padNumber(-n, length - 1);
            }

            var cur = n % 10;
            var remain = Math.floor(n / 10);
            var s = '' + cur;
            for (var i = 1; i < length; i++) {
                if (remain === 0) {
                    s = '0' + s;
                } else {
                    cur = remain % 10;
                    remain = Math.floor(remain / 10);
                    s = '' + cur + s;
                }
            }

            return s;
        }

        // Object

    }, {
        key: 'lessProps',
        value: function lessProps(props, less) {
            var p = Object.assign({}, props);
            if (!less) {
                return p;
            }

            var list = [].concat(less);
            list.forEach(function (prop) {
                if (typeof prop === 'string') {
                    var regex = new RegExp('^' + prop + '$');
                    Object.keys(props).map(function (key) {
                        if (key.match(regex)) {
                            delete p[key];
                        }
                    });
                }
            });

            return p;
        }
    }, {
        key: 'hasProps',
        value: function hasProps(props, lookup) {
            if (!lookup) {
                return 0;
            }

            var count = 0;
            var list = [].concat(lookup);
            list.forEach(function (prop) {
                if (typeof prop === 'string') {
                    var regex = new RegExp('^' + prop + '$');
                    Object.keys(props).map(function (key) {
                        if (key.match(regex)) {
                            count++;
                        }
                    });
                }
            });

            return count;
        }
    }, {
        key: 'traverseProps',
        value: function traverseProps(obj, callback) {
            if (!callback) {
                console.log('no callback for traverse, do nothing');
                return;
            }

            JS._traverseProps([], obj, callback);
        }
    }, {
        key: '_traverseProps',
        value: function _traverseProps(path, obj, callback) {
            if ((typeof obj === 'undefined' ? 'undefined' : babelHelpers.typeof(obj)) !== 'object') {
                return;
            }

            Object.keys(obj).forEach(function (key) {
                var val = obj[key];
                callback(path, key, val);
                JS._traverseProps(path.concat(key), val, callback);
            });
        }

        // Array

    }, {
        key: 'isArray',
        value: function isArray(val) {
            if ((typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val)) !== 'object') {
                return false;
            }

            return typeof val.length === 'number';
        }
    }, {
        key: 'sureArray',
        value: function sureArray(ary) {
            return [].concat(ary);
        }
    }, {
        key: 'appendUnique',
        value: function appendUnique(ary, val) {
            if (!ary) {
                return false;
            }

            var exists = ary.filter(function (item) {
                return item === val;
            });
            if (exists.length > 0) {
                return false;
            }

            ary.push(val);
            return true;
        }

        // Date Time

    }, {
        key: 'ts',
        value: function ts() {
            return new Date().getTime();
        }

        // General

    }, {
        key: 'isUndefined',
        value: function isUndefined(val) {
            return typeof val === 'undefined';
        }
    }, {
        key: 'undefinedThen',
        value: function undefinedThen(val, defVal) {
            return JS.isUndefined(val) ? defVal : val;
        }
    }]);
    return JS;
}();

var LOG_LEVELS = {
    VERBOSE: 1,
    DEBUG: 2,
    INFO: 3,
    WARN: 4,
    ERROR: 5
};

var ConsoleLogger = function () {
    function ConsoleLogger(name) {
        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'WARN';
        babelHelpers.classCallCheck(this, ConsoleLogger);

        this.name = name;
        this.level = level;
    }

    babelHelpers.createClass(ConsoleLogger, [{
        key: '_ts',
        value: function _ts() {
            var dt = new Date();
            return [JS.padNumber(dt.getMinutes(), 2), JS.padNumber(dt.getSeconds(), 2)].join(':') + '.' + dt.getMilliseconds();
        }
    }, {
        key: '_key',
        value: function _key(type, msg) {
            var parts = ['[' + type + ']', this._ts(), this.name];

            if (msg) {
                parts = parts.concat(['-', msg]);
            }

            return parts.join(' ');
        }
    }, {
        key: '_log',
        value: function _log(type) {
            var level_name = this.level;
            if (ConsoleLogger.LOG_LEVEL) {
                level_name = ConsoleLogger.LOG_LEVEL;
            }
            if (typeof window != 'undefined' && window.LOG_LEVEL) {
                level_name = window.LOG_LEVEL;
            }
            var logger_level = LOG_LEVELS[level_name];
            var type_level = LOG_LEVELS[type];
            if (!(type_level >= logger_level)) {
                return;
            }

            var log = console.log;
            if (type === 'ERROR' && console.error) {
                log = console.error;
            }
            if (type === 'WARN' && console.warn) {
                log = console.warn;
            }

            for (var _len = arguments.length, msg = Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
                msg[_key2 - 1] = arguments[_key2];
            }

            if (msg.length === 1 && typeof msg[0] === 'string') {
                log(this._key(type, msg[0]));
            } else if (msg.length === 1) {
                var output = {};
                var key = this._key(type);
                output[key] = msg[0];
                log(output);
            } else if (typeof msg[0] === 'string') {
                var obj = msg.slice(1);
                if (obj.length === 1) {
                    obj = obj[0];
                }
                var _output = {};
                var _key3 = this._key(type, msg[0]);
                _output[_key3] = obj;
                log(_output);
            } else {
                var _output2 = {};
                var _key4 = this._key(type);
                _output2[_key4] = msg;
                log(_output2);
            }
        }
    }, {
        key: 'log',
        value: function log() {
            for (var _len2 = arguments.length, msg = Array(_len2), _key5 = 0; _key5 < _len2; _key5++) {
                msg[_key5] = arguments[_key5];
            }

            this._log.apply(this, ['INFO'].concat(msg));
        }
    }, {
        key: 'info',
        value: function info() {
            for (var _len3 = arguments.length, msg = Array(_len3), _key6 = 0; _key6 < _len3; _key6++) {
                msg[_key6] = arguments[_key6];
            }

            this._log.apply(this, ['INFO'].concat(msg));
        }
    }, {
        key: 'warn',
        value: function warn() {
            for (var _len4 = arguments.length, msg = Array(_len4), _key7 = 0; _key7 < _len4; _key7++) {
                msg[_key7] = arguments[_key7];
            }

            this._log.apply(this, ['WARN'].concat(msg));
        }
    }, {
        key: 'error',
        value: function error() {
            for (var _len5 = arguments.length, msg = Array(_len5), _key8 = 0; _key8 < _len5; _key8++) {
                msg[_key8] = arguments[_key8];
            }

            this._log.apply(this, ['ERROR'].concat(msg));
        }
    }, {
        key: 'debug',
        value: function debug() {
            for (var _len6 = arguments.length, msg = Array(_len6), _key9 = 0; _key9 < _len6; _key9++) {
                msg[_key9] = arguments[_key9];
            }

            this._log.apply(this, ['DEBUG'].concat(msg));
        }
    }, {
        key: 'verbose',
        value: function verbose() {
            for (var _len7 = arguments.length, msg = Array(_len7), _key10 = 0; _key10 < _len7; _key10++) {
                msg[_key10] = arguments[_key10];
            }

            this._log.apply(this, ['VERBOSE'].concat(msg));
        }
    }]);
    return ConsoleLogger;
}();

var Logger = ConsoleLogger;

var Device = function () {
    function Device() {
        babelHelpers.classCallCheck(this, Device);
    }

    babelHelpers.createClass(Device, null, [{
        key: 'hasWindow',
        value: function hasWindow() {
            return typeof window !== 'undefined';
        }
    }, {
        key: 'createScript',
        value: function createScript(src, async, onload) {
            var script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = onload;
            document.body.appendChild(script);
        }
    }]);
    return Device;
}();

var logger = new Logger('LocalStorage');

var defaultOptions = {
    prefix: '_fsts_',
    expiration: '3600' // seconds
};

var LocalStorage = function () {
    function LocalStorage(options) {
        babelHelpers.classCallCheck(this, LocalStorage);

        logger.debug('creating LocalStorage instance', options);

        this._options = Object.assign({}, defaultOptions, options);
    }

    babelHelpers.createClass(LocalStorage, [{
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
            if (JS.isUndefined(value) || value === null) {
                logger.worn('nothing to set for ' + key);
                return;
            }

            var item = {
                data: JSON.stringify(value),
                ts: JS.ts()
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
            var cur = JS.ts();
            return item.ts + this._options.expiration * 1000 < cur;
        }
    }]);
    return LocalStorage;
}();

var logger$1 = new Logger('MemoryStorage');

var defaultOptions$1 = {
    expiration: '3600' // seconds


    /**
    * MemoryStorage as an alternative to LocalStorage. Items will not live beyond session.
    * Still do JSON stringify so consistant with LocalStorage, also ensures immutable in cache.
    */
};
var MemoryStorage = function () {
    function MemoryStorage(options) {
        babelHelpers.classCallCheck(this, MemoryStorage);

        logger$1.debug('creating MemoryStorage instance', options);

        this._options = Object.assign({}, defaultOptions$1, options);

        this._store = {};
    }

    babelHelpers.createClass(MemoryStorage, [{
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
                logger$1.warn('no key to set');
                return;
            }
            if (JS.isUndefined(value) || value === null) {
                logger$1.worn('nothing to set for ' + key);
                return;
            }

            var item = {
                data: JSON.stringify(value),
                ts: JS.ts()
            };

            this._store[key] = item;
        }
    }, {
        key: 'get',
        value: function get(key) {
            if (!key) {
                logger$1.warn('no key to get');
                return;
            }

            var item = this._store[key];
            if (!item) {
                logger$1.verbose('cache miss: ' + key);
                return null;
            }

            if (this._isExpired(item)) {
                logger$1.verbose('cache miss: ' + key);
                return null;
            }

            logger$1.verbose('cache hit: ' + key);
            return JSON.parse(item.data);
        }
    }, {
        key: 'remove',
        value: function remove(key) {
            if (!key) {
                logger$1.warn('no key to remove');
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
            var cur = JS.ts();
            return item.ts + this._options.expiration * 1000 < cur;
        }
    }]);
    return MemoryStorage;
}();

var _instance = Device.hasWindow() ? new LocalStorage() : new MemoryStorage();

var logger$2 = new Logger('SSO.Google');

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
        babelHelpers.classCallCheck(this, Google);

        if (typeof options === 'string') {
            options = { google_client_id: options };
        }
        this._options = Object.assign({}, default_options, options);
        if (!this._options.google_client_id) {
            logger$2.warn('missing google_client_id');
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

    babelHelpers.createClass(Google, [{
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
            Device.createScript(src, true, this._initGapi);
        }
    }, {
        key: '_initGapi',
        value: function _initGapi() {
            logger$2.debug('init gapi');
            var _options = this._options,
                google_client_id = _options.google_client_id,
                scope = _options.scope;

            if (!google_client_id) {
                logger$2.warn('missing google_client_id in options');
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

var logger$3 = new Logger('SSO.Facebook');

var default_options$1 = {
    facebook_app_id: null,
    script: 'https://connect.facebook.net/en_US/sdk.js',
    scope: 'public_profile,email'

    /**
    * Reference: https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
    */
};
var Facebook = function () {
    function Facebook(options) {
        babelHelpers.classCallCheck(this, Facebook);

        if (typeof options === 'string') {
            options = { facebook_app_id: options };
        }
        this._options = Object.assign({}, default_options$1, options);
        if (!this._options.facebook_app_id) {
            logger$3.warn('missing facebook_app_id');
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

    babelHelpers.createClass(Facebook, [{
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
                    logger$3.debug('signed out', response);
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

                    logger$3.debug('user', user);
                    resolve(user);
                });
            });
        }
    }, {
        key: '_fbAsyncInit',
        value: function _fbAsyncInit() {
            logger$3.debug('init FB');

            var facebook_app_id = this._options.facebook_app_id;

            if (!facebook_app_id) {
                logger$3.warn('missing facebook_app_id in props');
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
            Device.createScript(this._options.script, true);
        }
    }]);
    return Facebook;
}();

var logger$4 = new Logger('SSO.LinkedIn');

var default_options$2 = {
    api_key: null,
    script: 'http://platform.linkedin.com/in.js?async=true'

    /**
    * Reference: https://developer.linkedin.com/docs/getting-started-js-sdk
    */
};
var LinkedIn = function () {
    function LinkedIn(options) {
        babelHelpers.classCallCheck(this, LinkedIn);

        if (typeof options === 'string') {
            options = { api_key: options };
        }
        this._options = Object.assign({}, default_options$2, options);
        if (!this._options.api_key) {
            logger$4.warn('missing api_key');
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

    babelHelpers.createClass(LinkedIn, [{
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

            return new Promise(function (resolve, reject) {
                IN.User.logout(function () {
                    logger$4.debug('signed out');
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
            Device.createScript(this._options.script, true, this._initIn);
        }
    }, {
        key: '_initIn',
        value: function _initIn() {
            logger$4.debug('init IN');
            var api_key = this._options.api_key;

            if (!api_key) {
                logger$4.warn('missing api_key');
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
            logger$4.debug('fully loaded');
            this._INLoaded = true;
        }
    }]);
    return LinkedIn;
}();

var SSO = {
    Google: Google,
    Facebook: Facebook,
    LinkedIn: LinkedIn
};

var logger$7 = new Logger('Subscriber');

var Subscriber = function () {
    function Subscriber(channel, noticeHandler) {
        babelHelpers.classCallCheck(this, Subscriber);

        this.channel = channel;
        this.noticeHandler = noticeHandler;
        this.cursor = -1;
    }

    babelHelpers.createClass(Subscriber, [{
        key: 'notify',
        value: function notify() {
            var events = this.channel.poll(this.cursor);
            this.cursor = channel.cursor;
            if (events.length > 0) {
                for (var i = 0; i < events.length; i++) {
                    this._notifyEvent(events[i]);
                }
            }
        }
    }, {
        key: '_notifyEvent',
        value: function () {
            var _ref = babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                try {
                                    this.noticeHandler(event);
                                } catch (e) {
                                    logger$7.error('notify event error', e, event, this.noticeHandler);
                                }

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function _notifyEvent(_x) {
                return _ref.apply(this, arguments);
            }

            return _notifyEvent;
        }()
    }]);
    return Subscriber;
}();

var logger$6 = new Logger('Channel');

var default_options$4 = {
    bufferSize: 128
};

var Channel = function () {
    function Channel(name, options) {
        babelHelpers.classCallCheck(this, Channel);

        this.name = name;
        this.events = [];
        this.subscribers = [];
        this.cursor = -1;

        this._options = Object.assign({}, default_options$4, options);
    }

    babelHelpers.createClass(Channel, [{
        key: 'subscribe',
        value: function subscribe(noticeHandler) {
            var found = this.subscribers.filter(function (subscriber) {
                return subscriber.noticeHandler === noticeHandler;
            });
            if (found.length > 0) {
                logger$6.debug('duplicated subscription on channel ' + this.name, noticeHandler);
                return;
            }

            var subscriber = new Subscriber(this, noticeHandler);
            this.subscribers.push(subscriber);
            subscriber.notify();
        }
    }, {
        key: 'unsubscribe',
        value: function unsubscribe(noticeHandler) {
            this.subscribers = this.subscribers.filter(function (subscriber) {
                return subscriber.noticeHandler !== noticeHandler;
            });
        }
    }, {
        key: 'send',
        value: function send(event) {
            if (!event) {
                logger$6.warn('nothing to send to channel ' + this.name);
            }

            var size = this._options.bufferSize;
            this.cursor++;
            var idx = this.cursor % size;
            if (idx < this.events.length) {
                this.events[idx] = event;
            } else {
                this.events.push(event);
            }

            this.subscribers.forEach(function (subscriber) {
                return subscriber.notify();
            });
        }
    }, {
        key: 'poll',
        value: function poll(last_cursor) {
            if (JS.isUndefined(lastCursor)) {
                last_cursor = -1;
            }
            if (last_cursor === this.cursor) {
                return [];
            }

            var list = [];
            var size = this._options.bufferSize;
            for (var i = last_cursor + 1; i <= this.cursor; i++) {
                var idx = i % size;
                if (idx >= this.events.length) {
                    logger$6.error('idx overflow');
                    break;
                }
                list.push(this.events[idx]);
            }

            return list;
        }
    }]);
    return Channel;
}();

var logger$5 = new Logger('Pipe');

var default_options$3 = {
    bufferSize: 128
};

var CHANNEL_BROADCAST = '_broadcast_';

var Pipe = function () {
    function Pipe(name, options) {
        babelHelpers.classCallCheck(this, Pipe);

        this.name = name;
        this._options = Object.assign({}, default_options$3, options);

        this._channels = {};
    }

    babelHelpers.createClass(Pipe, [{
        key: 'send',
        value: function send(event, channel_name) {
            if (!channel_name) {
                channel_name = event.channel;
            }
            if (!channel_name) {
                channel_name = CHANNEL_BROADCAST;
            }
            var channel = this._getChannel(channel_name);

            channel.send(event);
        }
    }, {
        key: 'subscribe',
        value: function subscribe(noticeHandler, channel_name) {
            if (!channel_name) {
                channel_name = CHANNEL_BROADCAST;
            }
            var channel = this._getChannel(channel_name);

            channel.subscribe(noticeHandler);
        }
    }, {
        key: '_getChannel',
        value: function _getChannel(name) {
            if (!name) {
                return null;
            }
            var channel = this._channels[name];
            if (!channel) {
                channel = new Channel(name);
                this.channels[name] = channel;
            }
            return channel;
        }
    }]);
    return Pipe;
}();

var pipe = new Pipe('_root_');

var Url = function () {
    function Url() {
        babelHelpers.classCallCheck(this, Url);
    }

    babelHelpers.createClass(Url, null, [{
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
    }]);
    return Url;
}();

exports.Logger = Logger;
exports.Cache = _instance;
exports.SSO = SSO;
exports.Pipe = Pipe;
exports.pipe = pipe;
exports.Device = Device;
exports.JS = JS;
exports.Url = Url;
//# sourceMappingURL=fsts.js.map
