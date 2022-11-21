---
id: guide_cache
title: Cache
---

Cache make use of `window.localStorage`. If not available then create in-memory cache.

## In-n-Out

LocalStorage from browser only stores string. This library does `JSON.stringify` and `JSON.parse` when set / get objects. So it is able to cache objects and array. At the same time provide some level of immutability.

```
import { Cache } from 'fsts';

const item = 'hello';
Cache.set('key', item);
Cache.get('key'); // 'hello'

const item = { greeting: 'hello' };
Cache.set('key', item);
Cache.get('key'); // { greeting: 'hello' }

const item = ['hello', 'there'];
Cache.set('key', item);
Cache.get('key'); // ['hello', 'there']
```
