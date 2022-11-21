export default class Url {
    static params(url) {
        let parts = url.split('?');
        if (parts.length < 2) { return {}; }

        parts = parts[1].split('#')[0].split('&');
        let obj = {};
        parts.forEach(part => {
            const n_v = part.split('=');
            const name = n_v[0];
            const value = n_v.length > 1? n_v.slice(1).join('') : '';
            obj[name] = decodeURIComponent(value);
        });

        return obj;
    }

    static join() {
        if (arguments.length === 0) { return '/'; }

        let url = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (!url.endsWith('/')) { url = url + '/'; }
            url += arguments[i];
        }

        return url;
    }
}
