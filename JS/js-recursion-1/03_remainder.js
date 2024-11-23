function remainder(dividend, divisor) {
  if (dividend === 0 || dividend < divisor) {
    return dividend ? dividend : 0;
  }

  return remainder(dividend - divisor, divisor);
}

function makeMessage(number1, number2, actual, expected) {
  const contextSegment = number1 + " is divided by " + number2;
  const expectationSegment = "\n  Expected Remainder: " + expected;
  const actualSegment = "\n  Actual: " + actual;

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testRemainder(number1, number2, expected) {
  const actual = remainder(number1, number2);
  const isPassed = actual === expected;
  const message = makeMessage(number1, number2, actual, expected);

  console.log(getMark(isPassed) + message);
}

function testInputsAsZeroes() {
  testRemainder(0, 4, 0);
  testRemainder(0, 0, 0);
}

function testInputsAsOnes() {
  testRemainder(1, 1, 0);
  testRemainder(8, 1, 0);
  testRemainder(1, 8, 1);
}

function testOtherNumbers() {
  testRemainder(6, 3, 0);
  testRemainder(6, 5, 1);
  testRemainder(15, 4, 3);
  testRemainder(6, 4, 2);
}

function testAll() {
  testInputsAsOnes();
  testInputsAsZeroes();
  testOtherNumbers();
}

testAll();
