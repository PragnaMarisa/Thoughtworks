// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]

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

function includes(element, array) {

  for (let index = 0; index < array.length; index++) {
    if (element === array[index]) {
      return true;
    }
  }

  return false;
}

function difference(array1, array2) {
  const diffArray = [];

  for (let index = 0; index < array1.length; index++) {
    if (!includes(array1[index], array2)) {
      diffArray.push(array1[index]);
    }
  }

  return diffArray;
}

function makeMessage(array1, array2, actual, expected) {
  const contextSegment = 'Difference of Array1:[' + array1 + '] and Array2:';
  const expectationSegment = '[' + array2 + ']\n  Expected: "' + expected;
  const actualSegment = '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testDifference(array1, array2, expected) {
  const actual = difference(array1, array2);
  const isPassed = areEqual(actual, expected);
  const message = makeMessage(array1, array2, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testDifference([3, 7, 8], [1, 2, 3], [7, 8]);
  testDifference([], [1, 2, 3], []);
  testDifference([1, 2, 3, 4], [], [1, 2, 3, 4]);
  testDifference([3, 8, 9], [9, 8, 3], []);
  testDifference([3], [1, 8, 4], [3]);
  console.log();
}

testAll();
