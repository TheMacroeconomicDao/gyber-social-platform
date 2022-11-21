'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _JS = require('../JS');

var _JS2 = _interopRequireDefault(_JS);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _Subscriber = require('./Subscriber');

var _Subscriber2 = _interopRequireDefault(_Subscriber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = new _logger2.default('Channel');

var default_options = {
    bufferSize: 128
};

var Channel = function () {
    function Channel(name, options) {
        _classCallCheck(this, Channel);

        this.name = name;

        this._options = Object.assign({}, default_options, options);

        this.clear();
    }

    _createClass(Channel, [{
        key: 'subscribe',
        value: function subscribe(noticeHandler) {
            var found = this.subscribers.filter(function (subscriber) {
                return subscriber.noticeHandler === noticeHandler;
            });
            if (found.length > 0) {
                logger.debug('duplicated subscription on channel ' + this.name, noticeHandler);
                return;
            }

            var subscriber = new _Subscriber2.default(this, noticeHandler);
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
                logger.warn('nothing to send to channel ' + this.name);
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
            if (_JS2.default.isUndefined(last_cursor)) {
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
                    logger.error('idx overflow');
                    break;
                }
                list.push(this.events[idx]);
            }

            return list;
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.events = [];
            this.subscribers = [];
            this.cursor = -1;
        }
    }]);

    return Channel;
}();

exports.default = Channel;