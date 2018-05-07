var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should be able to add correctly', function () {
    calculator.previousTotal = 5;
    calculator.add(3);
    assert.equal(calculator.runningTotal, 8)
  });

  it('should be able to subtract', function () {
    calculator.previousTotal = 5;
    calculator.subtract(3);
    assert.equal(calculator.runningTotal, 2);
  });

  it('should be able to multiply', function () {
    calculator.previousTotal = 5;
    calculator.multiply(2);
    assert.equal(calculator.runningTotal, 10);
  });

  it('should be able to divide', function () {
    calculator.previousTotal = 15;
    calculator.divide(3);
    assert.equal(calculator.runningTotal, 5);
  });

  it('should make the running total change when a number is clicked', function () {
    calculator.numberClick(2);
    assert.strictEqual(calculator.runningTotal, 2);
  });

  it('should append the running total when a number is clicked ', function () {
    calculator.numberClick(2);
    calculator.numberClick(4);
    assert.strictEqual(calculator.runningTotal, 24);
  });

  it('should clear the running total if newTotal = true', function () {
    calculator.numberClick(5);
    calculator.newTotal = true;
    calculator.numberClick(4);
    assert.strictEqual(calculator.runningTotal, 4);
  });

  it('should log the operator when clicked ', function () {
    calculator.operatorClick('+');
    assert.strictEqual(calculator.previousOperator, '+');
  });

  it('should clear the operator when clicking equals', function () {
    calculator.operatorClick('+');
    calculator.operatorClick('=');
    assert.strictEqual(calculator.previousOperator, null);
  });

  it('should replace previous total with the running total when equals is clicked ', function () {
    calculator.numberClick(4);
    assert.strictEqual(calculator.previousTotal, 0);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.previousTotal, 4);
  });

  it('should reset flag newTotal = true when equals clicked', function () {
    calculator.numberClick(2);
    assert.strictEqual(calculator.newTotal, false);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.newTotal, true);
  });

  it('should reset runningTotal to 0 when clear is clicked ', function () {
    calculator.runningTotal = 56;
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0)
  });

  it('should reset calculator previous properties to null when clearClick called', function () {
    calculator.previousOperator = '+';
    calculator.previousTotal = 4;
    calculator.clearClick();
    assert.strictEqual(calculator.previousOperator, null);
    assert.strictEqual(calculator.previousTotal, null);
  });



});
