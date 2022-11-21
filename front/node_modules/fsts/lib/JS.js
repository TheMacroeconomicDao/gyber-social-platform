'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Minute_In_Milli = 60 * 1000;
var Hour_In_Milli = 60 * Minute_In_Milli;
var Day_In_Milli = 24 * Hour_In_Milli;

var JS = function () {
    function JS() {
        _classCallCheck(this, JS);
    }

    _createClass(JS, null, [{
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
    }, {
        key: 'format',
        value: function format(src) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (args.length === 0) {
                return src;
            }
            return src.replace(/{(\d+)}/g, function (match, n) {
                return typeof args[n] === 'undefined' ? match : args[n];
            });
        }

        // Object

    }, {
        key: 'deepAssign',
        value: function deepAssign() {
            var _arguments = arguments;

            if (arguments.length === 0) {
                return;
            }

            var obj = arguments[0];

            var _loop = function _loop() {
                var next = _arguments[i];
                Object.keys(next).forEach(function (key) {
                    if (!obj[key]) {
                        return JS._assignProp(obj, next, key);
                    }
                    if (_typeof(obj[key]) !== _typeof(next[key])) {
                        // override if type different
                        return JS._assignProp(obj, next, key);
                    }
                    if (JS.isArray(next[key])) {
                        return JS.appendUnique(obj[key], next[key]);
                    }
                    if (_typeof(next[key]) === 'object') {
                        return JS.deepAssign(obj[key], next[key]);
                    }
                    obj[key] = next[key];
                });
            };

            for (var i = 1; i < arguments.length; i++) {
                _loop();
            }

            return obj;
        }
    }, {
        key: '_assignProp',
        value: function _assignProp(first, second, key) {
            if (_typeof(second[key]) === 'object') {
                return first[key] = Object.assign({}, second[key]);
            }
            first[key] = second[key];
        }
    }, {
        key: 'lessProps',
        value: function lessProps(props, less) {
            var p = Object.assign({}, props);
            if (!props || !less) {
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
            if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
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
            if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object') {
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
    }, {
        key: 'clientTimezoneOffset',
        value: function clientTimezoneOffset() {
            // in milliseconds
            var dt = new Date();
            var tzo = dt.getTimezoneOffset();
            return tzo * Minute_In_Milli;
        }
    }, {
        key: 'utcToLocal',
        value: function utcToLocal(ts) {
            return ts - JS.clientTimezoneOffset();
        }
    }, {
        key: 'localToUtc',
        value: function localToUtc(ts) {
            return ts + JS.clientTimezoneOffset();
        }
    }, {
        key: 'roundToMinutes',
        value: function roundToMinutes(ts) {
            return Math.floor(ts / Minute_In_Milli) * Minute_In_Milli;
        }
    }, {
        key: 'roundToHours',
        value: function roundToHours(ts) {
            return Math.floor(ts / Hour_In_Milli) * Hour_In_Milli;
        }
    }, {
        key: 'roundToDates',
        value: function roundToDates(ts) {
            return Math.floor(ts / Day_In_Milli) * Day_In_Milli;
        }
    }, {
        key: 'today',
        value: function today() {
            return roundToDates(new Date().getTime());
        }
    }, {
        key: 'nextDay',
        value: function nextDay(n) {
            return JS.today() + Day_In_Milli * (n || 1);
        }
    }, {
        key: 'thisSunday',
        value: function thisSunday() {
            var td = JS.today();
            var dt = new Date(td);
            return td - dt.getDay() * Day_In_Milli;
        }
    }, {
        key: 'nextSunday',
        value: function nextSunday(n) {
            return JS.thisSunday() + 7 * Day_In_Milli * (n || 1);
        }
    }, {
        key: 'thisMonth',
        value: function thisMonth() {
            var td = JS.today();
            var dt = new Date(td);
            return td - (dt.getDate() - 1) * Day_In_Milli;
        }
    }, {
        key: 'nextMonth',
        value: function nextMonth(n) {
            n = n || 1;
            var td = JS.today();
            var dt = new Date(td);
            var m = dt.getMonth();
            var next_y = dt.getFullYear() + Math.floor((m + 1 + n) / 12);
            var next_m = (m + n) % 12;
            var next_dstr = [next_y, JS.padNumber(next_m + 1, 2), '01'].join('-') + ' 00:00:00';
            var next_dt = new Date(next_dstr);
            return next_dt.getTime();
        }

        // React

    }, {
        key: 'styleToCss',
        value: function styleToCss(style) {
            if (!style) {
                return '';
            }

            var css = Object.keys(style).map(function (key) {
                var name = key.replace(/([A-Z])/g, '-$1').toLowerCase();
                return name + ':' + style[key];
            });
            return '{' + css.join(';').replace(/"/g, '&quot;') + '}';
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
    }, {
        key: 'isNumber',
        value: function isNumber(val) {
            if (!val) {
                return false;
            }

            return !isNaN(val);
        }

        /** assume JS runing single thread **/

    }, {
        key: 'cheapId',
        value: function cheapId() {
            if (!JS.lastCheapId) {
                JS.lastCheapId = new Date().getTime();
            }
            return ++JS.lastCheapId;
        }
    }]);

    return JS;
}();

exports.default = JS;