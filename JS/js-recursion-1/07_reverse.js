function getReversedString(string, stringLength) {
  if (stringLength <= 0) {
    return '';
  }

  return string[stringLength - 1] + getReversedString(string, stringLength - 1);
}

function reverse(string) {
  return getReversedString(string, string.length);
}

function makeMessage(string, actual, expected) {
  const contextSegment = 'Reverse Of  "' + string + '" is';
  const expectationSegment = "\n  Expected: " + expected;
  const actualSegment = "\n  Actual: " + actual;

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testReverse(string, expected) {
  const actual = reverse(string);
  const isPassed = actual === expected;
  const message = makeMessage(string, actual, expected);

  console.log(getMark(isPassed), message);
}

function testNumbersAsString() {
  testReverse('737', '737');
  testReverse('7', '7');
  testReverse('', '');
  testReverse('22', '22');
  testReverse('42', '24');
  testReverse('0102', '2010');
  testReverse('324', '423');
  testReverse('834', '438');
}

function testStrings() {
  testReverse('', '');
  testReverse('sheetal', 'lateehs');
  testReverse('ab', 'ba');
  testReverse('bb', 'bb');
  testReverse('w', 'w');
  testReverse('madam', 'madam');
  testReverse('retniop', 'pointer');
}

function testAll() {
  testNumbersAsString();
  testStrings();
}

testAll();
