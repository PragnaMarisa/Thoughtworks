// Remove first n elements from the array
// drop([1, 2, 3], 1) => [2, 3]
// drop([1, 2, 3], 4) => []
// Do not modify the original array

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

function drop(array, n) {
  const dropedArray = [];
  for (let index = n; index < array.length; index++) {
    dropedArray.push(array[index]);
  }

  return dropedArray;
}

function makeMessage(array, count, actual, expected) {
  const contextSegment = 'Array: [' + array + '] from index :"' + count + ' is';
  const expectationSegment = '\n  Expected: "' + expected;
  const actualSegment = '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testDrop(array, count, expected) {
  const actual = drop(array, count);
  const isPassed = areEqual(actual, expected);
  const message = makeMessage(array, count, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testDrop([3, 7, 8], 1, [7, 8]);
  testDrop([1, 2, 3], 0, [1, 2, 3]);
  testDrop([1, 2, 3, 4], 2, [3, 4]);
  testDrop([3, 8, 9], 3, []);
  testDrop([1], 1, []);
  console.log();
}

testAll();
