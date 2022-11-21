import JS from '../JS';
import Logger from '../logger';

const logger = new Logger('MemoryStorage');

const defaultOptions = {
    expiration: '3600' // seconds
}

/**
* MemoryStorage as an alternative to LocalStorage. Items will not live beyond session.
* Still do JSON stringify so consistant with LocalStorage, also ensures immutable in cache.
*/
export default class MemoryStorage {
    constructor(options) {
        logger.debug('creating MemoryStorage instance', options);

        this._options = Object.assign({}, defaultOptions, options);

        this._store = {};
    }

    options(options) {
        if (options) {
            this._options = Object.assign({}, this._options, options);
        }

        return this._options;
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

        this._store[key] = item;
    }

    get(key) {
        if (!key) {
            logger.warn('no key to get');
            return;
        }

        const item = this._store[key];
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

        delete this._store[key];
    }

    clear() {
        this._store = {};
    }

    purgeExpired() {
        Object.keys(this._store).forEach(key => {
            const item = this._store[key];
            if (this._isExpired(item)) {
                delete this._store[key];
            }
        });
    }

    _isExpired(item) {
        const cur = JS.ts();
        return (item.ts + this._options.expiration * 1000 < cur);
    }
}
