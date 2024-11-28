// Given an array return reverse of array.
// reverse([1, 2, 3]) => [3, 2, 1]
// reverse([]) => []
// do not modify input parameters

function areArraysEqual(array1, array2, index) {
  if (index === array1.length) {
    return true;
  }

  if (array1[index] !== array2[index]) {
    return false;
  }

  return areArraysEqual(array1, array2, index + 1);
}

function areEqual(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  return areArraysEqual(array1, array2, 0);
}

function reverse(array) {
  const reversedArray = [];

  for (let index = array.length - 1; index >= 0; index -= 1) {
    reversedArray[reversedArray.length] = array[index];
  }

  return reversedArray;
}

function makeMessage(array1, actual, expected) {
  const contextSegment = 'Reverse of Array: "' + array1 + '" is:';
  const expectationSegment = '\n  Expected: "' + expected;
  const actualSegment = '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testReverse(array1, expected) {
  const actual = reverse(array1);
  const isPassed = areEqual(actual, expected);
  const message = makeMessage(array1, actual, expected);

  console.log(getMark(isPassed), message);
}

function testStrings() {
  testReverse([' '], [' ']);
  testReverse([''], ['']);
  testReverse(['p', ' ', 'g'], ['g', ' ', 'p']);
  testReverse(['a', 'A'], ['A', 'a']);
  testReverse(['a'], ['a']);
  console.log();
}

function testNumbers() {
  testReverse([], []);
  testReverse([1], [1]);
  testReverse([1, 3], [3, 1]);
  testReverse([1, 3, 4], [4, 3, 1]);
  console.log();
}

function testMixedArrays() {
  testReverse([1, '1'], ['1', 1]);
  testReverse([true, false, 1], [1, false, true]);
  console.log();
}

function testAll() {
  testStrings();
  testNumbers();
  testMixedArrays();
}

testAll();
