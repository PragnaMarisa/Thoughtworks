/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisible(divident, divisor) {
  return divident % divisor === 0;
}

function fizzBuzz(number) {
  if (isDivisible(number, 15)) {
    return "fizzbuzz";
  }

  if (isDivisible(number, 3)) {
    return 'fizz';
  }

  return isDivisible(number, 5) ? 'buzz' : '' + number;
}

function makeMessage(number, actual, expected) {
  const contextSegment = 'Number ' + number + ' is';
  const targetSegment = ' "' + actual + '"';
  const expectationSegment = ' expected "' + expected + '".';

  return contextSegment + targetSegment + expectationSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testFizzBuzz(number, expected) {
  const actual = fizzBuzz(number);
  const isPassed = actual === expected;
  const message = makeMessage(number, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testFizzBuzz(3, 'fizz');
  testFizzBuzz(0, 'fizzbuzz');
  testFizzBuzz(5, 'buzz');
  testFizzBuzz(15, 'fizzbuzz');
  testFizzBuzz(7, '7');
}

testAll();
