import { assert } from 'chai';
import FizzBuzz from '../src/fizzbuzz.js';

describe('FizzBuzz', function() {

	describe('normal numbers', function() {
		it('should return same number', function() {
			assert.equal('11', FizzBuzz.calculate(11));
			assert.equal('23', FizzBuzz.calculate(23));
		});
	});

	describe('the number 0', function() {
		it('should return 0', function() {
			assert.equal('0', FizzBuzz.calculate(0));
		});
	});

	describe('multiples of three', function() {
		it('should return Fizz', function() {
			assert.equal('Fizz', FizzBuzz.calculate('3'));
			assert.equal('Fizz', FizzBuzz.calculate('6'));
			assert.equal('Fizz', FizzBuzz.calculate('-3'));
			assert.equal('Fizz', FizzBuzz.calculate('-6'));
			assert.equal('Fizz', FizzBuzz.calculate('3.0'));
			assert.equal('Fizz', FizzBuzz.calculate('6.00'));
		});
	});

	describe('multiples of five', function() {
		it('should return Buzz', function() {
			assert.equal('Buzz', FizzBuzz.calculate('5'));
			assert.equal('Buzz', FizzBuzz.calculate('20'));
		});
	});

	describe('multiples of three and five', function() {
		it('should return Fizz Buzz', function() {
			assert.equal('Fizz Buzz', FizzBuzz.calculate('15'));
		});
	});

	describe('multiples of seven', function() {
		it('should return Pop', function() {
			assert.equal('Pop', FizzBuzz.calculate('7'));
			assert.equal('Pop', FizzBuzz.calculate('14'));
		});
	});

	describe('multiples of three and seven', function() {
		it('should return Fizz Pop', function() {
			assert.equal('Fizz Pop', FizzBuzz.calculate('21'));
			assert.equal('Fizz Pop', FizzBuzz.calculate('42'));
		});
	});

	describe('multiples of five and seven', function() {
		it('should return Buzz Pop', function() {
			assert.equal('Buzz Pop', FizzBuzz.calculate('35'));
			assert.equal('Buzz Pop', FizzBuzz.calculate('70'));
		});
	});

	describe('multiples of three, five, and seven', function() {
		it('should return Fizz Buzz Pop', function() {
			assert.equal('Fizz Buzz Pop', FizzBuzz.calculate('105'));
		});
	});

	describe('negative numbers', function() {
		it('should count as multiples', function() {
			assert.equal('Fizz Buzz Pop', FizzBuzz.calculate('-105'));
		});
	});

	/* Not implemented 
	describe('decimal points', function() {
		it('should count as multiples', function() {
			assert.equal('hello world', FizzBuzz.calculate('2.5', [['5', 'hello'], ['.5', 'world']]));
			assert.equal('hello world', FizzBuzz.calculate('.15', [['.3', 'hello'], ['.5', 'world']]));
		});
	});
	*/

	describe('substitutions', function() {
		it('should overwrite original values', function() {
			assert.equal('hello', FizzBuzz.calculate('15', [['3', 'hello'], ['4', 'world']]));
			assert.equal('world', FizzBuzz.calculate('16', [['3', 'hello'], ['4', 'world']]));
			assert.equal('hello world', FizzBuzz.calculate('24', [['3', 'hello'], ['4', 'world']]));
		});
	});

	describe('floats numbers', function() {
		it('should count as multiples', function() {
			assert.equal('Fizz Buzz Pop', FizzBuzz.calculate('105.0000'));
		});
	});
});