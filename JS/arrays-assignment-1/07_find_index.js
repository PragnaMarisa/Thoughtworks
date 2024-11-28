// Given an array of numbers and a element, return the first index in the array
// where element is present else -1
// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
// do not modify input parameters

function findIndex(array, element) {

  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
}

function makeMessage(array, element, actual, expected) {
  const contextSegment = 'Index of : "' + element + '" in Array: "';
  const expectationSegment = array + '"\n  Expected: "' + expected;
  const actualSegment = '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testFindIndex(array, element, expected) {
  const actual = findIndex(array, element);
  const isPassed = actual === expected;
  const message = makeMessage(array, element, actual, expected);

  console.log(getMark(isPassed), message);
}

function testStrings() {
  testFindIndex(['ap', 'ash', 'a', 'hai'], 'a', 2);
  testFindIndex(['', 'hello', 'she'], '', 0);
  testFindIndex([' ', '   ', 'hh hh'], 'hh hh', 2);
  testFindIndex(['a'], 'A', -1);
  testFindIndex(['a'], 'a', 0);
  console.log();
}

function testNumbers() {
  testFindIndex([1, 3], 5, -1);
  testFindIndex([1, 3, 22, 20, 2], 2, 4);
  testFindIndex([1, 3, 45, 11, 7, 33, 77], 77, 6);
  console.log();
}

function testBooleans() {
  testFindIndex([true, false, false], false, 1);
  testFindIndex([true, true, true], false, -1);
  console.log();
}

function testMixedArrays() {
  testFindIndex([1, '2', '1'], '1', 2);
  testFindIndex([1, '1', 'hi', false, 45, true, 'ii'], 45, 4);
  testFindIndex([1, '1', 'hi', false, 45, true, 'ii'], true, 5);
  console.log();
}

function testAll() {
  testStrings();
  testNumbers();
  testMixedArrays();
  testBooleans();
}

testAll();
