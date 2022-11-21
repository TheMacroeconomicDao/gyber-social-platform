import JS from '../JS';
import Logger from '../logger';

const logger = new Logger('LocalStorage');

const defaultOptions = {
    prefix: '_fsts_',
    expiration: '3600' // seconds
}

export default class LocalStorage {
    constructor(options) {
        logger.debug('creating LocalStorage instance', options);

        this._options = Object.assign({}, defaultOptions, options);
    }

    options(options) {
        if (options) {
            this._options = Object.assign({}, this._options, options);
        }

        return this._options;
    }

    key(key) {
        return this._options.prefix + key;
    }

    set(key, value) {
        if (!key) {
            logger.warn('no key to set');
            return;
        }
        if (JS.isUndefined(value) || value === null) {
            logger.worn('nothing to set for ' + key);
            return;
        }

        const item = {
            data: JSON.stringify(value),
            ts: JS.ts()
        }

        this._setItem(key, item);
    }

    get(key) {
        if (!key) {
            logger.warn('no key to get');
            return;
        }

        const item = this._getItem(key);
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

    remove(key) {
        if (!key) {
            logger.warn('no key to remove');
            return;
        }

        this._removeItem(key);
    }

    clear() {
        const store = window.localStorage;
        while(store.length > 0) {
            const key = store.key(0);
            store.removeItem(key);
        }
    }

    purgeExpired() {
        const store = window.localStorage;
        while(store.length > 0) {
            const key = store.key(0);
            const item = JSON.parse(store.getItem(key));
            if (this._isExpired(item)) {
                store.removeItem(key);
            }
        }
    }

    _setItem(key, item) {
        window.localStorage.setItem(this.key(key), JSON.stringify(item));
    }

    _getItem(key) {
        const item = window.localStorage.getItem(this.key(key));
        if (!item) { return null; }

        const it = JSON.parse(item);
        return {
            data: it.data,
            ts: it.ts * 1
        }
    }

    _removeItem(key) {
        window.localStorge.removeItem(this.key(key));
    }

    _isExpired(item) {
        const cur = JS.ts();
        return (item.ts + this._options.expiration * 1000 < cur);
    }
}
