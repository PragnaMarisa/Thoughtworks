// Given an array of numbers true if numbers are in strictly ascending order
// otherwise false.
// isStrictlyAscending([1, 3, 4, 5, 16]) => true
// isStrictlyAscending([1, 3, 2, 4]) => false
// isStrictlyAscending([1, 3, 3, 4]) => false

function isStrictlyAscending(numbers) {
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index - 1] >= numbers[index]) {
      return false;
    }
  }

  return true;
}

// testing part...

function getMaxLengthOfData(testedData, headers, colIndex) {
  let maxLength = headers[colIndex].length;
  
  for (let index = 0; index < testedData.length; index++) {
    const currData = testedData[index][colIndex];
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
  console.log(createRow(headers, inputDataLengths));
}

function createResultsRow(rows, inputDataLengths) {
  for (let index = 0; index < rows.length; index++) {

    console.log(createRow(rows[index], inputDataLengths));
  }
}

function createTestsTable(headers, testedData) {
  const programNo = '01';
  const programName = 'Strictly Ascending';

  console.log('\n# '+ programNo + ' ' +  programName + '\n');

  const inputDataLengths = getMaximumLengthsOf(testedData, headers);

  createHeader(headers, inputDataLengths);
  inputDataLengths[0] = inputDataLengths[0] - 1;

  console.log(getAlignmentLine(inputDataLengths));
  createResultsRow(testedData, inputDataLengths);
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testStrictlyAscending(array, expected) {
  const actual = isStrictlyAscending(array);
  const isPassed = actual === expected;

  return [getMark(isPassed), '[' + array + ']', actual, expected];
}

function testAll() {
  const headers = ["Status", "Array", "Actual", "Expected"];
  const testedData = [];
  testedData.push(testStrictlyAscending([1, 3, 5, 6, 8, 7], false));
  testedData.push(testStrictlyAscending([1, 3, 8, 5, 6, 8, 7], false));
  testedData.push(testStrictlyAscending([1, 3, 5, 6, 7], true));
  testedData.push(testStrictlyAscending([], true));
  testedData.push(testStrictlyAscending([1], true));
  testedData.push(testStrictlyAscending([1, 3, 3, 4], false));
  testedData.push(testStrictlyAscending([2, 1], false));
  testedData.push(testStrictlyAscending([1, 31, 3, 4], false));
  createTestsTable(headers, testedData);
}

testAll();
