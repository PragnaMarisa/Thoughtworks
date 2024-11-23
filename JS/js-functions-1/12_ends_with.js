/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

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

function endsWith(string, substring) {
  if (substring.length === 0) {
    return true;
  }
  const index = string.length - substring.length;

  return matchesAtPosition(string, substring, index);
}

function makeMessage(string, subString, actual, expected) {
  const contextSegment = 'String "' + string + ' " is ending with "';
  const targetSegment = subString + '" : ' + actual;
  const expectationSegment = ' expected: ' + expected;

  return contextSegment + targetSegment + expectationSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testEndsWith(string, subString, expected) {
  const actual = endsWith(string, subString);
  const isPassed = actual === expected;
  const message = makeMessage(string, subString, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testEndsWith('hell', 'ld', false);
  testEndsWith('hell', 'll', true);
  testEndsWith('she', '', true);
  testEndsWith('', 'cool', false);
  testEndsWith('', '', true);
  testEndsWith('we', 'we', true);
}

testAll();
