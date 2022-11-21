import JS from '../JS';
import Logger from '../logger';

import Subscriber from './Subscriber';

const logger = new Logger('Channel');

const default_options = {
    bufferSize: 128
}

export default class Channel {
    constructor(name, options) {
        this.name = name;

        this._options = Object.assign({}, default_options, options);

        this.clear();
    }

    subscribe(noticeHandler) {
        const found = this.subscribers.filter(subscriber => (
            subscriber.noticeHandler === noticeHandler
        ));
        if (found.length > 0) {
            logger.debug('duplicated subscription on channel ' + this.name, noticeHandler);
            return;
        }

        const subscriber = new Subscriber(this, noticeHandler);
        this.subscribers.push(subscriber);
        subscriber.notify();
    }

    unsubscribe(noticeHandler) {
        this.subscribers = this.subscribers.filter(subscriber => (
            subscriber.noticeHandler !== noticeHandler
        ));
    }

    send(event) {
        if (!event) {
            logger.warn('nothing to send to channel ' + this.name);
        }

        const size = this._options.bufferSize;
        this.cursor++;
        const idx = this.cursor % size;
        if (idx < this.events.length) {
            this.events[idx] = event;
        } else {
            this.events.push(event);
        }

        this.subscribers
            .forEach(subscriber => subscriber.notify());
    }

    poll(last_cursor) {
        if (JS.isUndefined(last_cursor)) { last_cursor = -1; }
        if (last_cursor === this.cursor) { return []; }

        const list = [];
        const size = this._options.bufferSize;
        for (var i = last_cursor+1; i <= this.cursor; i++) {
            const idx = i % size;
            if (idx >= this.events.length) {
                logger.error('idx overflow');
                break;
            }
            list.push(this.events[idx]);
        }

        return list;
    }

    clear() {
        this.events = [];
        this.subscribers = [];
        this.cursor = -1;
    }
}

