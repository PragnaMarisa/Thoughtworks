// Given array1 and array2 returns true if both array are equal else false.
// Examples:
// areEqual([1, 2, 3, 4], [1, 2, 3, 4]) => true
// areEqual([1, 2, 3], [1, 2, 3, 4]) => false
// areEqual([1, 2, 3], [1, 3, 2]) => false
// areEqual([], []) => true
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

function makeMessage(array1, array2, actual, expected) {
  const contextSegment = 'Array1: "' + array1 + '" is EQUAL To Array2: "';
  const expectationSegment = array2 + '"\n  Expected: "' + expected;
  const actualSegment = '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testAreEqual(array1, array2, expected) {
  const actual = areEqual(array1, array2);
  const isPassed = actual === expected;
  const message = makeMessage(array1, array2, actual, expected);

  console.log(getMark(isPassed), message);
}

function testStrings() {
  testAreEqual([' '], [' '], true);
  testAreEqual([''], [''], true);
  testAreEqual([' '], [''], false);
  testAreEqual(['a'], ['A'], false);
  testAreEqual(['a'], ['a'], true);
  console.log();
}

function testNumbers() {
  testAreEqual([], [], true);
  testAreEqual([1, 3], [1, 3], true);
  testAreEqual([1, 3], [2], false);
  testAreEqual([1, 3], [1, 3, 4], false);
  console.log();
}

function testMixedArrays() {
  testAreEqual([1, '1'], [1, '1'], true);
  testAreEqual([1], ['1'], false);
  testAreEqual([true], [true], true);
  testAreEqual([true], [false], false);
  console.log();
}

function testAll() {
  testStrings();
  testNumbers();
  testMixedArrays();
}

testAll();
