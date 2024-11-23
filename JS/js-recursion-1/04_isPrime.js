function hasFactorAbove(divisor, primeCandidate) {
  if (primeCandidate % divisor === 0) {
    return true;
  }

  if (divisor <= (primeCandidate / 2)) {
    return hasFactorAbove(divisor + 1, primeCandidate);
  }

  return false;
}

function isPrime(primeCandidate) {
  if (primeCandidate < 3) {
    return primeCandidate % 2 === 0;
  }

  return !hasFactorAbove(2, primeCandidate);
}

function makeMessage(number1, actual, expected) {
  const contextSegment = 'Is ' + number1 + ' a prime?';
  const expectationSegment = "\n  Expected: " + expected;
  const actualSegment = "\n  Actual: " + actual;

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testIsPrime(number1, expected) {
  const actual = isPrime(number1);
  const isPassed = actual === expected;
  const message = makeMessage(number1, actual, expected);

  console.log(getMark(isPassed), message);
}

function testPrimeNumbers() {
  testIsPrime(7, true);
  testIsPrime(2, true);
  testIsPrime(5, true);
  testIsPrime(3, true);
  testIsPrime(17, true);
}

function testNonPrimeNumbers() {
  testIsPrime(1, false);
  testIsPrime(4, false);
  testIsPrime(9, false);
  testIsPrime(36, false);
  testIsPrime(90, false);
}

function testAll() {
  testNonPrimeNumbers();
  testPrimeNumbers();
}

testAll();
