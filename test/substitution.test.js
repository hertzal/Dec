const { substitution } = require('../src/substitution');
const expect = require('chai').expect;

describe('substitution()', () => {
    describe('error handling', () => {
        it('should return false if the substitution alphabet is missing', () => {
            const actual = substitution('thinkful');
            expect(actual).to.be.false;
        });

        it('should return false if the substitution alphabet is not exactly 26 characters', () => {
            const actual = substitution('thinkful', 'short');
            expect(actual).to.be.false;
        });

        it('should return false if the substitution alphabet does not contain unique characters', () => {
            const actual = substitution('thinkful', 'abcabcabcabcabcabcabcabcyz');
            expect(actual).to.be.false;
        });
    });

    describe('encoding a message', () => {
        it('should encode a message by using the given substitution alphabet', () => {
            const actual = substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev');
            const expected = 'jrufscpw';
            expect(actual).to.equal(expected);
        });

        it('should work with any kind of key with unique characters', () => {
            const actual = substitution('message', '$wae&zrdxtfcygvuhbijnokmpl');
            const expected = 'y&ii$r&';
            expect(actual).to.equal(expected);
        });

        it('should preserve spaces', () => {
            const actual = substitution('You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev');
            const expected = 'elp xhm xf mbymwwmfj dne';
            expect(actual).to.equal(expected);
        });
    });

    describe('decoding a message', () => {
        it('should decode a message by using the given substitution alphabet', () => {
            const actual = substitution('jrufscpw', 'xoyqmcgrukswaflnthdjpzibev', false);
            const expected = 'thinkful';
            expect(actual).to.equal(expected);
        });

        it('should work with any kind of key with unique characters', () => {
            const actual = substitution('y&ii$r&', '$wae&zrdxtfcygvuhbijnokmpl', false);
            const expected = 'message';
            expect(actual).to.equal(expected);
        });

        it('should preserve spaces', () => {
            const actual = substitution('elp xhm xf mbymwwmfj dne', 'xoyqmcgrukswaflnthdjpzibev', false);
            const expected = 'you are an excellent spy';
            expect(actual).to.equal(expected);
        });
    });
});
