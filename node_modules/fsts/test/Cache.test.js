import assert from 'assert';

import Cache from '../src/cache';

describe('Cache', function() {
    it('should cache string', function(done) {
        const item = 'abc';
        Cache.set('key', item);
        const cached = Cache.get('key');
        assert.equal(item, cached);
        done();
    });
    it('should cache object', function(done) {
        const item = {'a': 'a', 'b': 'b'};
        Cache.set('key', item);
        const cached = Cache.get('key');
        assert.ok(typeof cached === 'object');
        assert.equal(JSON.stringify(item), JSON.stringify(cached));
        done();
    });
    it('should cache array', function(done) {
        const item = [1, 2, 3];
        Cache.set('key', item);
        const cached = Cache.get('key');
        assert.ok(typeof cached === 'object');
        assert.equal(cached.length, 3);
        assert.equal(cached[0], 1);
        assert.equal(cached[1], 2);
        assert.equal(cached[2], 3);
        done();
    });
});
