'use strict';

function addd (x,y) {
    return x+ y;
}
 
var adder = function(a,b) {
  var c;
  c = a + b;
  return c;
};
 
////////////
/**
 * Calculator function constructor.
 * @constructor
 */
function Calculator() {
    this.total = 0;
  }
  
  /**
   * Adds value to current total.
   *
   * @param {number} number
   * @returns {*}
   */
  Calculator.prototype.add = function (number) {
    return this.total += number;
  };
  
  /**
   * Subtracts number from current total.
   *
   * @param {number} number
   * @returns {*}
   */
  Calculator.prototype.subtract = function (number) {
    return this.total -= number;
  };
  
  /**
   * Multiplies value to current total.
   *
   * @param {number} number
   * @returns {*}
   */
  Calculator.prototype.multiply = function (number) {
    return this.total *= number;
  };
  
  /**
   * Divides value to current total.
   *
   * @param {number} number
   * @returns {*}
   */
  Calculator.prototype.divide = function (number) {
    if (number === 0) {
      throw new Error('Cannot divide by zero');
    }
  
    return this.total /= number;
  };
  
  /////////
  
module.exports({addd, adder, Calculator});