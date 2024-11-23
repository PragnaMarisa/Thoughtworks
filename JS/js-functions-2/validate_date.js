const YMD = 'yyyy-mm-dd';
const DMY = 'dd-mm-yyyy';
const MDY = 'mm-dd-yyyy';

const VALID = 'valid';
const INVALIDFORMAT = 'invalid format';
const DATENOTACOORDINGTOFORMAT = 'date not according to format';
const INVALIDYEAR = 'invalid year';
const INVALIDMONTH = 'invalid month';
const INVALIDDAY = 'invalid day';

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

function slice(string, start, end) {
  let slicedString = '';
  for (let index = start; index <= end; index++) {
    slicedString += string[index];
  }

  return slicedString;
}

function isFormatValid(format) {
  const validFormat = YMD + ' ' + MDY + ' ' + DMY;

  return isSubstring(validFormat, format);
}

function isHyphenAtIndex(hyphenIndex, text) {
  return text[hyphenIndex] === '-';
}

function isDigit(digit) {
  return digit >= 0 && digit <= 9;
}

function isDateFormatValid(format, date) {

  if (format.length !== date.length) {
    return false;
  }

  for (let index = 0; index < format.length; index++) {
    if (format[index] === '-' && date[index] !== format[index]) {
      return false;
    }

    if (format[index] !== '-' && !isDigit(+date[index])) {
      return false;
    }
  }

  return true;
}

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  if (isDivisible(year, 400)) {
    return true;
  }
  return !isDivisible(year, 100) && isDivisible(year, 4);
}

function isYearValid(year) {
  return year > 0 && year < 9999 && year.length === 4;
}

function isMonthValid(month) {
  return month.length === 2 && +month > 0 && +month < 13;
}

function getNoOfDaysInMonth(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }

  return 31 - ((month - 1) % 7) % 2;
}

function isDayValid(date, month, year) {
  date = +date;
  return date > 0 && date <= getNoOfDaysInMonth(month, year);
}

function standardizeDate(format, date) {
  if (format === YMD) {
    return date;
  }

  return slice(date, 6, 9) + '-' + slice(date, 0, 4);
}

function validateYearMonthDay(year, month, day) {
  if (!isYearValid(year)) {
    return INVALIDYEAR;
  }

  if (!isMonthValid(month)) {
    return INVALIDMONTH;
  }

  if (!isDayValid(day, month, year)) {
    return INVALIDDAY;
  }

  return VALID;
}

function isDateValid(date, format) {

  const year = slice(date, 0, 3);
  const month = slice(date, 5, 6);
  const day = slice(date, 8, 9);
  if (format === DMY) {
    return validateYearMonthDay(year, day, month);
  }

  return validateYearMonthDay(year, month, day);
}

function validate(format, date) {
  if (!isFormatValid(format)) {
    return INVALIDFORMAT;
  }

  if (!isDateFormatValid(format, date)) {
    return DATENOTACOORDINGTOFORMAT;
  }

  return isDateValid(standardizeDate(format, date));
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testValidFormats() {
  testValidate('mm-dd-yyyy', '01-01-2020', 'valid');
  testValidate('dd-mm-yyyy', '01-01-2020', 'valid');
  testValidate('dd-mm-yyyy', '01-01-2020', 'valid');
  testValidate('dd-mm-yyyy', '01-01-2020', 'valid');
  console.log("End of Testing valud formats.");
}

function testInvalidFormats() {
  testValidate('mm-yyyy-dd', '01-01-2020', 'invalid format');
  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  console.log("End of Testing invalid formats.");
}

function testDateNotAccordingToFormats() {
  testValidate('yyyy-mm-dd', '01-01-2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '01 01 2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '01 01 2020', 'date not according to format');
  console.log("End of Testing date not according to formats.");
}

function testInvalidMonth() {
  testValidate('dd-mm-yyyy', '01-29-2020', 'invalid month');
  testValidate('mm-dd-yyyy', '13-13-2024', 'invalid month');
  console.log("End of Testing invalid month.");
}

function testInvalidDay() {
  testValidate('mm-dd-yyyy', '01-60-2000', 'invalid day');
  console.log("End of Testing invalid day.");
}

function testInvalidYear() {
  testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '13-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '01-60-0000', 'invalid year');
  console.log("End of Testing invalid year.");
}

function testAll() {
  testValidFormats();
  testInvalidFormats();
  testDateNotAccordingToFormats();
  testInvalidMonth();
  testInvalidDay();
  testInvalidYear();
 testValidate('dd-mm-yyyy', '01-01-2020', 'valid');
}

testAll();
