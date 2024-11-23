function nthFibonacciTerm(nthTerm) {
  if (nthTerm < 3) {
    return nthTerm === 0 ? 0 : (nthTerm + 1) % 2;
  }

  return nthFibonacciTerm(nthTerm - 1) + nthFibonacciTerm(nthTerm - 2);
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
  testNthFibonacciTerm(0, 0);
  testNthFibonacciTerm(1, 0);
  testNthFibonacciTerm(2, 1);
  testNthFibonacciTerm(3, 1);
  testNthFibonacciTerm(4, 2);
  testNthFibonacciTerm(5, 3);
  testNthFibonacciTerm(6, 5);
  testNthFibonacciTerm(7, 8);
  testNthFibonacciTerm(8, 13);
}

testAll();
