
// Write a function that gives first n elements of fibonacci in an array
// fibonacci(5) => [0, 1, 1, 2, 3]
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

function fibonacci(nthTerm) {
  const fibonacciTerms = [];
  const fiboTerms = [0, 1];
  
  for (let index = 0; index < nthTerm; index++) {
    fibonacciTerms[fibonacciTerms.length] = fiboTerms[index];
    fiboTerms[index + 2] = fiboTerms[index] + fiboTerms[index + 1];
  }

  return fibonacciTerms;
}

function makeMessage(nthTerm, actual, expected) {
  const contextSegment = 'Fibonacci of ' + nthTerm + ' terms is:';
  const expectationSegment = '\n  Expected: "' + expected;
  const actualSegment = '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testFibonacci(nthTerm, expected) {
  const actual = fibonacci(nthTerm);
  const isPassed = areEqual(actual, expected);
  const message = makeMessage(nthTerm, actual, expected);

  console.log(getMark(isPassed), message);
}

function testNumbers() {
  testFibonacci(6, [0, 1, 1, 2, 3, 5]);
  testFibonacci(5, [0, 1, 1, 2, 3]);
  testFibonacci(4, [0, 1, 1, 2]);
  testFibonacci(3, [0, 1, 1]);
  testFibonacci(2, [0, 1]);
  testFibonacci(1, [0]);
  testFibonacci(0, []);
  console.log();
}

function testAll() {
  testNumbers();
}

testAll();
