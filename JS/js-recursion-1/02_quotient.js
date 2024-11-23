function quotient(dividend, divisor) {
  if (dividend === 0 || dividend < divisor) {
    return 0;
  }

  return 1 + quotient(dividend - divisor, divisor);
}

function makeMessage(number1, number2, actual, expected) {
  const contextSegment = number1 + " is divided by " + number2;
  const expectationSegment = "\n  Expected Quotient: " + expected;
  const actualSegment = "\n  Actual: " + actual;

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testQuotient(number1, number2, expected) {
  const actual = quotient(number1, number2);
  const isPassed = actual === expected;
  const message = makeMessage(number1, number2, actual, expected);

  console.log(getMark(isPassed) + message);
}

function testInputsAsZeroes() {
  testQuotient(0, 4, 0);
  testQuotient(0, 0, 0);
}

function testInputsAsOnes() {
  testQuotient(1, 1, 1);
  testQuotient(1, 6, 0);
  testQuotient(6, 1, 6);
  testQuotient(8, 1, 8);
}

function testOtherNumbers() {
  testQuotient(6, 3, 2);
  testQuotient(6, 5, 1);
  testQuotient(15, 4, 3);
}

function testAll() {
  testInputsAsOnes();
  testInputsAsZeroes();
  testOtherNumbers();
}

testAll();
