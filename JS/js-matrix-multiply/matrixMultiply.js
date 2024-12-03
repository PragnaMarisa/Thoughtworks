function isMatrixRegular(matrix) {
  const noOfColumns = matrix[0].length;

  for (const row of matrix) {
    if (noOfColumns !== row.length) {
      return false;
    }
  }

  return true;
}

function areValidMatrices(matrixA, matrixB) {

  const canMatricesMultiply = matrixA[0].length === matrixB.length;
  const areMatricesReg = isMatrixRegular(matrixA) && isMatrixRegular(matrixB);

  return canMatricesMultiply && areMatricesReg;
}

function createRow(matrixA, matrixB, row) {
  const matrixRow = [];

  for (let rowCount = 0; rowCount < matrixA.length; rowCount++) {
    let productSum = 0;

    for (let col = 0; col < row.length; col++) {
      productSum += row[col] * matrixB[col][rowCount];
    }

    matrixRow.push(productSum);
  }
  return matrixRow;
}

function multiplyMatrices(matrixA, matrixB) {
  const productMatrix = [];
  if (matrixA.length === 0 || matrixB.length === 0) {
    return productMatrix;
  }

  if (!areValidMatrices(matrixA, matrixB)) {
    return NaN;
  }

  for (const row of matrixA) {
    productMatrix.push(createRow(matrixA, matrixB, row));
  }
  return productMatrix;
}

// testing part...

function isNan(input) {
  return "" + input === "NaN" && input !== "NaN";
}

function areArraysEqual(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function areEqual(array1, array2) {

  for (let index = 0; index < array1.length; index++) {
    if (!areArraysEqual(array1[index], array2[index])) {
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

function fcreateRow(columns, columnLengths) {
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
  return (fcreateRow(headers, inputDataLengths));
}

function createResultsRow(rows, inputDataLengths) {
  for (let index = 0; index < rows.length; index++) {

    console.log(fcreateRow(rows[index], inputDataLengths));
  }
}

function createTestsTable(headers, testedData) {
  const programNo = '01';
  const programName = 'Matrix Muliply';

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

function testMatrixMultiply(matrix1, matrix2, expected) {
  const actual = multiplyMatrices(matrix1, matrix2);
  let isPassed = areEqual(actual, expected);

  if (isNan(actual)) {
    isPassed = true;
  }

  return [getMark(isPassed), matrix1, matrix2, actual, expected];
}

function testAll() {
  const headers = ["Status", "Matrix1", "Matrix2", "Actual", "Expected"];
  const testedData = [];

  testedData.push(testMatrixMultiply([[1, 2, 3], [4, 5, 6]],
    [[7, 8], [9, 10], [11, 12]],
    [[58, 64], [139, 154]]));
  testedData.push(testMatrixMultiply([[1, 2], [3, 4]], [[5, 6], [7, 8]],
    [[19, 22], [43, 50]]));
  testedData.push(testMatrixMultiply([[1, 2], [3]], [[5, 6], [7, 8]], NaN));
  testedData.push(testMatrixMultiply([[], []], [[], []], NaN));
  // testedData.push(testMatrixMultiply([[], []], [[], []], NaN));
  testedData.push(testMatrixMultiply([[1]], [[1]], [[1]]));
  testedData.push(testMatrixMultiply([], [], []));
  testedData.push(testMatrixMultiply([[1, 2], [3, 4]], [[5, 6], [7, 8], [2, 9]],
    NaN));

  createTestsTable(headers, testedData);
}

testAll();
