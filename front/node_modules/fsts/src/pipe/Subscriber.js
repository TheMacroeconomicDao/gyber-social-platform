import Logger from '../logger';

const logger = new Logger('Subscriber');

export default class Subscriber {
    constructor(channel, noticeHandler) {
        this.channel = channel;
        this.noticeHandler = noticeHandler;
        this.cursor = -1;
    }

    notify() {
        const events = this.channel.poll(this.cursor);
        this.cursor = this.channel.cursor;
        if (events.length > 0) {
            for (var i = 0; i < events.length; i++) {
                this._notifyEvent(events[i]);
            }
        }
    }

    _notifyEvent(event) {
        try {
            return new Promise((resolve, reject) => {
                this.noticeHandler(event, this.channel.name);
                resolve();
            });
        } catch (e) {
            logger.error('notify event error', e, event, this.noticeHandler);
        }
    }
}

