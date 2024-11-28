// Given an array of numbers and a element, return the last index in the array
// where element is present else -1
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
// do not modify input parameters

function findLastIndex(array, element) {

  for (let index = array.length - 1; index >= 0; index -= 1) {
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

function testFindLastIndex(array, element, expected) {
  const actual = findLastIndex(array, element);
  const isPassed = actual === expected;
  const message = makeMessage(array, element, actual, expected);

  console.log(getMark(isPassed), message);
}

function testStrings() {
  testFindLastIndex(['a', 'ash', 'a', 'hai'], 'a', 2);
  testFindLastIndex(['', 'hello', 'she'], '', 0);
  testFindLastIndex([' ', '   ', 'h hh', '   '], '   ', 3);
  testFindLastIndex(['a'], 'A', -1);
  testFindLastIndex(['a'], 'a', 0);
  console.log();
}

function testNumbers() {
  testFindLastIndex([1, 3], 5, -1);
  testFindLastIndex([1, 3, 2, 2, 20, 2], 2, 5);
  testFindLastIndex([1, 3, 45, 11, 77, 33, 77, 7], 77, 6);
  console.log();
}

function testBooleans() {
  testFindLastIndex([true, false, false], false, 2);
  testFindLastIndex([true, true, true], false, -1);
  console.log();
}

function testMixedArrays() {
  testFindLastIndex([1, '2', '1', 1], 1, 3);
  testFindLastIndex([45, '1', 'ii', false, 45, true, 'ii'], 45, 4);
  testFindLastIndex([1, '1', 'ii', false, 45, true, 'ii'], 'ii', 6);
  console.log();
}

function testAll() {
  testStrings();
  testNumbers();
  testMixedArrays();
  testBooleans();
}

testAll();
