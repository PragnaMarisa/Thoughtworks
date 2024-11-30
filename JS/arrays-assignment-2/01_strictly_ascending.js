// Given an array of numbers true if numbers are in strictly ascending order
// otherwise false.
// isStrictlyAscending([1, 3, 4, 5, 16]) => true
// isStrictlyAscending([1, 3, 2, 4]) => false
// isStrictlyAscending([1, 3, 3, 4]) => false

function isStrictlyAscending(numbers) {

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] >= numbers[index + 1]) {
      return false;
    }
  }

  return true;
}

function makeMessage(array, actual, expected) {
  const contextSegment = 'Is This Array: [' + array + '] is in ascending order';
  const expectationSegment = '\n  Expected: "' + expected;
  const actualSegment = '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testStrictlyAscending(array, expected) {
  const actual = isStrictlyAscending(array);
  const isPassed = actual === expected;
  const message = makeMessage(array, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testStrictlyAscending([1, 3, 5, 6, 8, 7], false);
  testStrictlyAscending([1, 3, 8, 5, 6, 8, 7], false);
  testStrictlyAscending([1, 3, 5, 6, 7], true);
  testStrictlyAscending([], true);
  testStrictlyAscending([1], true);
  testStrictlyAscending([1, 3, 3, 4], false);
  testStrictlyAscending([2, 1], false);
  testStrictlyAscending([1, 31, 3, 4], false);
  console.log();
}

testAll();
