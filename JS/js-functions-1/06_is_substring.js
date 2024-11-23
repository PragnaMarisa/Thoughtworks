/*
  Implement the below function that tells if a string is substring of another
  string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isStringValid(string, subString) {
  return string.length !== 0 && subString.length <= string.length;
}

function matchesAtPosition(string, substring, position) {
  for (let index = 0; index < substring.length; index++) {
    if (string[position + index] !== substring[index]) {
      return false;
    }
  }

  return true;
}

function isSubstring(string, subString) {
  if (!isStringValid(string, subString) || subString.length === 0) {
    return false;
  }

  for (let index = 0; index < string.length; index++) {
    if (matchesAtPosition(string, subString, index)) {
      return true;
    }
  }

  return false;
}

function makeMessage(string, substring, actual, expected) {
  const contextSegment = 'Is this subString "' + substring + ' " present in ';
  const targetSegment = 'this String "' + string + '" ' + actual;
  const expectationSegment = ' expected ' + expected + '.';

  return contextSegment + targetSegment + expectationSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testIsSubstring(string, substring, expected) {
  const actual = isSubstring(string, substring);
  const isPassed = actual === expected;
  const message = makeMessage(string, substring, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testIsSubstring('aaab', 'aab', true);
  testIsSubstring('hello world', 'worl', true);
  testIsSubstring('hello world', 'word', false);
  testIsSubstring('not found', 'nnn', false);
  testIsSubstring('', 'nnn', false);
  testIsSubstring('ab', 'ab', true);
  testIsSubstring('a', 'ab', false);
  testIsSubstring('repeating iiiiiiii', 'iii', true);
  testIsSubstring('repeating iiiiiiii', '', false);
  testIsSubstring('', '', false);
}

testAll();
