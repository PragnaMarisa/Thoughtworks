// Write a function that gives first n elements of fibonacci in reverse order
// fibonacci(5) => [3, 2, 1, 1, 0]
// do not modify input parameters

function areArraysEqual(array1, array2, index) {
  if (index === array1.length) {
    return true;
  }

  if (array1[index] !== array2[index]) {
    return false;
  }

  return areArraysEqual(array1, array2, index + 1);
}

function areEqual(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  return areArraysEqual(array1, array2, 0);
}

function reverse(array) {
  const reversedArray = [];

  for (let index = array.length - 1; index >= 0; index -= 1) {
    reversedArray[reversedArray.length] = array[index];
  }

  return reversedArray;
}

function reverseFibonacci(nthTerm) {
  const fibonacciTerms = [];
  const fiboTerms = [0, 1];

  for (let index = 0; index < nthTerm; index++) {
    fibonacciTerms[fibonacciTerms.length] = fiboTerms[index];
    fiboTerms[index + 2] = fiboTerms[index] + fiboTerms[index + 1];
  }

  return reverse(fibonacciTerms);
}

function makeMessage(nthTerm, actual, expected) {
  const contextSegment = 'Reverse Fibonacci of ' + nthTerm + ' terms is:';
  const expectationSegment = '\n  Expected: "' + expected;
  const actualSegment = '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testReverseFibonacci(nthTerm, expected) {
  const actual = reverseFibonacci(nthTerm);
  const isPassed = areEqual(actual, expected);
  const message = makeMessage(nthTerm, actual, expected);

  console.log(getMark(isPassed), message);
}

function testNumbers() {
  testReverseFibonacci(6, [5, 3, 2, 1, 1, 0]);
  testReverseFibonacci(5, [3, 2, 1, 1, 0]);
  testReverseFibonacci(4, [2, 1, 1, 0]);
  testReverseFibonacci(3, [1, 1, 0]);
  testReverseFibonacci(2, [1, 0]);
  testReverseFibonacci(1, [0]);
  testReverseFibonacci(0, []);
  console.log();
}

function testAll() {
  testNumbers();
}

testAll();
