import Device from '../Device';
import Logger from '../logger';

const logger = new Logger('SSO.Google');

const default_options = {
    google_client_id: null,
    script: 'https://apis.google.com/js/platform.js',
    scope: 'profile email openid'
}

/**
* Reference: https://developers.google.com/identity/sign-in/web/reference
*/
export default class Google {
    constructor(options) {
        if (typeof options === 'string') {
            options = { google_client_id: options }
        }
        this._options = Object.assign(
            {},
            default_options,
            options
        );
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

    signIn() {
        if (!this._ga) {
            return Promise.reject('no ga instance');
        }

        return this._ga.signIn()
            .then(googleUser => this._user(googleUser));
    }

    signOut() {
        if (!this._ga) {
            return Promise.reject('no ga instance');
        }

        return this._ga.signOut();
    }

    check() {
        if (!this._ga) {
            return Promise.reject('no ga instance');
        }

        return new Promise((resolve, reject) => {
            const googleUser = this._ga.currentUser.get()
            if (!googleUser) {
                reject('no google user');
                return;
            }
            if (googleUser.isSignedIn()) {
                resolve(this._user(googleUser));
            } else {
                reject('not signed in');
            }
        });
    }

    ready() {
        const { google_client_id } = this._options;
        if (!google_client_id) {
            return Promise.reject('missing google_client_id in options');
        }

        const that = this;
        return new Promise((resolve, reject) => {
            let checkCount = 0;
            const checkGA = function() {
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
            }
            checkGA();
        })
    }

    _user(googleUser) {
        const { id_token } = googleUser.getAuthResponse();
        const profile = googleUser.getBasicProfile();
        return {
            id_token,
            email: profile.getEmail(),
            name: profile.getName()
        };
    }

    _createScript() {
        if (window.gapi) {
            this._initGapi();
            return;
        }

        const { script } = this._options;
        if (script === 'none') {
            return;
        }

        const src = this._options.script;
        Device.createScript(src, true, this._initGapi);
    }

    _initGapi() {
        logger.debug('init gapi');
        const { google_client_id, scope } = this._options;
        if (!google_client_id) {
            logger.warn('missing google_client_id in options');
            return;
        }

        const that = this;
        const g = window.gapi;
        g.load('auth2', function() {
            g.auth2.init({
                client_id: google_client_id,
                scope: scope
            }).then(ga => {
                that._ga = ga;
            });
        });
    }
}
