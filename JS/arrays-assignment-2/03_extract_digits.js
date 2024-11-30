// Give an number extract its digit into array
// Number can positive, negative, floating point.
// extractDigits(123) => [1, 2, 3]
// extractDigits(-123) => [1, 2, 3]
// extractDigits(12.3) => [1, 2, 3]

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

function getDigitsArray(num) {
  const digits = [];

  while (num > 0) {
    const remainder = num % 10;
    num = Math.floor(num / 10);
    digits.unshift(remainder);
  }

  return digits;
}

function extractDigits(number) {
  if (number === 0) {
    return [0];
  }

  let num = Math.abs(number);
  const isDecimal = Math.floor(num) !== num;

  if (isDecimal) {
    num = number * Math.pow(10, Math.floor(Math.log10(number)));
  }

  return getDigitsArray(num);
}

function makeMessage(number, actual, expected) {
  const contextSegment = 'Number: "' + number + '" digits are:';
  const expectationSegment = '\n  Expected: "' + expected;
  const actualSegment = '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testExtractDigits(array, expected) {
  const actual = extractDigits(array);
  const isPassed = areEqual(actual, expected);
  const message = makeMessage(array, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testExtractDigits(12.3, [1, 2, 3]);
  testExtractDigits(54.3, [5, 4, 3]);
  testExtractDigits(-123, [1, 2, 3]);
  testExtractDigits(123, [1, 2, 3]);
  testExtractDigits(223, [2, 2, 3]);
  testExtractDigits(222, [2, 2, 2]);
  testExtractDigits(1, [1]);
  testExtractDigits(100, [1, 0, 0]);
  testExtractDigits(0, [0]);
  console.log();
}

testAll();
