function sumOfAP(firstTerm, difference, noOfTerms) {
  if (noOfTerms === 0) {
    return 0;
  }

  const term = firstTerm + difference;

  return firstTerm + sumOfAP(term, difference, noOfTerms - 1);
}

function makeMessage(firstNum, diff, noOfTerms, actual, expected) {
  const contextSegment = 'Sum of "' + noOfTerms + '" difference: ' + diff;
  const targetSegment = ' firstTerm: ' + firstNum + '\nActual: ' + actual;
  const expectationSegment = '\nExpected: ' + expected;

  return contextSegment + targetSegment + expectationSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testSumOfAp(firstNum, diff, noOfTerms, expected) {
  const actual = sumOfAP(firstNum, diff, noOfTerms);
  const isPassed = actual === expected;
  const message = makeMessage(firstNum, diff, noOfTerms, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testSumOfAp(4, 3, 6, 69);
  testSumOfAp(2, -1, 3, 3);
  testSumOfAp(2, -6, 3, -12);
  testSumOfAp(-2, -1, 3, -9);
  testSumOfAp(-1, -1, 4, -10);
  testSumOfAp(1, 2, 3, 9);
  testSumOfAp(7, 33, 1, 7);
  testSumOfAp(7, 33, 0, 0);
}

testAll();
