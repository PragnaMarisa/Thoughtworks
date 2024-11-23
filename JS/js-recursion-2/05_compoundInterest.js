
function compoundInterest(principle, rateOfInterest, noOfYears) {
  let sum = principle;
  const interest = (principle * rateOfInterest) / 100;
  sum = sum + interest;

  if (noOfYears < 2) {
    return noOfYears ? interest : 0;
  }

  return compoundInterest(sum, rateOfInterest, noOfYears - 1) + interest;
}

function makeMessage(priciple, rate, noOfYears, actual, expected) {
  const contextSegment = "Principle: " + priciple + " rate: " + rate;
  const expectationSegment = " no of years: " + noOfYears + "\n  Expected: ";
  const actualSegment = expected + "\n  Actual: " + actual;

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testCompoundInterest(principle, rate, noOfYears, expected) {
  const actual = compoundInterest(principle, rate, noOfYears);
  const isPassed = actual === expected;
  const message = makeMessage(principle, rate, noOfYears, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testCompoundInterest(100, 5, 2, 10.25);
  testCompoundInterest(100, 0.01, 1, 0.01);
  testCompoundInterest(100, 5, 1, 5);
  testCompoundInterest(1040, 3, 5, 165.64503727199997);
  testCompoundInterest(1040, 3, 0, 0);
  testCompoundInterest(1040, 0, 5, 0);
  testCompoundInterest(0, 3, 5, 0);
}

testAll();
