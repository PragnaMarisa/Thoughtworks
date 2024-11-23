function getIndexFromStart(string, target, start) {
  if (start === string.length) {
    return -1;
  }

  if (string[start] === target) {
    return start;
  }

  return getIndexFromStart(string, target, start + 1);
}

function findIndex(string, char) {
  return getIndexFromStart(string, char, 0);
}

function makeMessage(string, char, actual, expected) {
  const contextSegment = 'First Index position of "' + char + '" in "' + string;
  const expectationSegment = '"\n  Expected: ' + expected;
  const actualSegment = '\n  Actual: ' + actual;

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testFindIndex(string, char, expected) {
  const actual = findIndex(string, char);
  const isPassed = actual === expected;
  const message = makeMessage(string, char, actual, expected);

  console.log(getMark(isPassed), message);
}

function testNumbersAsString() {
  testFindIndex('737', '3', 1);
  testFindIndex('7', '5', -1);
  testFindIndex('792', '0', -1);
  testFindIndex('22', '2', 0);
  testFindIndex('324', '4', 2);
  testFindIndex('834', '8', 0);
}

function testStrings() {
  testFindIndex('a b', ' ', 1);
  testFindIndex('super!', '!', 5);
  testFindIndex('sheetal', 'e', 2);
  testFindIndex('ab', 'a', 0);
  testFindIndex('bb', '0', -1);
  testFindIndex('w', 'r', -1);
  testFindIndex('madam', 'q', -1);
}

function testAll() {
  testNumbersAsString();
  testStrings();
}

testAll();
