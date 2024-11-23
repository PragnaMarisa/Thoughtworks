function isStringValid(string, subString) {
  return string.length !== 0 && subString.length <= string.length;
}

function matchesAtPosition(string, substring, position, subIndex) {

  if (subIndex === substring.length) {
    return true;
  }

  if (string[position + subIndex] !== substring[subIndex]) {
    return false;
  }

  return matchesAtPosition(string, substring, position, subIndex + 1);
}

function getIsSubStringFound(string, otherString, start) {
  if (start === string.length) {
    return false;
  }

  if (matchesAtPosition(string, otherString, start, 0)) {
    return true;
  }

  return getIsSubStringFound(string, otherString, start + 1);
}

function isSubString(string, otherString) {
  if (!isStringValid(string, otherString) || otherString.length === 0) {
    return false;
  }

  return getIsSubStringFound(string, otherString, 0);
}

function makeMessage(string, otherString, actual, expected) {
  const contextSegment = 'Is "' + otherString + '" a subString of "' + string;
  const expectationSegment = '"\n  Expected: ' + expected;
  const actualSegment = '\n  Actual: ' + actual;

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testIsSubString(string, otherString, expected) {
  const actual = isSubString(string, otherString);
  const isPassed = actual === expected;
  const message = makeMessage(string, otherString, actual, expected);

  console.log(getMark(isPassed), message);
}

function testNumbersAsStrings() {
  testIsSubString('2942', '42', true);
  testIsSubString('9026', '90', true);
  testIsSubString('9026', '8', false);
  testIsSubString('88', '90', false);
}

function testStrings() {
  testIsSubString('sheetal', 'hee', true);
  testIsSubString('sheetal', '', false);
  testIsSubString('', 'surendra', false);
  testIsSubString('', '', false);
  testIsSubString('damini', 'damini sri', false);
  testIsSubString('damime', 'me', true);
}

function testAll() {
  testStrings();
  testNumbersAsStrings();
}

testAll();
