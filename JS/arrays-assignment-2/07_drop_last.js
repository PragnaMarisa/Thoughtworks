// Remove last n elements from the array
// dropLast([1, 2, 3], 1) => [1, 2]
// dropLast([1, 2, 3], 4) => []
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

function dropLast(array, noOfTerms) {
  const dropedArray = [];
  for (let index = 0; index < array.length - noOfTerms; index++) {
    dropedArray.push(array[index]);
  }

  return dropedArray;
}

function makeMessage(array, count, actual, expected) {
  const contextSegment = 'Array: [' + array + '] removing "' + count + ' ';
  const expectationSegment = 'elements from last  is\n  Expected: "' + expected;
  const actualSegment = '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testDropLast(array, count, expected) {
  const actual = dropLast(array, count);
  const isPassed = areEqual(actual, expected);
  const message = makeMessage(array, count, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testDropLast([3, 7, 8], 1, [3, 7]);
  testDropLast([1, 2, 3], 0, [1, 2, 3]);
  testDropLast([1, 2, 3, 4], 2, [1, 2]);
  testDropLast([3, 8, 9], 4, []);
  testDropLast([1], 1, []);
  testDropLast([0], 1, []);
  console.log();
}

testAll();
