'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = new _logger2.default('Subscriber');

var Subscriber = function () {
    function Subscriber(channel, noticeHandler) {
        _classCallCheck(this, Subscriber);

        this.channel = channel;
        this.noticeHandler = noticeHandler;
        this.cursor = -1;
    }

    _createClass(Subscriber, [{
        key: 'notify',
        value: function notify() {
            var events = this.channel.poll(this.cursor);
            this.cursor = this.channel.cursor;
            if (events.length > 0) {
                for (var i = 0; i < events.length; i++) {
                    this._notifyEvent(events[i]);
                }
            }
        }
    }, {
        key: '_notifyEvent',
        value: function _notifyEvent(event) {
            var _this = this;

            try {
                return new Promise(function (resolve, reject) {
                    _this.noticeHandler(event, _this.channel.name);
                    resolve();
                });
            } catch (e) {
                logger.error('notify event error', e, event, this.noticeHandler);
            }
        }
    }]);

    return Subscriber;
}();

exports.default = Subscriber;