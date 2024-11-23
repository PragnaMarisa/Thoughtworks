function sumOfGP(firstTerm, ratio, noOfTerms) {
  if (noOfTerms === 0) {
    return 0;
  }

  const term = ratio * firstTerm;

  return firstTerm + sumOfGP(term, ratio, noOfTerms - 1);
}

function makeMessage(firstNum, ratio, noOfTerms, actual, expected) {
  const contextSegment = 'Sum of "' + noOfTerms + '" ratio: ' + ratio;
  const targetSegment = ' firstTerm: ' + firstNum + '\nActual: ' + actual;
  const expectationSegment = '\nExpected: ' + expected;

  return contextSegment + targetSegment + expectationSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testSumOfGP(firstNum, ratio, noOfTerms, expected) {
  const actual = sumOfGP(firstNum, ratio, noOfTerms);
  const isPassed = actual === expected;
  const message = makeMessage(firstNum, ratio, noOfTerms, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testSumOfGP(4, 3, 6, 1456);
  testSumOfGP(2, -1, 3, 2);
  testSumOfGP(2, -6, 3, 62);
  testSumOfGP(-2, -1, 3, -2);
  testSumOfGP(-1, -1, 4, 0);
  testSumOfGP(1, 2, 4, 15);
  testSumOfGP(7, 33, 1, 7);
  testSumOfGP(7, 33, 0, 0);
  testSumOfGP(0, 0, 3, 0);
}

testAll();
