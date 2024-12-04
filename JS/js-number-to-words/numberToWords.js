const digits1To19InWords = ['', 'one', 'two', 'three', 'four', 'five', 'six',
  'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
  'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen ', 'nineteen'];

const tensInWords = ['', '', 'twenty', 'thirty', 'forty', 'fifty',
  'sixty', 'seventy', 'eighty', 'ninety'];

const posInWords = ['ten', 'hundred', 'thousand', 'million', 'billion'];

function getNumberInArrays(number) {
  const numberInString = '' + number;
  const numberArray = [];

  for (let index = numberInString.length; index > 0; index -= 3) {
    const start = index > 3 ? index - 3 : 0;
    numberArray.unshift(+numberInString.slice(start, index));
  }

  return numberArray;
}

function getTwoDigitWord(number) {
  const tenthDigit = Math.floor(number / 10);
  let onesDigit = number % 10;
  let word = tensInWords[tenthDigit] + ' ' + digits1To19InWords[onesDigit];
  word = (number < 20) ? digits1To19InWords[number] : word;
  return word.trim();
}

function getInWords(number, position) {
  let num = number;
  const numInWords = [];

  if (num >= 100) {
    const hundredthDigit = Math.floor(num / 100);
    numInWords.push(digits1To19InWords[hundredthDigit], posInWords[1]);
    num = num % 100;
  }

  if (num < 100 && num > 0) {
    numInWords.push(getTwoDigitWord(num));
  }

  if (position > 1 && number !== 0) {
    numInWords.push(posInWords[position]);
  }

  return numInWords.join(' ');
}

function numberToWords(num) {
  if (num === 0) {
    return 'zero';
  }

  const numberInArrays = getNumberInArrays(num);
  const numberInWords = [];

  for (let index = 0; index < numberInArrays.length; index++) {
    const positionValue = numberInArrays.length - index;

    if (numberInArrays[index] !== 0) {
      numberInWords.push(getInWords(numberInArrays[index], positionValue));
    }
  }

  return numberInWords.join(' ').trim();
}

// testing part...

function getMaxLengthOfData(testedData, headers, colIndex) {
  let maxLength = headers[colIndex].length;

  for (let index = 0; index < testedData.length; index++) {
    const currData = '' + testedData[index][colIndex];
    if (currData.length > maxLength) {
      maxLength = currData.length;
    }
  }
  return maxLength;
}

function getMaximumLengthsOf(testedData, headers) {
  const lengths = [];

  for (let index = 0; index < headers.length; index++) {
    lengths.push(getMaxLengthOfData(testedData, headers, index) + 2);
  }

  return lengths;
}

function getAlignmentLine(inputDataLengths) {
  let line = '|';

  for (let index = 0; index < inputDataLengths.length; index++) {
    line += ':' + createHyphenLine(inputDataLengths[index] - 2) + ':|';
  }

  return line;
}

function repeat(string, noOfTimes) {
  if (noOfTimes <= 0) {
    return '';
  }

  return string + repeat(string, noOfTimes - 1);
}

function createSpacedString(length) {
  return repeat(' ', length);
}

function createHyphenLine(length) {
  return repeat('-', length);
}

function createRow(columns, columnLengths) {
  let finalRow = '';

  let row = '|';
  for (let column = 0; column < columns.length; column++) {
    row += ' ' + columns[column];
    row += createSpacedString(columnLengths[column] - row.length) + '|';
    finalRow = finalRow + row;
    row = '';
  }

  return finalRow;
}

function createHeader(headers, inputDataLengths) {
  return (createRow(headers, inputDataLengths));
}

function createResultsRow(rows, inputDataLengths) {
  for (let index = 0; index < rows.length; index++) {

    console.log(createRow(rows[index], inputDataLengths));
  }
}

function createTestsTable(headers, testedData) {
  const programNo = '01';
  const programName = 'Number To Words';

  console.log('\n# ' + programNo + ' ' + programName + '\n');

  const inputDataLengths = getMaximumLengthsOf(testedData, headers);

  console.log(createHeader(headers, inputDataLengths));
  inputDataLengths[0] = inputDataLengths[0] - 1;

  console.log(getAlignmentLine(inputDataLengths));
  createResultsRow(testedData, inputDataLengths);
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testNumberToWords(number, expected) {
  const actual = numberToWords(number);
  const isPassed = actual === expected;

  return [getMark(isPassed), number, actual, expected];
}

function testAll() {
  const headers = ["Status", "Number", "Actual", "Expected"];
  const testedData = [];

  testedData.push(testNumberToWords(0, 'zero'));
  testedData.push(testNumberToWords(1, 'one'));
  testedData.push(testNumberToWords(2, 'two'));
  testedData.push(testNumberToWords(3, 'three'));

  testedData.push(testNumberToWords(10, 'ten'));
  testedData.push(testNumberToWords(11, 'eleven'));
  testedData.push(testNumberToWords(21, 'twenty one'));
  testedData.push(testNumberToWords(35, 'thirty five'));
  testedData.push(testNumberToWords(47, 'forty seven'));
  testedData.push(testNumberToWords(53, 'fifty three'));
  testedData.push(testNumberToWords(64, 'sixty four'));
  testedData.push(testNumberToWords(78, 'seventy eight'));
  testedData.push(testNumberToWords(82, 'eighty two'));
  testedData.push(testNumberToWords(90, 'ninety'));
  testedData.push(testNumberToWords(99, 'ninety nine'));

  testedData.push(testNumberToWords(100, 'one hundred'));
  testedData.push(testNumberToWords(112, 'one hundred twelve'));
  testedData.push(testNumberToWords(123, 'one hundred twenty three'));
  testedData.push(testNumberToWords(101, 'one hundred one'));
  testedData.push(testNumberToWords(123, 'one hundred twenty three'));
  testedData.push(testNumberToWords(567, 'five hundred sixty seven'));
  testedData.push(testNumberToWords(700, 'seven hundred'));
  testedData.push(testNumberToWords(799, 'seven hundred ninety nine'));
  testedData.push(testNumberToWords(999, 'nine hundred ninety nine'));

  testedData.push(testNumberToWords(1000,
    'one thousand'));
  testedData.push(testNumberToWords(1999,
    'one thousand nine hundred ninety nine'));
  testedData.push(testNumberToWords(12999,
    'twelve thousand nine hundred ninety nine'));
  testedData.push(testNumberToWords(173999,
    'one hundred seventy three thousand nine hundred ninety nine'));


  testedData.push(testNumberToWords(100000,
    'one hundred thousand'));
  testedData.push(testNumberToWords(100001,
    'one hundred thousand one'));
  testedData.push(testNumberToWords(100100,
    'one hundred thousand one hundred'));
  testedData.push(testNumberToWords(321999,
    'three hundred twenty one thousand nine hundred ninety nine'));

  testedData.push(testNumberToWords(1000000,
    'one million'));
  testedData.push(testNumberToWords(1000001,
    'one million one'));
  testedData.push(testNumberToWords(10000000,
    'ten million'));
  testedData.push(testNumberToWords(100000000,
    'one hundred million'));
  testedData.push(testNumberToWords(1321999,
    'one million three hundred twenty one thousand nine hundred ninety nine'));
  testedData.push(testNumberToWords(12321990,
    'twelve million three hundred twenty one thousand nine hundred ninety'));
  testedData.push(testNumberToWords(10321999,
    'ten million three hundred twenty one thousand nine hundred ninety nine'));

  testedData.push(testNumberToWords(1000000000,
    'one billion'));
  testedData.push(testNumberToWords(10000000000,
    'ten billion'));
  testedData.push(testNumberToWords(100000000000,
    'one hundred billion'));
  testedData.push(testNumberToWords(100100321999,
    'one hundred billion one hundred million three hundred twenty one thousand nine hundred ninety nine'));

  createTestsTable(headers, testedData);
}

testAll();
