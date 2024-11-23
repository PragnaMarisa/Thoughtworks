function multiply(multiplier, multiplicand) {
  if (multiplicand === 0 || multiplier === 0) {
    return 0;
  }

  return multiplier + multiply(multiplier, multiplicand - 1);
}

function makeMessage(number1, number2, actual, expected) {
  const contextSegment = number1 + ' is multiplied with ' + number2;
  const expectationSegment = "\n  Expected: " + expected;
  const actualSegment = "\n  Actual: " + actual;

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testMultiplication(number1, number2, expected) {
  const actual = multiply(number1, number2);
  const isPassed = actual === expected;
  const message = makeMessage(number1, number2, actual, expected);

  console.log(getMark(isPassed) + message);
}

function testInputsAsZeroes() {
  testMultiplication(0, 9, 0);
  testMultiplication(5, 0, 0);
  testMultiplication(0, 0, 0);
}

function testInputsAsOnes() {
  testMultiplication(3, 1, 3);
  testMultiplication(1, 11, 11);
  testMultiplication(1, 1, 1);
}

function testValidNumbersAsInputs() {
  testMultiplication(9, 2, 18);
  testMultiplication(3, 2, 6);
  testMultiplication(3, 9, 27);
}

function testAll() {
  testValidNumbersAsInputs();
  testInputsAsZeroes();
  testInputsAsOnes();
}

testAll();
