function getStringToNumber(string, start) {
  if (string.length === start) {
    return 0;
  }

  const term = string[start] * 10 ** (string.length - start - 1);
  return term + getStringToNumber(string, start + 1);
}

function stringToNumber(string) {
  let sign = 1;
  let startIndex = 0;

  if (string[0] === '-') {
    sign = -1;
    startIndex = 1;
  }

  return sign * getStringToNumber(string, startIndex);
}

function makeMessage(string, actual, expected) {
  const contextSegment = 'String "' + string + '" converted to number';
  const expectationSegment = '\n  Expected: ' + expected;
  const actualSegment = "\n  Actual: " + actual;

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testStringToNumber(string, expected) {
  const actual = stringToNumber(string);
  const isPassed = actual === expected;
  const message = makeMessage(string, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testStringToNumber('0', 0);

  testStringToNumber('7', 7);
  testStringToNumber('-3', -3);

  testStringToNumber('-10', -10);
  testStringToNumber('-456', -456);

  testStringToNumber('10', 10);
  testStringToNumber('456', 456);
}

testAll();
