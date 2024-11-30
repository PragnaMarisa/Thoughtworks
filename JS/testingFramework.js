function repeat(string, noOfTimes) {
  if (noOfTimes === 0) {
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

function createRow(columns, columnLength, isHeader) {
  let finalRow = '';

  let rowCreated = '|';
  for (let row = 0; row < columns.length; row++) {
    rowCreated += '  ' + columns[row];
    const usedSpace = rowCreated.length + (row === 0 && !isHeader ? 2 : 1);
    rowCreated += createSpacedString(columnLength - usedSpace) + '|';
    finalRow = finalRow + rowCreated;
    rowCreated = '';
  }

  console.log(finalRow);
  return finalRow.length;
}

function createHeader(headers) {
  const headerLength = 15 * headers.length;
  console.log(createHyphenLine(headerLength));
  createRow(headers, 15, true);
  console.log(createHyphenLine(headerLength));
}

function createResultsRow(rows) {
  let hyphenLength = 0;
  for (let index = 0; index < rows.length; index++) {
    hyphenLength = createRow(rows[index], 15, false);
  }
  console.log(createHyphenLine(hyphenLength));
}

const headers = ["Status", "Number", "Array1", "Actual", "Expected"];
const testedData = [['✅', 3, 4, 600, 712], ['✅', 4, 5, 246, 123], ['✅', 4, 5, 323, 5665]];

createHeader(headers);
createResultsRow(testedData);
