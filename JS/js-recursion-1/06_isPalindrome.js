function isSymmetric(palindromeCandidate, start, end) {
  if (start >= end) {
    return true;
  }

  if (palindromeCandidate[start] !== palindromeCandidate[end]) {
    return false;
  }

  return isSymmetric(palindromeCandidate, start + 1, end - 1);
}

function isPalindrome(palindromeCandidate) {
  if (palindromeCandidate.length < 2) {
    return true;
  }
  return isSymmetric(palindromeCandidate, 0, palindromeCandidate.length - 1);
}

function makeMessage(string, actual, expected) {
  const contextSegment = 'Is "' + string + '" a pallindrome?';
  const expectationSegment = "\n  Expected: " + expected;
  const actualSegment = "\n  Actual: " + actual;

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testIsPallindrome(string, expected) {
  const actual = isPalindrome(string);
  const isPassed = actual === expected;
  const message = makeMessage(string, actual, expected);

  console.log(getMark(isPassed), message);
}

function testNumbersAsString() {
  testIsPallindrome('737', true);
  testIsPallindrome('7', true);
  testIsPallindrome('', true);
  testIsPallindrome('22', true);
  testIsPallindrome('010', true);
  testIsPallindrome('324', false);
  testIsPallindrome('834', false);
}

function testStrings() {
  testIsPallindrome('', true);
  testIsPallindrome('sheetal', false);
  testIsPallindrome('ab', false);
  testIsPallindrome('bb', true);
  testIsPallindrome('w', true);
  testIsPallindrome('madam', true);

}

function testAll() {
  testNumbersAsString();
  testStrings();
}

testAll();
