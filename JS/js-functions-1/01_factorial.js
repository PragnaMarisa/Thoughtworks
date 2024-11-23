/*
  Implement the below function to calculate the factorial of `number`.
  Examples:
    factorial(3) => 6
    factorial(5) => 120
    factorial(0) => 1

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function factorial(number) {
  let factorialOfNumber = 1;

  for (let currentNumber = number; currentNumber > 1; currentNumber--) {
    factorialOfNumber *= currentNumber;
  }

  return factorialOfNumber;
}

function makeMessage(number, actual, expected) {
  const contextSegment = "Factorial of " + number + " is " + expected;
  const expectationSegment = " result is " + actual + ".";

  return contextSegment + expectationSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testFactorial(number, expected) {
  const actual = factorial(number);
  const isPassed = actual === expected;

  console.log(getMark(isPassed), makeMessage(number, actual, expected));
}

function testAll() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(5, 120);
}

testAll();
