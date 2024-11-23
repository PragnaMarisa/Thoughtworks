
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

function isFormatValid(format) {
  const validFormat = 'mm-dd-yyyy dd-mm-yyyy yyyy-mm-dd';

  return isSubstring(validFormat, format);
}

function getFormatCode(format) {
  switch (format) {
    // hypens, year, month, date, order
    case 'mm-dd-yyyy': return "25690134mdy";
    case 'dd-mm-yyyy': return "25693401dmy";
    case 'yyyy-mm-dd': return "47035689ymd";
  }
}

function slice(string, start, end) {
  let slicedString = '';
  for (let index = start; index <= end; index++) {
    slicedString += string[index];
  }

  return slicedString;
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

function isDayValid(date, month, year) {
  const isLeap = isLeapYear(year);
  const isMonthFeb = +month === 2;
  let daysInMonth = isMonthFeb && isLeap ? 29 : 28;

  if (+month > 7) {
    month = +month + 1;
  }

  if (isMonthValid && !isMonthFeb) {
    const isMonthLessThan31 = +month % 2 === 0;
    daysInMonth = isMonthLessThan31 && !isMonthFeb ? 30 : 31;
  }

  return +date > 0 && +date <= daysInMonth && date.length === 2;
}

function validate(format, date) {
  if (!isFormatValid(format)) {
    return 'invalid format';
  }

  const formatCode = getFormatCode(format);

  if (!(date[formatCode[0]] === '-' && date[formatCode[1]] === '-')) {
    return 'date not according to format';
  }

  const year = slice(date, formatCode[2], formatCode[3]);
  const month = slice(date, formatCode[4], formatCode[5]);
  const slicedDate = slice(date, formatCode[6], formatCode[7]);

  for (let counter = 8; counter < formatCode.length; counter++) {
    switch (formatCode[counter]) {
      case 'y':
        if (!isYearValid(year)) {
          return 'invalid year';
        }
        break;
      case 'm':
        if (!isMonthValid(month)) {
          return 'invalid month';
        }
        break;
      case 'd':
        if (!isDayValid(slicedDate, month, year)) {
          return 'invalid day';
        }
    }
  }

  return 'valid';
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}


function testAll() {
// There is no 13th month(yyyy-mm-dd)
testValidate('yyyy-mm-dd','1920-13-01','invalid month');

// There is no 13th month(mm-dd-yyyy)
testValidate('mm-dd-yyyy','13-01-1920','invalid month');

// There is no 13th month
testValidate('dd-mm-yyyy','01-13-1920','invalid month');

// There is no 0 day
testValidate('dd-mm-yyyy','00-01-1920','invalid day');

// There is no 0 month
testValidate('dd-mm-yyyy','01-00-1920','invalid month');

// There is no 0 year
testValidate('dd-mm-yyyy','01-01-0000','invalid year');

// Feb 29th is not a valid date in a non leap year(dd-mm-yyyy)
testValidate('dd-mm-yyyy','29-02-1923','invalid day');

// Feb 29th is not a valid date in a non leap year(mm-dd-yyyy)
testValidate('mm-dd-yyyy','02-29-1923','invalid day');

// Feb 29th is not a valid date in a non leap year
testValidate('yyyy-mm-dd','1923-02-29','invalid day');

// Not having leading zeroes in year is invalid(dd-mm-yyyy)
testValidate('dd-mm-yyyy','01-01-21','date not according to format');

// Not having leading zeroes in day is invalid(dd-mm-yyyy)
testValidate('dd-mm-yyyy','1-01-2021','date not according to format');

// Not having leading zeroes in month is invalid(dd-mm-yyyy)
testValidate('dd-mm-yyyy','01-1-2021','date not according to format');

// Not having leading zeroes in year is invalid(mm-dd-yyyy)
testValidate('mm-dd-yyyy','01-01-21','date not according to format');

// Not having leading zeroes in day is invalid(mm-dd-yyyy)
testValidate('mm-dd-yyyy','01-1-2021','date not according to format');

// Not having leading zeroes in month is invalid(mm-dd-yyyy)
testValidate('mm-dd-yyyy','1-01-2021','date not according to format');

// Not having leading zeroes in year is invalid(yyyy-mm-dd)
testValidate('yyyy-mm-dd','21-01-01','date not according to format');

// Not having leading zeroes in day is invalid(yyyy-mm-dd)
testValidate('yyyy-mm-dd','2021-01-1','date not according to format');

// Not having leading zeroes in month is invalid(yyyy-mm-dd)
testValidate('yyyy-mm-dd','2021-1-01','date not according to format');

// Date consisting of more than necessary characters
testValidate('yyyy-mm-dd','2021-01-011','date not according to format');

// Missing hyphens is invalid
testValidate('yyyy-mm-dd','2021 01 01','date not according to format');

// valid format string with yyyy-mm-dd
testValidate('yyyy-mm-dd','2021-01-01','valid');

// invalid yyyy-mm-dd format string
testValidate('yyyy-mm-dx','2021-01-01','invalid format');

// invalid yyyy-mm-dd format string
testValidate('yyyy-mx-dd','2021-01-01','invalid format');

// invalid yyyy-mm-dd format string
testValidate('yyyx-mm-dd','2021-01-01','invalid format');

// valid dd-mm-yyyy format string
testValidate('dd-mm-yyyy','10-10-1930','valid');

// invalid dd-mm-yyyy format string
testValidate('dd-mm-yyyx','10-10-1930','invalid format');

// invalid dd-mm-yyyy format string
testValidate('dd-mx-yyyy','10-10-1930','invalid format');

// invalid dd-mm-yyyy format string
testValidate('dx-mm-yyyy','10-10-1930','invalid format');

// valid mm-dd-yyyy format string
testValidate('mm-dd-yyyy','12-10-1930','valid');

// invalid mm-dd-yyyy format string
testValidate('mm-dd-yyyx','12-10-1930','invalid format');

// invalid mm-dd-yyyy format string
testValidate('mm-dx-yyyy','12-10-1930','invalid format');

// invalid mm-dd-yyyy format string
testValidate('mx-dd-yyyy','12-10-1930','invalid format');

// invalid format string with spaces in between
testValidate('yy dd-mm-y','12-10-1930','invalid format');

// valid regular leap year in yyyy-mm-dd format
testValidate('yyyy-mm-dd','1920-02-29','valid');

// valid regular leap year in mm-dd-yyyy format
testValidate('mm-dd-yyyy','02-29-1920','valid');

// valid 400 leap year in mm-dd-yyyy format
testValidate('mm-dd-yyyy','02-29-1920','valid');

// valid regular leap year in dd-mm-yyyy format
testValidate('dd-mm-yyyy','29-02-1920','valid');

// valid 400 leap year in dd-mm-yyyy format
testValidate('dd-mm-yyyy','29-02-1920','valid');

// century leap year should not have Feb 29 in yyyy-mm-dd format
testValidate('yyyy-mm-dd','1900-02-29','invalid day');

// century leap year should not have Feb 29 in mm-dd-yyyy format
testValidate('mm-dd-yyyy','02-29-1900','invalid day');

// century leap year should not have Feb 29 in dd-mm-yyyy format
testValidate('dd-mm-yyyy','29-02-1900','invalid day');

// First day of January
testValidate('dd-mm-yyyy','01-01-2018','valid');

// First day of February
testValidate('dd-mm-yyyy','01-02-2018','valid');

// First day of March
testValidate('dd-mm-yyyy','01-03-2018','valid');

// First day of April
testValidate('dd-mm-yyyy','01-04-2018','valid');

// First day of May
testValidate('dd-mm-yyyy','01-05-2018','valid');

// First day of June
testValidate('dd-mm-yyyy','01-06-2018','valid');

// First day of July
testValidate('dd-mm-yyyy','01-07-2018','valid');

// First day of August
testValidate('dd-mm-yyyy','01-08-2018','valid');

// First day of September
testValidate('dd-mm-yyyy','01-09-2018','valid');

// First day of October
testValidate('dd-mm-yyyy','01-10-2018','valid');

// First day of November
testValidate('dd-mm-yyyy','01-11-2018','valid');

// First day of December
testValidate('dd-mm-yyyy','01-12-2018','valid');

// First day of January
testValidate('mm-dd-yyyy','01-01-2018','valid');

// First day of February
testValidate('mm-dd-yyyy','02-01-2018','valid');

// First day of March
testValidate('mm-dd-yyyy','03-01-2018','valid');

// First day of April
testValidate('mm-dd-yyyy','04-01-2018','valid');

// First day of May
testValidate('mm-dd-yyyy','05-01-2018','valid');

// First day of June
testValidate('mm-dd-yyyy','06-01-2018','valid');

// First day of July
testValidate('mm-dd-yyyy','07-01-2018','valid');

// First day of August
testValidate('mm-dd-yyyy','08-01-2018','valid');

// First day of September
testValidate('mm-dd-yyyy','09-01-2018','valid');

// First day of October
testValidate('mm-dd-yyyy','10-01-2018','valid');

// First day of November
testValidate('mm-dd-yyyy','11-01-2018','valid');

// First day of December
testValidate('mm-dd-yyyy','12-01-2018','valid');

// First day of January
testValidate('yyyy-mm-dd','2018-01-01','valid');

// First day of February
testValidate('yyyy-mm-dd','2018-02-01','valid');

// First day of March
testValidate('yyyy-mm-dd','2018-03-01','valid');

// First day of April
testValidate('yyyy-mm-dd','2018-04-01','valid');

// First day of May
testValidate('yyyy-mm-dd','2018-05-01','valid');

// First day of June
testValidate('yyyy-mm-dd','2018-06-01','valid');

// First day of July
testValidate('yyyy-mm-dd','2018-07-01','valid');

// First day of August
testValidate('yyyy-mm-dd','2018-08-01','valid');

// First day of September
testValidate('yyyy-mm-dd','2018-09-01','valid');

// First day of October
testValidate('yyyy-mm-dd','2018-10-01','valid');

// First day of November
testValidate('yyyy-mm-dd','2018-11-01','valid');

// First day of December
testValidate('yyyy-mm-dd','2018-12-01','valid');

// Last day of January
testValidate('dd-mm-yyyy','31-01-2018','valid');

// Last day of February
testValidate('dd-mm-yyyy','28-02-2018','valid');

// Last day of March
testValidate('dd-mm-yyyy','31-03-2018','valid');

// Last day of April
testValidate('dd-mm-yyyy','30-04-2018','valid');

// Last day of May
testValidate('dd-mm-yyyy','31-05-2018','valid');

// Last day of June
testValidate('dd-mm-yyyy','30-06-2018','valid');

// Last day of July
testValidate('dd-mm-yyyy','31-07-2018','valid');

// Last day of August
testValidate('dd-mm-yyyy','31-08-2018','valid');

// Last day of September
testValidate('dd-mm-yyyy','30-09-2018','valid');

// Last day of October
testValidate('dd-mm-yyyy','31-10-2018','valid');

// Last day of November
testValidate('dd-mm-yyyy','30-11-2018','valid');

// Last day of December
testValidate('dd-mm-yyyy','31-12-2018','valid');

// Last day of January
testValidate('mm-dd-yyyy','01-31-2018','valid');

// Last day of February
testValidate('mm-dd-yyyy','02-28-2018','valid');

// Last day of March
testValidate('mm-dd-yyyy','03-31-2018','valid');

// Last day of April
testValidate('mm-dd-yyyy','04-30-2018','valid');

// Last day of May
testValidate('mm-dd-yyyy','05-31-2018','valid');

// Last day of June
testValidate('mm-dd-yyyy','06-30-2018','valid');

// Last day of July
testValidate('mm-dd-yyyy','07-31-2018','valid');

// Last day of August
testValidate('mm-dd-yyyy','08-31-2018','valid');

// Last day of September
testValidate('mm-dd-yyyy','09-30-2018','valid');

// Last day of October
testValidate('mm-dd-yyyy','10-31-2018','valid');

// Last day of November
testValidate('mm-dd-yyyy','11-30-2018','valid');

// Last day of December
testValidate('mm-dd-yyyy','12-31-2018','valid');

// Last day of January
testValidate('yyyy-mm-dd','2018-01-31','valid');

// Last day of February
testValidate('yyyy-mm-dd','2018-02-28','valid');

// Last day of March
testValidate('yyyy-mm-dd','2018-03-31','valid');

// Last day of April
testValidate('yyyy-mm-dd','2018-04-30','valid');

// Last day of May
testValidate('yyyy-mm-dd','2018-05-31','valid');

// Last day of June
testValidate('yyyy-mm-dd','2018-06-30','valid');

// Last day of July
testValidate('yyyy-mm-dd','2018-07-31','valid');

// Last day of August
testValidate('yyyy-mm-dd','2018-08-31','valid');

// Last day of September
testValidate('yyyy-mm-dd','2018-09-30','valid');

// Last day of October
testValidate('yyyy-mm-dd','2018-10-31','valid');

// Last day of November
testValidate('yyyy-mm-dd','2018-11-30','valid');

// Last day of December
testValidate('yyyy-mm-dd','2018-12-31','valid');

// Middle of January
testValidate('dd-mm-yyyy','15-01-2018','valid');

// Middle of February
testValidate('dd-mm-yyyy','15-02-2018','valid');

// Middle of March
testValidate('dd-mm-yyyy','15-03-2018','valid');

// Middle of April
testValidate('dd-mm-yyyy','15-04-2018','valid');

// Middle of May
testValidate('dd-mm-yyyy','15-05-2018','valid');

// Middle of June
testValidate('dd-mm-yyyy','15-06-2018','valid');

// Middle of July
testValidate('dd-mm-yyyy','15-07-2018','valid');

// Middle of August
testValidate('dd-mm-yyyy','15-08-2018','valid');

// Middle of September
testValidate('dd-mm-yyyy','15-09-2018','valid');

// Middle of October
testValidate('dd-mm-yyyy','15-10-2018','valid');

// Middle of November
testValidate('dd-mm-yyyy','15-11-2018','valid');

// Middle of December
testValidate('dd-mm-yyyy','15-12-2018','valid');

// Middle of January
testValidate('mm-dd-yyyy','01-15-2018','valid');

// Middle of February
testValidate('mm-dd-yyyy','02-15-2018','valid');

// Middle of March
testValidate('mm-dd-yyyy','03-15-2018','valid');

// Middle of April
testValidate('mm-dd-yyyy','04-15-2018','valid');

// Middle of May
testValidate('mm-dd-yyyy','05-15-2018','valid');

// Middle of June
testValidate('mm-dd-yyyy','06-15-2018','valid');

// Middle of July
testValidate('mm-dd-yyyy','07-15-2018','valid');

// Middle of August
testValidate('mm-dd-yyyy','08-15-2018','valid');

// Middle of September
testValidate('mm-dd-yyyy','09-15-2018','valid');

// Middle of October
testValidate('mm-dd-yyyy','10-15-2018','valid');

// Middle of November
testValidate('mm-dd-yyyy','11-15-2018','valid');

// Middle of December
testValidate('mm-dd-yyyy','12-15-2018','valid');

// Middle of January
testValidate('yyyy-mm-dd','2018-01-15','valid');

// Middle of February
testValidate('yyyy-mm-dd','2018-02-15','valid');

// Middle of March
testValidate('yyyy-mm-dd','2018-03-15','valid');

// Middle of April
testValidate('yyyy-mm-dd','2018-04-15','valid');

// Middle of May
testValidate('yyyy-mm-dd','2018-05-15','valid');

// Middle of June
testValidate('yyyy-mm-dd','2018-06-15','valid');

// Middle of July
testValidate('yyyy-mm-dd','2018-07-15','valid');

// Middle of August
testValidate('yyyy-mm-dd','2018-08-15','valid');

// Middle of September
testValidate('yyyy-mm-dd','2018-09-15','valid');

// Middle of October
testValidate('yyyy-mm-dd','2018-10-15','valid');

// Middle of November
testValidate('yyyy-mm-dd','2018-11-15','valid');

// Middle of December
testValidate('yyyy-mm-dd','2018-12-15','valid');

// Invalid date in January
testValidate('dd-mm-yyyy','35-01-2018','invalid day');

// Invalid date in February
testValidate('dd-mm-yyyy','35-02-2018','invalid day');

// Invalid date in March
testValidate('dd-mm-yyyy','35-03-2018','invalid day');

// Invalid date in April
testValidate('dd-mm-yyyy','35-04-2018','invalid day');

// Invalid date in May
testValidate('dd-mm-yyyy','35-05-2018','invalid day');

// Invalid date in June
testValidate('dd-mm-yyyy','35-06-2018','invalid day');

// Invalid date in July
testValidate('dd-mm-yyyy','35-07-2018','invalid day');

// Invalid date in August
testValidate('dd-mm-yyyy','35-08-2018','invalid day');

// Invalid date in September
testValidate('dd-mm-yyyy','35-09-2018','invalid day');

// Invalid date in October
testValidate('dd-mm-yyyy','35-10-2018','invalid day');

// Invalid date in November
testValidate('dd-mm-yyyy','35-11-2018','invalid day');

// Invalid date in December
testValidate('dd-mm-yyyy','35-12-2018','invalid day');

// Invalid date in January
testValidate('mm-dd-yyyy','01-35-2018','invalid day');

// Invalid date in February
testValidate('mm-dd-yyyy','02-35-2018','invalid day');

// Invalid date in March
testValidate('mm-dd-yyyy','03-35-2018','invalid day');

// Invalid date in April
testValidate('mm-dd-yyyy','04-35-2018','invalid day');

// Invalid date in May
testValidate('mm-dd-yyyy','05-35-2018','invalid day');

// Invalid date in June
testValidate('mm-dd-yyyy','06-35-2018','invalid day');

// Invalid date in July
testValidate('mm-dd-yyyy','07-35-2018','invalid day');

// Invalid date in August
testValidate('mm-dd-yyyy','08-35-2018','invalid day');

// Invalid date in September
testValidate('mm-dd-yyyy','09-35-2018','invalid day');

// Invalid date in October
testValidate('mm-dd-yyyy','10-35-2018','invalid day');

// Invalid date in November
testValidate('mm-dd-yyyy','11-35-2018','invalid day');

// Invalid date in December
testValidate('mm-dd-yyyy','12-35-2018','invalid day');

// Invalid date in January
testValidate('yyyy-mm-dd','2018-01-35','invalid day');

// Invalid date in February
testValidate('yyyy-mm-dd','2018-02-35','invalid day');

// Invalid date in March
testValidate('yyyy-mm-dd','2018-03-35','invalid day');

// Invalid date in April
testValidate('yyyy-mm-dd','2018-04-35','invalid day');

// Invalid date in May
testValidate('yyyy-mm-dd','2018-05-35','invalid day');

// Invalid date in June
testValidate('yyyy-mm-dd','2018-06-35','invalid day');

// Invalid date in July
testValidate('yyyy-mm-dd','2018-07-35','invalid day');

// Invalid date in August
testValidate('yyyy-mm-dd','2018-08-35','invalid day');

// Invalid date in September
testValidate('yyyy-mm-dd','2018-09-35','invalid day');

// Invalid date in October
testValidate('yyyy-mm-dd','2018-10-35','invalid day');

// Invalid date in November
testValidate('yyyy-mm-dd','2018-11-35','invalid day');

// Invalid date in December
testValidate('yyyy-mm-dd','2018-12-35','invalid day');

// Invalid format with spaces
testValidate('yyyy-mm-dd','2018- 2- 5','date not according to format');
  
}

testAll();
