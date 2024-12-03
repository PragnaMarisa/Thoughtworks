function concatArray(arrays) {
  const concatedArray = [];

  for (let i = 0; i < arrays.length; i++) {
    const arrayToBeConcated = arrays[i];

    for (let j = 0; j < arrayToBeConcated.length; j++) {
      concatedArray.push(arrays[i][j]);
    }
  }

  return concatedArray;
}

function generatePowerSet(arr) {
  const powerSet = [[]];

  for (let index = 0; index < arr.length; index++) {
    const limit = powerSet.length;

    for (let pIndex = 0; pIndex < limit; pIndex++) {
      powerSet.push(concatArray([powerSet[pIndex], [arr[index]]]));
    }
  }

  return powerSet;
}

// testing part...

function areArraysEqual(array1, array2, index) {
  if (index === array1.length) {
    return true;
  }

  if (array1[index] !== array2[index]) {
    return false;
  }

  return areArraysEqual(array1, array2, index + 1);
}

function areEqual(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areArraysEqual(array1[index], array2[index], 0)) {
      return false;
    }
  }

  return true;
}

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
  console.log(createRow(headers, inputDataLengths));
}

function createResultsRow(rows, inputDataLengths) {
  for (const row of rows) {
    console.log(createRow(row, inputDataLengths));
  }
}

function createTestsTable(headers, testedData) {
  const programNo = '01';
  const programName = 'power Set';

  console.log('\n# ' + programNo + ' ' + programName + '\n');

  const inputDataLengths = getMaximumLengthsOf(testedData, headers);

  createHeader(headers, inputDataLengths);
  inputDataLengths[0] = inputDataLengths[0] - 1;

  console.log(getAlignmentLine(inputDataLengths));
  createResultsRow(testedData, inputDataLengths);
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testPowerSet(array, expected) {
  const actual = generatePowerSet(array);
  const isPassed = areEqual(actual, expected);

  return [getMark(isPassed), array, actual, expected];
}

function testAll() {
  const headers = ["Status", "Array", "Actual", "Expected"];
  const testedData = [];
  testedData.push(testPowerSet([1, 2, 3], [[], [1], [2], [1, 2], [3], [1, 3],
  [2, 3], [1, 2, 3]]));
  testedData.push(testPowerSet(['a', 'b'], [[], ['a'], ['b'], ['a', 'b']]));
  testedData.push(testPowerSet([1], [[], [1]]));
  testedData.push(testPowerSet([], [[]]));
  createTestsTable(headers, testedData);
}

testAll();
