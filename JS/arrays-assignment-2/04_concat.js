// concat the given arrays.
// concat([1, 2, 3], [4, 5, 6]) => [1, 2, 3, 4, 5, 6]

function concatArray(arrays) {
  console.log(arrays, '.');
  const concatedArray = [];

  for (let i = 0; i < arrays.length; i++) {
    const arrayToBeConcated = arrays[i];

    for (let j = 0; j < arrayToBeConcated.length; j++) {
      concatedArray.push(arrays[i][j]);
    }
  }

  return concatedArray;
}

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

function getArray(string) {
  const resultArray = [];
  for (let index = 0; index < string.length; index++) {
    resultArray.push(string[index]);
  }

  return resultArray;
}

function concat(array1, array2) {
  const concatedArray = getArray(array1);

  for (let index = 0; index < array2.length; index++) {
    concatedArray.push(array2[index]);
  }

  return concatedArray;
}

function makeMessage(array1, array2, actual, expected) {
  const contextSegment = 'Concatination of Array1:[' + array1 + '] and Array2:';
  const expectationSegment = '[' + array2 + ']\n  Expected: "' + expected;
  const actualSegment = '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testConcat(array1, array2, expected) {
  const actual = concat(array1, array2);
  const isPassed = areEqual(actual, expected);
  const message = makeMessage(array1, array2, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testConcat([6, 7, 8], [1, 2, 3], [6, 7, 8, 1, 2, 3]);
  testConcat([], [1, 2, 3], [1, 2, 3]);
  testConcat([], [], []);
  testConcat([1, 22], [1, 2], [1, 22, 1, 2]);
  testConcat([3, 3, 3, 7], [], [3, 3, 3, 7]);
  testConcat([3], [1, 8, 4], [3, 1, 8, 4]);
  console.log();
}

testAll();
