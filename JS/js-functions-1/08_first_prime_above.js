/*
  Write a function that returns the first prime number above given number
  
  Examples:
    firstPrimeAbove(3) => 5
    firstPrimeAbove(0) => 2
    firstPrimeAbove(15) => 17

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisible(divident, divisor) {
  return divident % divisor === 0;
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let factor = 2; factor < number; factor++) {
    if (isDivisible(number, factor)) {
      return false;
    }
  }

  return true;
}

function firstPrimeAbove(number) {
  let primeCandidate = number + 1;

  while (!isPrime(primeCandidate)) {
    primeCandidate++;
  }

  return primeCandidate;
}

function makeMessage(number, actual, expected) {
  const contextSegment = 'First prime above ' + number + ' is';
  const targetSegment = ' "' + actual + '"';
  const expectationSegment = ' expected "' + expected + '".';

  return contextSegment + targetSegment + expectationSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testFirstPrimeAbove(number, expected) {
  const actual = firstPrimeAbove(number);
  const isPassed = actual === expected;
  const message = makeMessage(number, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testFirstPrimeAbove(3, 5);
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(5, 7);
  testFirstPrimeAbove(15, 17);
  testFirstPrimeAbove(7, 11);
}

testAll();
