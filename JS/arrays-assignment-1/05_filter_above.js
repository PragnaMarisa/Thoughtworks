// Given an array of numbers and a threshold value, return a new array
// that contains all the numbers above the threshold.
// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []
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

function filterAbove(array, threshold) {
  const resultArray = [];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > threshold) {
      resultArray[resultArray.length] = array[index];
    }
  }

  return resultArray;
}

function makeMessage(array, threshold, actual, expected) {
  const contextSegment = 'Numbers above threshold: "' + threshold + 'in Array:';
  const expectationSegment = '"' + array + '" are:' + '\n  Expected: "';
  const actualSegment = expected + '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testFilterAbove(array, threshold, expected) {
  const actual = filterAbove(array, threshold);
  const isPassed = areEqual(actual, expected);
  const message = makeMessage(array, threshold, actual, expected);

  console.log(getMark(isPassed), message);
}

function testNumbers() {
  testFilterAbove([1, 2, 3, 4], 4, []);
  testFilterAbove([1, 2, 3, 4], 5, []);
  testFilterAbove([], 4, []);
  testFilterAbove([1, 2, 3, 4], 0, [1, 2, 3, 4]);
  testFilterAbove([1, 2, 3, 4, 44, 67], 40, [44, 67]);
  console.log();
}

function testAll() {
  testNumbers();
}

testAll();
