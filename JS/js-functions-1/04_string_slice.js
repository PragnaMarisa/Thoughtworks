/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function maximumOf2(number1, number2) {
  return number1 < number2 ? number2 : number1;
}

function minimumOf2(number1, number2) {
  return number1 < number2 ? number1 : number2;
}

function matchesAtPosition(string, substring, position) {
  for (let index = 0; index < substring.length; index++) {
    if (string[position + index] !== substring[index]) {
      return false;
    }
  }

  return true;
}

function createSubString(string, start, end) {
  let subString = '';
  for (let index = start; index <= end; index++) {
    subString += string[index];
  }

  return subString;
}

function slice(text, start, end) {
  const startIndex = maximumOf2(0, start);
  const endIndex = minimumOf2(end, text.length - 1);
  const slicedString = createSubString(text, startIndex, endIndex);

  return slicedString;
}

function makeMessage(text, start, end, actual, expected) {
  const contextSegment = 'In this text"' + text + '" string is sliced from ';
  const targetSegment = 'index  "' + start + '" to "' + end + '" expected: "';
  const expectationSegment = expected + '" result is "' + actual + '".';

  return contextSegment + targetSegment + expectationSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testStringSlice(text, start, end, expected) {
  const actual = slice(text, start, end);
  const isPassed = actual === expected;
  const message = makeMessage(text, start, end, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testStringSlice('hello world', 0, 4, 'hello');
  testStringSlice('hello', 6, 4, '');
  testStringSlice('', 'd', 'e', '');
}

testAll();
