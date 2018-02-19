import { assert } from 'chai';
import sinon from 'sinon';
import FizzBuzz from '../src/fizzbuzz.js';

let sandbox = sinon.sandbox.create();

describe('FizzBuzz', function() {

	beforeEach(function(){

	});

	afterEach(function(){
		sandbox.restore();
	});

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

	describe('FizzBuzz.play', function() {
		it('should call FizzBuzz.prompt exactly once', function() {
			let mock = sinon.mock(FizzBuzz).expects('play').once();
			FizzBuzz.play();
			mock.verify();
			mock.restore();
		});
	});

	describe('FizzBuzz.prompt', function() {
		let promptSubsStub;
		let processStdinStub;

		beforeEach(function(){
			promptSubsStub = sandbox.stub(FizzBuzz, 'promptSubs');
			processStdinStub = sandbox.stub(process, 'openStdin');
		})

		it('should call process.openStdin exactly once', function() {
			FizzBuzz.prompt();
			assert(processStdinStub.calledOnce)
		});

		it('should call FizBuzz.promptSubs exactly once', function() {
			FizzBuzz.prompt();
			assert(promptSubsStub.calledOnce);
		});
	});

	/*
	describe('FizzBuzz.promptSubs', function(){
		let stdIn = {};
		stdIn.addListener = function(){return 1}
		stdIn.removeListener = function(){return 2}
		let consoleLogStub;
		let stdInRemoveListenerStub;
		let stdInAddListenerStub;
		let FizzBuzzPromptNumberStub;
		let FizzBuzzParseSubsStub;

		beforeEach(function(){
			stdInRemoveListenerStub = sandbox.stub(stdIn, 'addListener');
			stdInAddListenerStub = sandbox.stub(stdIn, 'removeListener');
			consoleLogStub = sandbox.stub(console, 'log');
			FizzBuzzPromptNumberStub = sandbox.stub(FizzBuzz, 'promptNumber');
			FizzBuzzParseSubsStub = sandbox.stub(FizzBuzz, 'parseSubs');
		});

		it('should call console.log exactly six times', function(){
			FizzBuzz.promptSubs(stdIn);
			assert.equal(consoleLogStub.callCount, 6);
		});

		it('should call stdIn.removeListener exactly once', function(){
			FizzBuzz.promptSubs(stdIn);
			assert(stdInRemoveListenerStub.calledOnce);
		});

		it('should call stdIn.addListener exactly once', function(){
			FizzBuzz.promptSubs(stdIn);
			assert(stdInAddListenerStub.calledOnce);
		});

		it('should call FizzBuzz.promptNumberSub exactly once', function(){
			FizzBuzz.promptSubs(stdIn);
			assert(FizzBuzzPromptNumberStub.calledOnce);
		});
	});
	*/

});
