// testing part...

function getMaxLengthOfData(testedData, colIndex) {
  let maxLength = 0;

  for (let index = 0; index < testedData.length; index++) {
    const currData = testedData[index][colIndex];
    if (currData.length > maxLength) {
      maxLength = currData.length;
    }
  }

  return maxLength;
}

function getMaximumLengthsOf(testedData, columns) {
  const lengths = [];

  for (let index = 0; index < columns.length; index++) {
    lengths.push(getMaxLengthOfData(testedData, columns[0]) + 4);
  }

  return lengths;
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
    row += '  ' + columns[column];
    row += createSpacedString(columnLengths[column] - row.length) + '|';
    finalRow = finalRow + row;
    row = '';
  }

  return finalRow;
}

function createHeader(headers, inputDataLengths) {
  const headerLength = createRow(headers, inputDataLengths).length;
  console.log(createHyphenLine(headerLength));
  console.log(createRow(headers, inputDataLengths));
  console.log(createHyphenLine(headerLength));
}

function createResultsRow(rows, inputDataLengths) {
  for (let index = 0; index < rows.length; index++) {
    const hyphenLength = createRow(rows[index], inputDataLengths).length;

    console.log(createRow(rows[index], inputDataLengths));
    console.log(createHyphenLine(hyphenLength));
  }
}

function createTestsTable(headers, testedData) {
  const inputDataLengths = getMaximumLengthsOf(testedData, [1, 2, 3]);
  inputDataLengths.unshift(10);

  createHeader(headers, inputDataLengths);
  inputDataLengths[0] = inputDataLengths[0] - 1;
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
