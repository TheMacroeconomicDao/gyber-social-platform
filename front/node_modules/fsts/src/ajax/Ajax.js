import Url from '../Url';
import Logger from '../logger';

const logger = new Logger('Ajax');

const default_options = {
    root: '',
    type: 'json',
    dataType: 'json'
};

export default class Ajax {
    constructor(options) {
        this._options = Object.assign({}, default_options, options);
    }

    ajax(url, options) {
        const default_options = {
            method: 'GET',
            root: this._options.root,
            redirect: 'follow',
            headers: {}
        };
        const opt = Object.assign(
            {},
            default_options,
            options
        );

        const fetch_url = Url.join(opt.root, opt.url);
        const init = {
            method: opt.Method,
            headers: new Headers(opt.headers)
        };
        if (opt.data) { init.body = opt.data; }
        return fetch(fetch_url, init)
            .then(response => {
                logger.verbose(response);
                let data;
                if (opt.dataType === 'json') {
                    data = response.json();
                } else if (opt.dataType === 'blob') {
                    data = response.blob();
                } else {
                    data = response.text();
                }
                return {
                    ok: response.ok,
                    status: response.status,
                    statusText: response.statusText,
                    data: data
                };
            })
            .catch(err => {
                logge.error(err);
                return {
                    ok: false,
                    status: 500,
                    data: err
                }
            });
    }

    get(url, options) {
        const default_options = {
            method: 'GET'
        };
        const opt = Object.assign(
            {},
            default_options,
            options
        );
        return this.ajax(url, opt);
    }

    post(url, data, options) {
        const default_options = {
            method: 'POST',
            data: data
        };
        const opt = Object.assign(
            {},
            default_options,
            options
        );
        return this.ajax(url, opt);
    }

    put(url, data, options) {
        const default_options = {
            method: 'PUT',
            data: data
        };
        const opt = Object.assign(
            {},
            default_options,
            options
        );
        return this.ajax(url, opt);
    }

    delete(url, options) {
        const default_options = {
            method: 'DELETE'
        };
        const opt = Object.assign(
            {},
            default_options,
            options
        );
        return this.ajax(url, opt);
    }

    head(url, options) {
        const default_options = {
            method: 'HEAD'
        };
        const opt = Object.assign(
            {},
            default_options,
            options
        );
        return this.ajax(url, opt);
    }
}
