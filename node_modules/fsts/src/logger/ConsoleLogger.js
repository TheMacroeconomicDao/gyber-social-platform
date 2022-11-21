import JS from '../JS';

const LOG_LEVELS = {
    VERBOSE: 1,
    DEBUG: 2,
    INFO: 3,
    WARN: 4,
    ERROR: 5
};

export default class ConsoleLogger {
    constructor(name, level = 'WARN') {
        this.name = name;
        this.level = level;
    }

    _ts() {
        const dt = new Date();
        return [
            JS.padNumber(dt.getMinutes(), 2),
            JS.padNumber(dt.getSeconds(), 2)
        ].join(':') + '.' + dt.getMilliseconds();
    }

    _key(type, msg) {
        let parts = [
            '[' + type + ']',
            this._ts(),
            this.name,
        ];

        if (msg) { parts = parts.concat(['-', msg]); }

        return parts.join(' ');
    }

    _log(type, ...msg) {
        let level_name = this.level;
        if (ConsoleLogger.LOG_LEVEL) { level_name = ConsoleLogger.LOG_LEVEL; }
        if ((typeof window != 'undefined') && window.LOG_LEVEL) {
            level_name = window.LOG_LEVEL;
        }
        const logger_level = LOG_LEVELS[level_name];
        const type_level = LOG_LEVELS[type];
        if (!(type_level >= logger_level)) {
            return;
        }

        let log = console.log;
        if (type === 'ERROR' && console.error) { log = console.error; }
        if (type === 'WARN' && console.warn) { log = console.warn; }

        if (msg.length === 1 && typeof msg[0] === 'string') {
            log(this._key(type, msg[0]));
        } else if (msg.length === 1) {
            const output = {};
            const key = this._key(type);
            output[key] = msg[0];
            log(output);
        } else if (typeof msg[0] === 'string') {
            let obj = msg.slice(1);
            if (obj.length === 1) { obj = obj[0]; }
            const output = {};
            const key = this._key(type, msg[0]);
            output[key] = obj;
            log(output);
        } else {
            const output = {};
            const key = this._key(type);
            output[key] = msg;
            log(output);
        }
    }

    log(...msg) { this._log('INFO', ...msg); }
    info(...msg) { this._log('INFO', ...msg); }
    warn(...msg) { this._log('WARN', ...msg); }
    error(...msg) { this._log('ERROR', ...msg); }
    debug(...msg) { this._log('DEBUG', ...msg); }
    verbose(...msg) { this._log('VERBOSE', ...msg); }
};

