// Given an array of numbers true if numbers are in strictly ascending order
// otherwise false.
// isStrictlyAscending([1, 3, 4, 5, 16]) => true
// isStrictlyAscending([1, 3, 2, 4]) => false
// isStrictlyAscending([1, 3, 3, 4]) => false

function isStrictlyDescending(numbers) {

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] <= numbers[index + 1]) {
      return false;
    }
  }

  return true;
}

function makeMessage(array, actual, expected) {
  const contextSegment = 'Is Array: [' + array + '] is in descending order';
  const expectationSegment = '\n  Expected: "' + expected;
  const actualSegment = '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testStrictlyDescending(array, expected) {
  const actual = isStrictlyDescending(array);
  const isPassed = actual === expected;
  const message = makeMessage(array, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testStrictlyDescending([1, 3, 5, 6, 8, 7], false);
  testStrictlyDescending([1, 3, 8, 5, 6, 8, 7], false);
  testStrictlyDescending([7, 2, 1, 0], true);
  testStrictlyDescending([], true);
  testStrictlyDescending([1], true);
  testStrictlyDescending([4, 3, 3, 1], false);
  testStrictlyDescending([2, 1], true);
  testStrictlyDescending([1, 2], false);
  testStrictlyDescending([1, 1, 1], false);
  testStrictlyDescending([31, 30, 4], true);
  console.log();
}

testAll();
