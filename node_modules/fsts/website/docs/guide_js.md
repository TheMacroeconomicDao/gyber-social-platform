---
id: guide_js
title: JS
---

A set of Javascript language helpers.

```
import { JS } from 'fsts';
```

## String

```
JS.padNumber(9, 2); // '09'
JS.padNumber(10, 2); // '10'
```

## Object

```
let obj = { a: 'a', b: 'b' };
JS.lessProps(obj, 'b'); // obj: { a: 'a' }

obj = { a: 'a', b: 'b', ba: 'ba' };
JS.lessProps(obj, 'b.*'); // obj: { a: 'a' }

obj = { a: 'a', b: 'b', c: { a: 'ca', b: 'cb' } };
JS.travaseProps(obj, (path, key, val) => {
    console.log(path, key, val);
});
// [] 'a' 'a'
// [] 'b' 'b'
// ['c'] 'a' 'ca'
// ['c'] 'b' 'cb'
```

## Array

```
JS.isArray('str'); // false
JS.isArray({}); // false
JS.isArray([]); // true

JS.sureArray('str'); // ['str']
JS.sureArray(); // []
JS.sureArray([1, 2]); // [1, 2]

JS.appendUnique([1, 2], [1]); // [1, 2]
JS.appendUnique([1, 2], [3]); // [1, 2, 3]
```
