/*
  Implement the below function that tells if a given year is leap or not.
  Examples:
    isLeapYear(1900) => false
    isLeapYear(2020) => true
    isLeapYear(2001) => false

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function isDivisible(divident, divisor) {
  return divident % divisor === 0;
}

function isLeapYear(year) {
  if (isDivisible(year, 400)) {
    return true;
  }
  return !isDivisible(year, 100) && isDivisible(year, 4);
}

function makeMessage(year, actual, expected) {
  const contextSegment = "leapYear " + year + " is " + expected;
  const expectationSegment = " result is " + actual + ".";

  return contextSegment + expectationSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testisLeapyear(year, expected) {
  const actual = isLeapYear(year);
  const isPassed = actual === expected;

  console.log(getMark(isPassed), makeMessage(year, actual, expected));
}

function testAll() {
  testisLeapyear(1900, false);
  testisLeapyear(2020, true);
  testisLeapyear(2001, false);
}

testAll();
