/*
  Write a function that returns the nth fibonacci term
  
  Examples:
    nthFibonacciTerm(1) => 0
    nthFibonacciTerm(4) => 2
    nthFibonacciTerm(6) => 5

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function nthFibonacciTerm(number) {
  let nthSeriesTerm = 0;
  let nPlus1SeriesTerm = 1;

  for (let termCounter = 2; termCounter <= number; termCounter++) {
    const nPlus2SeriesTerm = nthSeriesTerm;
    nthSeriesTerm = nPlus1SeriesTerm;
    nPlus1SeriesTerm = nPlus2SeriesTerm + nPlus1SeriesTerm;
  }

  return nthSeriesTerm;
}

function makeMessage(number, actual, expected) {
  const contextSegment = number + ' term in fibonacci series is';
  const targetSegment = ' "' + actual + '"';
  const expectationSegment = ' expected "' + expected + '".';

  return contextSegment + targetSegment + expectationSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testNthFibonacciTerm(number, expected) {
  const actual = nthFibonacciTerm(number);
  const isPassed = actual === expected;
  const message = makeMessage(number, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testNthFibonacciTerm(1, 0);
  testNthFibonacciTerm(4, 2);
  testNthFibonacciTerm(2, 1);
  testNthFibonacciTerm(6, 5);
}

testAll();
