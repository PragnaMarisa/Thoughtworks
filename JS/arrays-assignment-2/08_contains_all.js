// Return true if all elements are present in the array regardless of their order.
// Otherwise, return false.
// containsAll([1, 2, 3], [2, 1]) => true
// containsAll([1, 2, 3], [2, 1, 4]) => false

function includes(element, array) {

  for (let index = 0; index < array.length; index++) {
    if (element === array[index]) {
      return true;
    }
  }

  return false;
}

function containsAll(array, elements) {

  if (array.length < elements.length) {
    return false;
  }

  for (let index = 0; index < elements.length; index++) {
    if (!includes(elements[index], array)) {
      return false;
    }
  }

  return true;
}

function makeMessage(elements, array, actual, expected) {
  const contextSegment = 'Does these elements: [' + elements + '] contain in "';
  const expectationSegment = 'Array2: [' + array + ']\n  Expected: "';
  const actualSegment = expected + '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testContainsAll(elements, array, expected) {
  const actual = containsAll(elements, array);
  const isPassed = actual === expected;
  const message = makeMessage(elements, array, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testContainsAll([3, 7, 8], [3, 8, 7], true);
  testContainsAll([1, 2, 3, 0], [1, 2, 3], true);
  testContainsAll([1, 2, 3, 4], [3, 4], true);
  testContainsAll([3, 8, 9], [9, 10], false);
  testContainsAll([3], [9, 10], false);
  testContainsAll([1], [0], false);
  testContainsAll([], [], true);
  console.log();
}

testAll();
