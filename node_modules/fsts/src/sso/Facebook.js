import Device from '../Device';
import Logger from '../logger';

const logger = new Logger('SSO.Facebook');

const default_options = {
    facebook_app_id: null,
    script: 'https://connect.facebook.net/en_US/sdk.js',
    scope: 'public_profile,email'
}

/**
* Reference: https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
*/
export default class Facebook {
    constructor(options) {
        if (typeof options === 'string') {
            options = { facebook_app_id: options }
        }
        this._options = Object.assign(
            {},
            default_options,
            options
        );
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

    signIn() {
        const fb = this._fb;
        if (!fb) {
            return Promise.reject('no fb instance');
        }

        const { scope } = this._options;
        return this.check()
            .then(authResponse => this._user(authResponse))
            .catch(err => {
                return new Promise((resolve, reject) => {
                    fb.login(response => {
                        resolve(this._user(response.authResponse));
                    }, { scope: scope });
                })
            });
    }

    signOut() {
        const fb = this._fb;
        if (!fb) {
            return Promise.reject('no fb instance');
        }

        return new Promise((resolve, reject) => {
            fb.logout(response => {
                logger.debug('signed out', response);
                resolve();
            });
        });
    }

    check() {
        const fb = this._fb;
        if (!fb) {
            return Promise.reject('no fb instance');
        }

        return new Promise((resolve, reject) => {
            fb.getLoginStatus(response => {
                if (response.status === 'connected') {
                    resolve(response.authResponse);
                } else {
                    reject(response);
                }
            });
        });
    }

    ready() {
        const { facebook_app_id } = this._options;
        if (!facebook_app_id) {
            return Promise.reject('missing facebook_app_id in props');
        }

        const that = this;
        return new Promise((resolve, reject) => {
            let checkCount = 0;
            const checkFB = function() {
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
            }
            checkFB();
        })
    }

    _user(authResponse) {
        if (!authResponse) {
            return Promise.reject('no authResponse');
        }
        const { accessToken, userID } = authResponse;
        if (!accessToken) {
            return Promise.reject('no accessToken');
        }

        const fb = this._fb;
        return new Promise((resolve, reject) => {
            fb.api('/me', response => {
                const user = {
                    accessToken,
                    userID,
                    name: response.name
                }

                logger.debug('user', user);
                resolve(user);
            });
        });
    }

    _fbAsyncInit() {
        logger.debug('init FB');

        const { facebook_app_id } = this._options;
        if (!facebook_app_id) {
            logger.warn('missing facebook_app_id in props');
            return;
        }

        const fb = window.FB;
        fb.init({
            appId   : facebook_app_id,
            cookie  : true,
            xfbml   : true,
            version : 'v2.11'
        });
        this._fb = fb;
    }

    _createScript() {
        if (window.FB) {
            this._fbAsyncInit();
            return;
        }

        const { script } = this._options;
        if (script === 'none') {
            if (window.FB) { this._fb = window.FB; }
            return;
        }

        window.fbAsyncInit = this._fbAsyncInit;
        Device.createScript(this._options.script, true);
    }
}
