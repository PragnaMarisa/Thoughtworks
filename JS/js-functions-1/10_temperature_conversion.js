/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isStringValid(string, subString) {
  return string.length !== 0 && subString.length <= string.length;
}

function matchesAtPosition(string, substring, position) {
  for (let index = 0; index < substring.length; index++) {
    if (string[position + index] !== substring[index]) {
      return false;
    }
  }

  return true;
}

function isSubstring(string, subString) {
  if (!isStringValid(string, subString) || subString.length === 0) {
    return false;
  }

  for (let index = 0; index < string.length; index++) {
    if (matchesAtPosition(string, subString, index)) {
      return true;
    }
  }

  return false;
}

function convertIntoCelsius(from, value) {
  if (from === 'K') {
    return ((value * 100) - 27315) / 100;
  }

  if (from === 'F') {
    return (value - 32) * 5 / 9;
  }
  return value;
}

function convertCelsiusToOther(to, value) {
  if (to === 'F') {
    return (9 / 5 * value) + 32;
  }

  if (to === 'K') {
    return ((value * 100) + 27315) / 100;
  }
  return value;
}

function isFormatValid(format) {
  const validUnits = "CFK";
  return isSubstring(validUnits, format);
}

function convert(from, to, value) {
  let finalValue = +value;
  if (!(isFormatValid(from) && isFormatValid(to))) {
    return NaN;
  }

  if ((from !== 'C') && from !== to) {
    finalValue = convertIntoCelsius(from, finalValue);
  }

  if ((to !== 'C') && from !== to) {
    finalValue = convertCelsiusToOther(to, finalValue);
  }
  return finalValue;
}

function makeMessage(from, to, value, actual, expected) {
  const contextSegment = "The Value changed from " + value + ' to ' + actual;
  const targetSegment = ' when converted from ' + from + ' to ' + to;
  const expectationSegment = ' expected "' + expected + '".';

  return contextSegment + targetSegment + expectationSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function isNan(number) {
  return "" + number === "NaN" && number !== "NaN";
}

function testTemperatureConversation(from, to, value, expected) {
  const actual = convert(from, to, value);
  let isPassed = actual === expected;

  if (isNan(actual)) {
    isPassed = true;
  }
  const message = makeMessage(from, to, value, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testTemperatureConversation('C', 'K', 0, 273.15);
  testTemperatureConversation('C', 'C', 0, 0);
  testTemperatureConversation('C', 'C', "0d", NaN);
  testTemperatureConversation('C', 'F', 37, 98.6);
  testTemperatureConversation('F', 'K', 98.6, 310.15);
  testTemperatureConversation('K', 'C', 100, -173.15);
  testTemperatureConversation('a', 'K', 0, NaN);
  testTemperatureConversation('s', 's', 100, NaN);
  testTemperatureConversation('C', 'C', "0", 0);
}

testAll();
