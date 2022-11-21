---
id: guide_logger
title: Logger
---

Javascript developers like to write `console.log`, then cleanup, then write more, then cleanup ...

Java developers don't write a lot `System.out.println`. Developers have Logger.

Use Logger in your project. Use this one, or write your own. No more console.log please.

## Create a Logger

```
import { Logger } from 'fsts';

const logger = new Logger('MyClass');

export default class MyClass {
    constructor() {
        logger.info('instance created');
    }

    doSomething() {
        somePromise()
            .then(data => logger.debug('some promise data', data))
            .catch(err => logger.error('some promise error', err));
    }
}
```

## Log Level

Logger has level, by default it is 'WARN', so your `.info` and `.debug` would not write anything to conole. Set LOG_LEVEL to see debug logs in development mode.

```
Logger.LOG_LEVEL = 'DEBUG';
```

Or during debug, write `window.LOG_LEVEL = 'DEBUG'` in your console.

Log Levels:

* ERROR
* WARN
* INFO
* DEBUG
* VERBOSE
