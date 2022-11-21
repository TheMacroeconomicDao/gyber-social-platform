'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _Channel = require('./Channel');

var _Channel2 = _interopRequireDefault(_Channel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = new _logger2.default('Pipe');

var default_options = {
    bufferSize: 128
};

var CHANNEL_BROADCAST = '_broadcast_';

var Pipe = function () {
    function Pipe(name, options) {
        _classCallCheck(this, Pipe);

        this.name = name;
        this._options = Object.assign({}, default_options, options);

        this.channels = {};
    }

    _createClass(Pipe, [{
        key: 'send',
        value: function send(event, channel_name) {
            if (!channel_name) {
                channel_name = event.channel;
            }
            if (!channel_name) {
                channel_name = CHANNEL_BROADCAST;
            }
            var channel = this._getChannel(channel_name);

            channel.send(event);
        }
    }, {
        key: 'subscribe',
        value: function subscribe(noticeHandler, channel_name) {
            var _this = this;

            if (!channel_name) {
                channel_name = CHANNEL_BROADCAST;
            }
            var names = [].concat(channel_name);
            names.forEach(function (name) {
                var channel = _this._getChannel(name);
                channel.subscribe(noticeHandler);
            });
        }
    }, {
        key: 'clear',
        value: function clear() {
            var _this2 = this;

            Object.keys(this.channels).map(function (name) {
                return _this2.channels[name];
            }).forEach(function (channel) {
                return channel.clear();
            });
        }
    }, {
        key: '_getChannel',
        value: function _getChannel(name) {
            if (!name) {
                return null;
            }
            var channel = this.channels[name];
            if (!channel) {
                channel = new _Channel2.default(name);
                this.channels[name] = channel;
            }
            return channel;
        }
    }]);

    return Pipe;
}();

exports.default = Pipe;