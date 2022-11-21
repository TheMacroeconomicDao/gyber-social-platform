const Minute_In_Milli = 60 * 1000;
const Hour_In_Milli = 60 * Minute_In_Milli;
const Day_In_Milli = 24 * Hour_In_Milli;

export default class JS {
    // String
    static isString(val) {
        return (typeof val === 'string');
    }

    static padNumber(n, length) {
        if (n < 0) { return '-' + JS.padNumber(-n, length-1); }

        let cur = n % 10;
        let remain = Math.floor(n / 10);
        let s = '' + cur;
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

    static format(src) {
        const args = Array.prototype.slice.call(arguments, 1);
        if (args.length === 0) { return src; }
        return src.replace(/{(\d+)}/g, (match, n) => {
            return typeof args[n] === 'undefined'
                ? match
                : args[n];
        });
    }

    // Object
    static deepAssign() {
        if (arguments.length === 0) { return; }

        let obj = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            const next = arguments[i];
            Object.keys(next)
                .forEach(key => {
                    if (!obj[key]) { return JS._assignProp(obj, next, key); }
                    if (typeof obj[key] !== typeof next[key]) {
                        // override if type different
                        return JS._assignProp(obj, next, key);
                    }
                    if (JS.isArray(next[key])) { return JS.appendUnique(obj[key], next[key]); }
                    if (typeof next[key] === 'object') { return JS.deepAssign(obj[key], next[key]); }
                    obj[key] = next[key];
                });
        }

        return obj;
    }
    static _assignProp(first, second, key) {
      if (typeof second[key] === 'object') { return first[key] = Object.assign({}, second[key]); }
      first[key] = second[key];
    }

    static lessProps(props, less) {
        const p = Object.assign({}, props);
        if (!props || !less) { return p; }

        const list = [].concat(less);
        list.forEach(prop => {
            if (typeof prop === 'string') {
                const regex = new RegExp('^' + prop + '$');
                Object.keys(props).map(key => {
                    if (key.match(regex)) { delete p[key]; }
                })
            }
        });

        return p;
    }

    static hasProps(props, lookup) {
        if (!lookup) { return 0; }

        let count = 0;
        const list = [].concat(lookup);
        list.forEach(prop => {
            if (typeof prop === 'string') {
                const regex = new RegExp('^' + prop + '$');
                Object.keys(props).map(key => {
                    if (key.match(regex)) { count++; }
                })
            }
        });

        return count;
    }

    static traverseProps(obj, callback) {
        if (!callback) {
            console.log('no callback for traverse, do nothing');
            return;
        }

        JS._traverseProps([], obj, callback);
    }

    static _traverseProps(path, obj, callback) {
        if (typeof obj !== 'object') { return; }

        Object.keys(obj).forEach(key => {
            const val = obj[key];
            callback(path, key, val);
            JS._traverseProps(path.concat(key), val, callback);
        });
    }

    // Array
    static isArray(val) {
        if (typeof val !== 'object') { return false; }

        return (typeof val.length === 'number');
    }

    static sureArray(ary) {
        return [].concat(ary);
    }

    static appendUnique(ary, val) {
        if (!ary) { return false; }

        const exists = ary.filter(item => item === val);
        if (exists.length > 0) { return false; }

        ary.push(val);
        return true;
    }

    // Date Time
    static ts() {
        return new Date().getTime();
    }

    static clientTimezoneOffset() { // in milliseconds
        const dt = new Date();
        const tzo = dt.getTimezoneOffset();
        return tzo * Minute_In_Milli;
    }

    static utcToLocal(ts) {
        return ts - JS.clientTimezoneOffset();
    }

    static localToUtc(ts) {
        return ts + JS.clientTimezoneOffset();
    }

    static roundToMinutes(ts) {
        return Math.floor(ts / Minute_In_Milli) * Minute_In_Milli;
    };

    static roundToHours(ts) {
        return Math.floor(ts / Hour_In_Milli) * Hour_In_Milli;
    };

    static roundToDates(ts) {
        return Math.floor(ts / Day_In_Milli) * Day_In_Milli;
    };

    static today() {
        return roundToDates(new Date().getTime());
    };

    static nextDay(n) {
        return JS.today() + Day_In_Milli * (n || 1);
    }

    static thisSunday() {
        const td = JS.today();
        const dt = new Date(td);
        return td - dt.getDay() * Day_In_Milli;
    }

    static nextSunday(n) {
        return JS.thisSunday() + 7 * Day_In_Milli * (n || 1);
    }

    static thisMonth() {
        const td = JS.today();
        const dt = new Date(td);
        return td - (dt.getDate() - 1) * Day_In_Milli;
    }

    static nextMonth(n) {
        n = n || 1;
        const td = JS.today();
        const dt = new Date(td);
        const m = dt.getMonth();
        const next_y = dt.getFullYear() + Math.floor((m + 1 + n) / 12);
        const next_m = (m + n) % 12;
        const next_dstr = [
            next_y,
            JS.padNumber(next_m + 1, 2),
            '01'
        ].join('-') + ' 00:00:00';
        const next_dt = new Date(next_dstr);
        return next_dt.getTime();
    }

    // React
    static styleToCss(style) {
        if (!style) { return ''; }

        const css = Object.keys(style)
            .map(key => {
                const name = key.replace(/([A-Z])/g, '-$1').toLowerCase();
                return name + ':' + style[key];
            });
        return '{' + css.join(';').replace(/"/g, '&quot;') + '}';
    }

    // General
    static isUndefined(val) {
        return (typeof val === 'undefined');
    }

    static undefinedThen(val, defVal) {
        return JS.isUndefined(val)? defVal : val;
    }

    static isNumber(val) {
      if (!val) { return false; }

      return !isNaN(val);
    }

    /** assume JS runing single thread **/
    static cheapId() {
        if (!JS.lastCheapId) { JS.lastCheapId = new Date().getTime(); }
        return ++JS.lastCheapId;
    }
}
