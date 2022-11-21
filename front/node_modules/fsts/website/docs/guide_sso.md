---
id: guide_sso
title: Single Sign On
---

Library for social sign in. Encapsulate different providers implementation detail.

* [API](#api)
  - [Methods](#methods)
  - [Options](#options)
* [Provider](#provider)
  - [Google](#google)
  - [Facebook](#facebook)
  - [LinkedIn](#linkedin)

## API

### Methods

Each provider has these methods:

```
    provider.ready();   // returns a Promise, resolves when ready to use,
                        // rejects when error
    provider.check();   // returns a Promise, resolves an user object when success,
                        // rejects when error
    provider.signIn();  // returns a Promise, resolves an user object when success,
                        // rejects when error
    provider.signOut(); // returns a Promise, resolves when success,
                        // rejects when error
```

### Options

Normally for each SSO object just one parameter, client_id/app_id/app_key/etc., is enough.

```
const G = new SSO.Google(google_client_id);
```

In some cases additional infomation may be needed. Construction could take an object instead of string for more options.

For example, set `script` to 'none' to tell not to load SDK js. The SDK is loaded by other code.

```
const options = {
    google_client_id: ...,
    script: ...,
    scope: ...
}
const G = new SSO.Google(options);
```

## Provider

Different provider requires different parameter, and returns different user object. This library does not attempt to unify. Just leave as close to individual provider SDK as possible.

* Google
* Facebook
* LinkedIn

### Google

Parameter: `google_client_id`

User object:
```
    {
        id_token,
        email,
        name
    }
```

Usage
```
import { SSO } from 'fsts';

const G = new SSO.Goolge(google_client_id);

G.ready()
    .then(() => G.check())
    .then(user => console.log(user))
    .catch(err => console.log(err));

G.signIn()
    .then(user => console.log(user))
    .catch(err => console.log(err));

G.signOut()
    .then(() => console.log('out'))
    .catch(err => console.log(err));
```

### Facebook

Parameter: `facebook_app_id`

User object:
```
    {
        accessToken,
        userID,
        name
    }
```

Usage
```
import { SSO } from 'fsts';

const F = new SSO.Facebook(facebook_app_id);

F.ready()
    .then(() => F.check())
    .then(user => console.log(user))
    .catch(err => console.log(err));

F.signIn()
    .then(user => console.log(user))
    .catch(err => console.log(err));

F.signOut()
    .then(() => console.log('out'))
    .catch(err => console.log(err));
```

### LinkedIn

Parameter: `api_key`

User object:
```
    {
        id,
        firstName,
        lastName,
        headline
    }
```

Usage
```
import { SSO } from 'fsts';

const LI = new SSO.LinkedIn(api_key);

LI.ready()
    .then(() => LI.check())
    .then(user => console.log(user))
    .catch(err => console.log(err));

LI.signIn()
    .then(user => console.log(user))
    .catch(err => console.log(err));

LI.signOut()
    .then(() => console.log('out'))
    .catch(err => console.log(err));
```
