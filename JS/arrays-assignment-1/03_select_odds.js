// Given an array of numbers return a new array containing only odd elements 
//the
// original array.
// selectOdds([3, 2, 4, 5, 7]) => [3, 5, 7]
// selectOdds([2, 4, 6]) => []
// Do not modify the input array.

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

function isOdd(number) {
  return number % 2 === 1;
}

function selectOdds(numbers) {
  const oddsArray = [];

  for (let index = 0; index < numbers.length; index += 1) {
    if (isOdd(numbers[index])) {
      oddsArray[oddsArray.length] = numbers[index];
    }
  }
  return oddsArray;
}

function makeMessage(array, actual, expected) {
  const contextSegment = 'Odds in Array: "' + array + '" are:';
  const expectationSegment = '\n  Expected: "' + expected;
  const actualSegment = '"\n  Actual: "' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testSelectOdds(array, expected) {
  const actual = selectOdds(array);
  const isPassed = areEqual(actual, expected);
  const message = makeMessage(array, actual, expected);

  console.log(getMark(isPassed), message);
}

function testNumbers() {
  testSelectOdds([], []);
  testSelectOdds([1], [1]);
  testSelectOdds([1, 3], [1, 3]);
  testSelectOdds([2, 8], []);
  testSelectOdds([1, 3, 4], [1, 3]);
  testSelectOdds([1, 2, 3, 4, 6], [1, 3]);
  console.log();
}

function testAll() {
  testNumbers();
}

testAll();
