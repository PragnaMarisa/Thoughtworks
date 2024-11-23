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

function firstPrimeAbove(number) {
  const primeCandidate = number + 1;

  if (isPrime(primeCandidate)) {
    return primeCandidate;
  }

  return firstPrimeAbove(primeCandidate);
}

function makeMessage(number1, actual, expected) {
  const contextSegment = 'Prime Number above ' + number1 + ' is';
  const expectationSegment = "\n  Expected: " + expected;
  const actualSegment = "\n  Actual: " + actual;

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testIsPrimeAbove(number1, expected) {
  const actual = firstPrimeAbove(number1);
  const isPassed = actual === expected;
  const message = makeMessage(number1, actual, expected);

  console.log(getMark(isPassed), message);
}

function testPrimeNumbers() {
  testIsPrimeAbove(7, 11);
  testIsPrimeAbove(2, 3);
  testIsPrimeAbove(5, 7);
  testIsPrimeAbove(3, 5);
  testIsPrimeAbove(17, 19);
}

function testNonPrimeNumbers() {
  testIsPrimeAbove(1, 2);
  testIsPrimeAbove(4, 5);
  testIsPrimeAbove(9, 11);
  testIsPrimeAbove(36, 37);
  testIsPrimeAbove(90, 97);
}

function testAll() {
  testNonPrimeNumbers();
  testPrimeNumbers();
}

testAll();
