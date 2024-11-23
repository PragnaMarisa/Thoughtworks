function getIndexFromLast(string, target, end) {
  if (end === -1) {
    return -1;
  }

  if (string[end] === target) {
    return end;
  }

  return getIndexFromLast(string, target, end - 1);
}

function findLastIndex(string, char) {
  return getIndexFromLast(string, char, string.length - 1);
}

function makeMessage(string, char, actual, expected) {
  const contextSegment = 'Last Index position of "' + char + '" in "' + string;
  const expectationSegment = '"\n  Expected: ' + expected;
  const actualSegment = '\n  Actual: ' + actual;

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testFindLastIndex(string, char, expected) {
  const actual = findLastIndex(string, char);
  const isPassed = actual === expected;
  const message = makeMessage(string, char, actual, expected);

  console.log(getMark(isPassed), message);
}

function testNumbersAsString() {
  testFindLastIndex('737', '7', 2);
  testFindLastIndex('7', '5', -1);
  testFindLastIndex('792', '0', -1);
  testFindLastIndex('22', '2', 1);
  testFindLastIndex('324', '4', 2);
  testFindLastIndex('834', '8', 0);
}

function testStrings() {
  testFindLastIndex('a b ', ' ', 3);
  testFindLastIndex('!super!', '!', 6);
  testFindLastIndex('sheetal', 'e', 3);
  testFindLastIndex('ab', 'a', 0);
  testFindLastIndex('bb', '0', -1);
  testFindLastIndex('bb', 'b', 1);
  testFindLastIndex('w', 'r', -1);
  testFindLastIndex('madam', 'm', 4);
}

function testAll() {
  testNumbersAsString();
  testStrings();
}

testAll();
