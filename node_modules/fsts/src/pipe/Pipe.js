import Logger from '../logger';
import Channel from './Channel';

const logger = new Logger('Pipe');

const default_options = {
    bufferSize: 128
}

const CHANNEL_BROADCAST = '_broadcast_';

export default class Pipe {
    constructor(name, options) {
        this.name = name;
        this._options = Object.assign({}, default_options, options);

        this.channels = {};
    }

    send(event, channel_name) {
        if (!channel_name) { channel_name = event.channel; }
        if (!channel_name) { channel_name = CHANNEL_BROADCAST; }
        const channel = this._getChannel(channel_name);

        channel.send(event);
    }

    subscribe(noticeHandler, channel_name) {
        if (!channel_name) { channel_name = CHANNEL_BROADCAST; }
        const names = [].concat(channel_name);
        names.forEach(name => {
            const channel = this._getChannel(name);
            channel.subscribe(noticeHandler);
        });
    }

    clear() {
        Object.keys(this.channels)
            .map(name => this.channels[name])
            .forEach(channel => channel.clear());
    }

    _getChannel(name) {
        if (!name) { return null; }
        let channel = this.channels[name];
        if (!channel) {
            channel = new Channel(name);
            this.channels[name] = channel;
        }
        return channel;
    }
}
