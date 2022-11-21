import assert from 'assert';
import sinon from 'sinon';

import JS from '../src/JS';

describe('JS', function() {
    describe('padNumber', function() {
        it('should pad one zero to 9', function(done) {
            assert.equal(JS.padNumber(9, 2), '09');
            done();
        });
        it('should pad one zero to 0', function(done) {
            assert.equal(JS.padNumber(0, 2), '00');
            done();
        });
        it('should pad nothing to 10', function(done) {
            assert.equal(JS.padNumber(10, 2), '10');
            done();
        });
        it('should pad nothing to -1', function(done) {
            assert.equal(JS.padNumber(-1, 2), '-1');
            done();
        });
    });

    describe('format', function() {
      it('should replace {0} to foo', function(done) {
        const dest = JS.format('abc{0}', 'foo');
        assert.equal(dest, 'abcfoo');
        done();
      });
    });

    describe('thisSunday', function() {
      it('should return June 24th, 2018 for this Sunday of June 29, 2018', function(done) {
        const stub_today = sinon.stub(JS, 'today').returns(new Date('2018-06-29 00:00:00').getTime());
        const ts = JS.thisSunday();
        const dt = new Date(ts);
        assert.equal(dt.getFullYear(), 2018);
        assert.equal(dt.getMonth(), 5);
        assert.equal(dt.getDate(), 24);
        stub_today.restore();
        done();
      });
    });

    describe('nextSunday', function() {
      it('should return July 1st, 2018 for next Sunday of June 29, 2018', function(done) {
        const stub_today = sinon.stub(JS, 'today').returns(new Date('2018-06-29 00:00:00').getTime());
        const ts = JS.nextSunday();
        const dt = new Date(ts);
        assert.equal(dt.getFullYear(), 2018);
        assert.equal(dt.getMonth(), 6);
        assert.equal(dt.getDate(), 1);
        stub_today.restore();
        done();
      });
    });

    describe('nextMonth', function() {
      it('should return July 1st, 2018 for next month of June 29, 2018', function(done) {
        const stub_today = sinon.stub(JS, 'today').returns(new Date('2018-06-29 00:00:00').getTime());
        const ts = JS.nextMonth();
        const dt = new Date(ts);
        assert.equal(dt.getFullYear(), 2018);
        assert.equal(dt.getMonth(), 6);
        assert.equal(dt.getDate(), 1);
        stub_today.restore();
        done();
      });
      it('should return January 1st, 2019 for next 7 month of June 29, 2018', function(done) {
        const stub_today = sinon.stub(JS, 'today').returns(new Date('2018-06-29 00:00:00'));
        const ts = JS.nextMonth(7);
        const dt = new Date(ts);
        assert.equal(dt.getFullYear(), 2019);
        assert.equal(dt.getMonth(), 0);
        assert.equal(dt.getDate(), 1);
        stub_today.restore();
        done();
      });
    });

    describe('styleToCss', function() {
        it('should convert fontSize to font-size', function(done) {
            const css = JS.styleToCss({ fontSize: '12px' });
            assert.equal(css, '{font-size:12px}');
            done();
        });
        it('should convert multiple attributes', function(done) {
            const css = JS.styleToCss({ fontSize: '12px', fontWeight: 100 });
            assert.equal(css, '{font-size:12px;font-weight:100}');
            done();
        });
    });

    describe('isNumber', function() {
        it('should 0 is number', function(done) {
            assert.equal(JS.isNumber('0'), true);
            done();
        });
        it('should 10 is number', function(done) {
            assert.equal(JS.isNumber('10'), true);
            done();
        });
        it('should empty string is not number', function(done) {
            assert.equal(JS.isNumber(''), false);
            done();
        });
    });
});
