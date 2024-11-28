
// Given an array containing words, return a new array containing length of
// the words.
// mapLengths(["apple", "cat", "Four"]) => [5, 3, 4]
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

function mapLengths(words) {
  const lengths = [];

  for (let index = 0; index < words.length; index++) {
    lengths[lengths.length] = words[index].length;
  }

  return lengths;
}

function makeMessage(array, actual, expected) {
  const contextSegment = 'Map Lengths of Array: "' + array + '" are:';
  const expectationSegment = '\n  Expected: "' + expected;
  const actualSegment = '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testMapLengths(array, expected) {
  const actual = mapLengths(array);
  const isPassed = areEqual(actual, expected);
  const message = makeMessage(array, actual, expected);

  console.log(getMark(isPassed), message);
}

function testStrings() {
  testMapLengths([], []);
  testMapLengths(['1'], [1]);
  testMapLengths(['   ', ''], [3, 0]);
  testMapLengths(["hello", "tummyyy", "Welcome!"], [5, 7, 8]);
  console.log();
}

function testAll() {
  testStrings();
}

testAll();
