function maximum(number1, number2) {
  return number1 < number2 ? number2 : number1;
}

function minimum(number1, number2) {
  return number1 < number2 ? number1 : number2;
}

function getSlicedString(text, start, end) {
  if (start > end) {
    return '';
  }

  return text[start] + getSlicedString(text, start + 1, end);
}

function slice(text, start, end) {
  const startIndex = maximum(start, 0);
  const endIndex = minimum(end, text.length - 1);

  return getSlicedString(text, startIndex, endIndex);
}

function makeMessage(string, start, end, actual, expected) {
  const contextSegment = 'String "' + string + '" is sliced from "' + start;
  const expectationSegment = '" to "' + end + '"\n  Expected: "' + expected;
  const actualSegment = '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testSlice(string, start, end, expected) {
  const actual = slice(string, start, end);
  const isPassed = actual === expected;
  const message = makeMessage(string, start, end, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testSlice('hello', 3, 4, 'lo');
  testSlice('hello', -1, 4, 'hello');
  testSlice('hello', -1, 6, 'hello');
  testSlice('hello', -1, 6, 'hello');
  testSlice('hello', 1, 4, 'ello');
  testSlice('', 1, 4, '');
}

testAll();
