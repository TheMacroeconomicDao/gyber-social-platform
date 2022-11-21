import Device from '../Device';
import Logger from '../logger';

const logger = new Logger('SSO.LinkedIn');

const default_options = {
    api_key: null,
    script: 'http://platform.linkedin.com/in.js?async=true'
}

/**
* Reference: https://developer.linkedin.com/docs/getting-started-js-sdk
*/
export default class LinkedIn {
    constructor(options) {
        if (typeof options === 'string') {
            options = { api_key: options }
        }
        this._options = Object.assign(
            {},
            default_options,
            options
        );
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

    signIn() {
        const IN = this._IN;
        if (!IN) {
            return Promise.reject('no IN instance');
        }

        const that = this;
        return new Promise((resolve, reject) => {
            IN.User.authorize(function() {
                that._user()
                    .then(user => resolve(user))
                    .catch(err => reject(err));
            });
        });
    }

    signOut() {
        const IN = this._IN;
        if (!IN) {
            return Promise.reject('no IN instance');
        }

        const that = this;
        return new Promise((resolve, reject) => {
            IN.User.logout(function() {
                logger.debug('signed out');
                resolve();
            });
        });
    }

    check() {
        const IN = this._IN;
        if (!IN) {
            return Promise.reject('no IN instance');
        }

        if (!IN.User.isAuthorized()) {
            return Promise.reject('not authorized');
        }

        return this._user();
    }

    ready() {
        const { api_key } = this._options;
        if (!api_key) {
            return Promise.reject('missing api_key');
        }

        const that = this;
        return new Promise((resolve, reject) => {
            let checkCount = 0;
            const checkIN = function() {
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
            }
            checkIN();
        })
    }

    _user() {
        const IN = this._IN;
        return new Promise((resolve, reject) => {
            IN.API.Raw('/people/~')
                .result(profile => {
                    const { firstName, lastName, id, headline } = profile;
                    resolve({
                        id,
                        firstName,
                        lastName,
                        headline
                    })
                })
                .error(err => reject(err));
        });
    }

    _createScript() {
        if (window.IN) {
            this._initIn();
        }

        const { script } = this._options;
        if (script === 'none') {
            return;
        }

        window._in_onload = this._fullyLoaded;
        Device.createScript(this._options.script, true, this._initIn);
    }

    _initIn() {
        logger.debug('init IN');
        const { api_key } = this._options;
        if (!api_key) {
            logger.warn('missing api_key');
            return;
        }

        const IN = window.IN;
        IN.init({
            api_key: api_key,
            authorize: true,
            onLoad: "_in_onload"
        });
        this._IN = IN;
    }

    _fullyLoaded() {
        logger.debug('fully loaded');
        this._INLoaded = true;
    }
}
