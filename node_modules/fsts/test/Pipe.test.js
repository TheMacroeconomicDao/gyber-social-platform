import assert from 'assert';

import pipe from '../src/pipe';

describe('pipe', function() {
    it('should send event to subscriber', function(done) {
        const item = 'abc';
        pipe.subscribe(function(event) {
            assert.equal(event, item);
            done();
        });
        pipe.send(item);
    });
    it('should send event to new subscriber to catch up', function(done) {
        pipe.clear();
        const item = 'abc';
        pipe.send(item);
        pipe.subscribe(function(event) {
            assert.equal(event, item);
            done();
        });
    });
    it('should send event to subscriber via named channel', function(done) {
        const item = 'abc';
        pipe.subscribe(function(event) {
            assert.equal(event, item);
            done();
        }, 'word');
        pipe.send(item, 'word');
    });
    it('should send event to new subscriber to catch up via named channel', function(done) {
        pipe.clear();
        const item = 'abc';
        pipe.send(item, 'word');
        pipe.subscribe(function(event) {
            assert.equal(event, item);
            done();
        }, 'word');
    });
});
