/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function matchesAtPosition(string, substring, position) {
  for (let index = 0; index < substring.length; index++) {
    if (string[position + index] !== substring[index]) {
      return false;
    }
  }

  return true;
}

function isStringValid(string, subString) {
  return string.length !== 0 && subString.length <= string.length;
}

function occurrences(string, substring) {
  let countOfSubStrings = 0;

  if (!isStringValid(string, substring) || substring.length === 0) {
    return countOfSubStrings;
  }

  for (let index = 0; index < string.length; index++) {
    countOfSubStrings += matchesAtPosition(string, substring, index) ? 1 : 0;
  }

  return countOfSubStrings;
}

function makeMessage(string, subString, actual, expected) {
  const contextSegment = 'This subString "' + subString + ' " is occuring ';
  const targetSegment = actual + 'times in this String "' + string + '" ';
  const expectationSegment = 'expected ' + expected + 'times.';

  return contextSegment + targetSegment + expectationSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testSubstringCount(string, subString, expected) {
  const actual = occurrences(string, subString);
  const isPassed = actual === expected;
  const message = makeMessage(string, subString, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testSubstringCount('hell', 'l', 2);
  testSubstringCount('hell', 'll', 1);
  testSubstringCount('she', 'll', 0);

  testSubstringCount('she', '', 0);
  testSubstringCount('', '', 0);
}

testAll();
