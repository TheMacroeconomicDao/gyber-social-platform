---
id: guide_pipe
title: Pipe
---

Message queue is an effective way to decouple building blocks. Pipe builds a pub-sub system which provides message queues via `channel`.

## Channel

* One channel represent on message queue
* Consumers subscribe/unsubscribe a channel, and got notified from the channel
* Producers send event to a channel
* If not specified, default channel is '_broadcast_'

## Pub-Sub

```
import { pipe } from 'fsts';

const authEventHandler = (event) => {
    console.log('auth event: ' + event.data.action);
}

pipe.subscribe(authEventHandler, 'auth'); // auth channel

const event = {
    action: 'signIn',
    data: { username: 'foo' }
}
pipe.send(event, 'auth');

// console:
// auth event: signIn
```

### Subscribe Multiple Channels

One handler can subscribe multiple channels

```
const pipeEventHandler = (event, channel) => {
    if (channel === 'auth') {
        ...
    } else if (channel === 'shopping') {
        ...
    }
}

pipe.subscribe(pipeEventHandler, ['auth', 'shopping']);
```

### Buffered Channel

Channels are buffered. Which means subscriber can catch up if subscribe after event sent.

```
import { pipe } from 'fsts';

let event = {
    action: 'signIn',
    data: { username: 'foo' }
}
pipe.send(event, 'auth);

let event = {
    action: 'signOut',
    data: { username: 'foo' }
}
pipe.send(event, 'auth);

const authEventHandler = (event) => {
    console.log('auth event: ' + event.data.action);
}

pipe.subscribe(authEventHandler, 'auth');

// console:
// auth event: signIn
// auth event: signOut
```
