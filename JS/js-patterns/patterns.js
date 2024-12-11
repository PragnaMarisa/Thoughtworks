const SPACE = ' ';
const NEWLINE = '\n';
const STAR = '*';
const HYPHEN = '-';

const FILLEDRECTANGLE = 'filled-rectangle';
const HOLLOWRECTANGLE = 'hollow-rectangle';
const ALTERNATINGRECTANGLE = 'alternating-rectangle';
const SPACEDATERNATINGRECTANGLE = 'spaced-alternating-rectangle';
const TRIANGLE = 'triangle';
const RIGHTANGLEDTRIANGLE = 'right-aligned-triangle';
const DIAMOND = 'diamond';
const HOLLOWDIAMOND = 'hollow-diamond';

function filledLine(length, char) {
  return char.repeat(length);
}

function spaces(length) {
  return length < 1 ? '' : filledLine(length, SPACE);
}

function getHollowLine(columns, char) {
  let line = char + spaces(columns - 2);

  if (columns < 2) {
    return line;
  }

  return line + char;
}

function padEndAnArray(array, length) {
  const paddedArray = [];

  for (const row of array) {
    paddedArray.push(row.padEnd(length));
  }

  return paddedArray;
}

function getHollowOrFilledLine(isHollow, columns, char) {
  if (isHollow) {
    return getHollowLine(columns, char);
  }

  return filledLine(columns, char);
}

function getMaxLengthOfRow(array) {
  let maxLength = 0;

  for (const row of array) {
    maxLength = maxLength < row.length ? row.length : maxLength;
  }

  return maxLength;
}

function makeArrayOfLength(array1, length) {
  const newArray = array1;

  for (let index = array1.length; index < length; index++) {
    newArray.push('');
  }

  return newArray;
}

// Rectangle

function drawRectangle(dimensions, chars) {
  const columns = dimensions[0];
  const rows = dimensions[1];
  const rectangle = [];

  for (let row = 0; row < rows; row++) {
    const char = chars[row % chars.length]
    rectangle.push(filledLine(columns, char));
  }

  return rectangle;
}

// Filled Rectangle

function drawFilledRectangle(dimensions) {
  const chars = [STAR];

  return drawRectangle(dimensions, chars);
}

// Hollow Rectangle

function drawHollowRectangle(dimensions) {
  const columns = dimensions[0];
  const rows = dimensions[1];
  const rectangle = [];

  if (rows < 3 || columns < 3) {
    return drawFilledRectangle(dimensions);
  }

  for (let index = 1; index < rows - 1; index++) {
    rectangle.push(getHollowLine(columns, STAR));
  }

  rectangle.unshift(filledLine(columns, STAR));
  rectangle.push(filledLine(columns, STAR));

  return rectangle;
}

// Alternating Rectangle

function drawAlternatingRectangle(dimensions) {
  const chars = [STAR, HYPHEN];

  return drawRectangle(dimensions, chars);
}

// Spaced Alternating Rectangle

function drawSpacedAlternatingRectangle(dimensions) {
  const chars = [STAR, HYPHEN, SPACE];

  return drawRectangle(dimensions, chars);
}

// Triangle

function drawTriangle(dimensions) {
  const height = dimensions[0];
  const triangle = [];

  for (let count = 1; count <= height; count++) {
    triangle.push(filledLine(count, STAR));
  }

  return triangle;
}

// Right Angled Triangle

function drawRightAngledTriangle(dimensions) {
  const height = dimensions[0];
  const rightAngledTriangle = [];

  for (let count = 1; count <= height; count++) {
    const line = filledLine(count, STAR);
    rightAngledTriangle.push(line.padStart(height, SPACE));
  }

  return rightAngledTriangle;
}

// Equilateral Triangle

function drawEquilateralTriangle(base, isHollow) {
  const equilteralTriangle = [];
  let spaceToBePadded = Math.ceil(base / 2);

  for (let count = 1; count <= base; count += 2) {
    const line = getHollowOrFilledLine(isHollow, count, STAR);
    const paddedLine = line.padStart(spaceToBePadded, SPACE);

    equilteralTriangle.push(paddedLine);
    spaceToBePadded++;
  }

  return equilteralTriangle;
}

// Diamond 1 Reversing the triangle and forming the diamond

function drawDiamond1(dimensions, isHollow) {
  const height = dimensions[0];
  const oddDimension = height - ((height + 1) & 1);
  const diamond = [];

  const topDiamond = drawEquilateralTriangle(oddDimension, isHollow);

  if (oddDimension === 1) {
    return topDiamond;
  }

  let bottomDiamond = drawEquilateralTriangle(oddDimension, isHollow);
  bottomDiamond.pop();
  bottomDiamond = bottomDiamond.reverse().join(NEWLINE);

  diamond.push(topDiamond, bottomDiamond);

  return diamond.join('\n');
}

// Diamond 2

function drawDiamond(dimensions, isHollow) {
  const height = dimensions[0];
  const oddDimension = height - ((height + 1) & 1);
  let spaceToBePadded = oddDimension - 1;
  const diamond = [getHollowOrFilledLine(isHollow, oddDimension, STAR)];

  for (let count = oddDimension - 2; count >= 1; count -= 2) {
    const line = getHollowOrFilledLine(isHollow, count, STAR);
    const paddedLine = line.padStart(spaceToBePadded, SPACE);


    diamond.push(paddedLine);
    diamond.unshift(paddedLine);

    spaceToBePadded--;
  }

  return diamond;
}

// Filled Diamond

function drawFilledDiamond(dimensions) {
  return drawDiamond(dimensions, false);
}

// Hollow Diamond

function drawHollowDiamond(dimensions) {
  return drawDiamond(dimensions, true);
}

function areDimensionsGreaterThanZero(dimensions) { //areDimensionsPositive
  for (const dimension of dimensions) {
    if (dimension < 1) {
      return false;
    }
  }

  return true;
}

function getPattern(style, dimensions) {

  const styleNamesToFn = [
    [FILLEDRECTANGLE, drawFilledRectangle],
    [HOLLOWRECTANGLE, drawHollowRectangle],
    [ALTERNATINGRECTANGLE, drawAlternatingRectangle],
    [SPACEDATERNATINGRECTANGLE, drawSpacedAlternatingRectangle],
    [TRIANGLE, drawTriangle],
    [RIGHTANGLEDTRIANGLE, drawRightAngledTriangle],
    [DIAMOND, drawFilledDiamond],
    [HOLLOWDIAMOND, drawHollowDiamond]
  ];

  for (const [styleName, styleFunctionCall] of styleNamesToFn) {
    if (styleName === style) {
      return styleFunctionCall(dimensions);
    }
  }

  return '';
}

function joinPatterns(style1, style2) {
  const paddedStyle1 = padEndAnArray(style1, getMaxLengthOfRow(style1));
  console.log(paddedStyle1);

  const maxLength = Math.max(style1.length, style2.length);
  const joinedArrays = [];

  for (let index = 0; index < maxLength; index++) {
    joinedArrays.push(paddedStyle1[index].concat(SPACE, style2[index]));
  }

  return joinedArrays;
}

function generatePattern(style, dimensions, secondStyle) {
  if (!areDimensionsGreaterThanZero(dimensions)) {
    return '';
  }

  const style1 = getPattern(style, dimensions);
  const style2 = getPattern(secondStyle, dimensions);


  if (style2 === '') {
    return style1.join('\n');
  }

  let finalPatterns = makeArrayOfLength(style1, style2.length);
  finalPatterns = joinPatterns(finalPatterns, style2);

  return finalPatterns.join(NEWLINE);
}

function testGeneratePattern(style, dimensions, secondStyle, expected, failed) {
  const actual = generatePattern(style, dimensions, secondStyle);

  if (actual !== expected) {
    console.log(actual);

    failed.push([style, dimensions, secondStyle, actual, expected]);
  }
}

function testFilledRectangle() {
  const testCases = [
    ['filled-rectangle', [0, 0], '', ''],
    ['filled-rectangle', [1, 0], '', ''],
    ['filled-rectangle', [0, 1], '', ''],
    ['filled-rectangle', [1, 1], '', '*'],
    ['filled-rectangle', [2, 4], '', "**\n**\n**\n**"],
    ['filled-rectangle', [3, 4], '', "***\n***\n***\n***"]
  ];

  return testCases;
}

function testHollowRectangle() {
  const testCases = [
    ['hollow-rectangle', [0, 0], '', ''],
    ['hollow-rectangle', [1, 0], '', ''],
    ['hollow-rectangle', [0, 1], '', ''],
    ['hollow-rectangle', [1, 1], '', '*'],
    ['hollow-rectangle', [5, 1], '', '*****'],
    ['hollow-rectangle', [1, 5], '', '*\n*\n*\n*\n*'],
    ['hollow-rectangle', [6, 2], '', '******\n******'],
    ['hollow-rectangle', [5, 4], '', '*****\n*   *\n*   *\n*****'],
    ['hollow-rectangle', [4, 3], '', '****\n*  *\n****']
  ];

  return testCases;
}

function testAlternatingRectangle() {
  const testCases = [
    ['alternating-rectangle', [0], '', ''],
    ['alternating-rectangle', [1, 0], '', ''],
    ['alternating-rectangle', [0, 1], '', ''],
    ['alternating-rectangle', [1, 1], '', '*'],
    ['alternating-rectangle', [1, 2], '', '*\n-'],
    ['alternating-rectangle', [4, 1], '', '****'],
    ['alternating-rectangle', [3, 3], '', '***\n---\n***'],
    ['alternating-rectangle', [5, 4], '', '*****\n-----\n*****\n-----'],
    ['alternating-rectangle', [6, 2], '', '******\n------'],
  ];

  return testCases;
}

function testTriangle() {
  const testCases = [
    ['triangle', [0], '', ''],
    ['triangle', [1], '', '*'],
    ['triangle', [2], '', '*\n**'],
    ['triangle', [3], '', '*\n**\n***'],
    ['triangle', [4], '', '*\n**\n***\n****'],
    ['triangle', [5], '', '*\n**\n***\n****\n*****'],
    ['triangle', [6], '', '*\n**\n***\n****\n*****\n******'],
    ['triangle', [7], '', '*\n**\n***\n****\n*****\n******\n*******']
  ];

  return testCases;
}

function testRightAngledTriangle() {
  const testCases = [
    ['right-aligned-triangle', [0], '', ''],
    ['right-aligned-triangle', [1], '', '*'],
    ['right-aligned-triangle', [2], '', ' *\n**'],
    ['right-aligned-triangle', [3], '', '  *\n **\n***'],
    ['right-aligned-triangle', [4], '', '   *\n  **\n ***\n****'],
    ['right-aligned-triangle', [5], '', '    *\n   **\n  ***\n ****\n*****'],
    ['right-aligned-triangle', [6], '',
      '     *\n    **\n   ***\n  ****\n *****\n******'],
    ['right-aligned-triangle', [7], '',
      '      *\n     **\n    ***\n   ****\n  *****\n ******\n*******']
  ];

  return testCases;
}

function testSpacedAlternatingRectangle() {
  const testCases = [
    ['spaced-alternating-rectangle', [0, 0], '', ''],
    ['spaced-alternating-rectangle', [0, 1], '', ''],
    ['spaced-alternating-rectangle', [1, 0], '', ''],
    ['spaced-alternating-rectangle', [1, 1], '', '*'],
    ['spaced-alternating-rectangle', [1, 3], '', '*\n-\n '],
    ['spaced-alternating-rectangle', [1, 2], '', '*\n-'],
    ['spaced-alternating-rectangle', [2, 3], '', '**\n--\n  '],
    ['spaced-alternating-rectangle', [4, 3], '', '****\n----\n    '],
  ];

  return testCases;
}

function testFilledDiamond() {
  const testCases = [
    ['diamond', [0], '', ''],
    ['diamond', [1], '', '*'],
    ['diamond', [2], '', '*'],
    ['diamond', [3], '', ' *\n***\n *'],
    ['diamond', [4], '', ' *\n***\n *'],
    ['diamond', [5], '', '  *\n ***\n*****\n ***\n  *'],
    ['diamond', [6], '', '  *\n ***\n*****\n ***\n  *'],
    ['diamond', [7], '', '   *\n  ***\n *****\n*******\n *****\n  ***\n   *']
  ];

  return testCases;
}

function testHollowDiamond() {
  const testCases = [
    ['hollow-diamond', [0], '', ''],
    ['hollow-diamond', [1], '', '*'],
    ['hollow-diamond', [2], '', '*'],
    ['hollow-diamond', [3], '', ' *\n* *\n *'],
    ['hollow-diamond', [4], '', ' *\n* *\n *'],
    ['hollow-diamond', [5], '', '  *\n * *\n*   *\n * *\n  *'],
    ['hollow-diamond', [6], '', '  *\n * *\n*   *\n * *\n  *'],
    ['hollow-diamond', [7], '', '   *\n  * *\n *   *\n*     *\n *   *\n  * *\n   *']
  ];

  return testCases;
}

function testFilledRectangleAndHollowRectangle() {
  const testCases = [
    ['filled-rectangle', [0, 0], 'hollow-rectangle', ''],
    ['filled-rectangle', [1, 0], 'hollow-rectangle', ''],
    ['filled-rectangle', [0, 1], 'hollow-rectangle', ''],
    ['filled-rectangle', [1, 1], 'hollow-rectangle', '* *'],
    ['filled-rectangle', [2, 4], 'hollow-rectangle', "** **\n** **\n** **\n** **"],
    ['filled-rectangle', [3, 4], 'hollow-rectangle', "*** ***\n*** * *\n*** * *\n*** ***"]
  ];

  return testCases;
}

function testFilledRectangleAndAlternatingRectangle() {
  const testCases = [
    ['filled-rectangle', [0, 0], 'alternating-rectangle', ''],
    ['filled-rectangle', [1, 0], 'alternating-rectangle', ''],
    ['filled-rectangle', [0, 1], 'alternating-rectangle', ''],
    ['filled-rectangle', [1, 1], 'alternating-rectangle', '* *'],
    ['filled-rectangle', [2, 4], 'alternating-rectangle', '** **\n** --\n** **\n** --'],
    ['filled-rectangle', [3, 4], 'alternating-rectangle', '*** ***\n*** ---\n*** ***\n*** ---']
  ];

  return testCases;
}

function testFilledRectangleAndSpacedAlternatingRectangle() {
  const testCases = [
    ['filled-rectangle', [0, 0], 'spaced-alternating-rectangle', ''],
    ['filled-rectangle', [1, 0], 'spaced-alternating-rectangle', ''],
    ['filled-rectangle', [0, 1], 'spaced-alternating-rectangle', ''],
    ['filled-rectangle', [1, 1], 'spaced-alternating-rectangle', '* *'],
    ['filled-rectangle', [2, 4], 'spaced-alternating-rectangle', "** **\n** --\n**   \n** **"],
    ['filled-rectangle', [3, 4], 'spaced-alternating-rectangle', "*** ***\n*** ---\n***    \n*** ***"]
  ];

  return testCases;
}

function testHollowRectangleAndAlternatingRectangle() {
  const testCases = [
    ['hollow-rectangle', [0, 0], 'alternating-rectangle', ''],
    ['hollow-rectangle', [1, 0], 'alternating-rectangle', ''],
    ['hollow-rectangle', [0, 1], 'alternating-rectangle', ''],
    ['hollow-rectangle', [1, 1], 'alternating-rectangle', '* *'],
    ['hollow-rectangle', [5, 1], 'alternating-rectangle', '***** *****'],
    ['hollow-rectangle', [1, 5], 'alternating-rectangle',
      '* *\n* -\n* *\n* -\n* *'],
    ['hollow-rectangle', [6, 2], 'alternating-rectangle',
      '****** ******\n****** ------'],
    ['hollow-rectangle', [5, 4], 'alternating-rectangle',
      '***** *****\n*   * -----\n*   * *****\n***** -----'],
    ['hollow-rectangle', [4, 3], 'alternating-rectangle',
      '**** ****\n*  * ----\n**** ****']
  ];

  return testCases;
}

function testHollowRectangleAndSpacedAlternatingRectangle() {
  const testCases = [
    ['hollow-rectangle', [0, 0], 'spaced-alternating-rectangle', ''],
    ['hollow-rectangle', [1, 0], 'spaced-alternating-rectangle', ''],
    ['hollow-rectangle', [0, 1], 'spaced-alternating-rectangle', ''],
    ['hollow-rectangle', [1, 1], 'spaced-alternating-rectangle', '* *'],
    ['hollow-rectangle', [5, 1], 'spaced-alternating-rectangle', '***** *****'],
    ['hollow-rectangle', [1, 5], 'spaced-alternating-rectangle',
      '* *\n* -\n*  \n* *\n* -'],
    ['hollow-rectangle', [6, 2], 'spaced-alternating-rectangle',
      '****** ******\n****** ------'],
    ['hollow-rectangle', [5, 4], 'spaced-alternating-rectangle',
      '***** *****\n*   * -----\n*   *      \n***** *****'],
    ['hollow-rectangle', [4, 3], 'spaced-alternating-rectangle',
      '**** ****\n*  * ----\n****     ']
  ];

  return testCases;
}

function testRightAngledTriangleAndTriangle() {
  const testCases = [
    ['right-aligned-triangle', [0], 'triangle', ''],
    ['right-aligned-triangle', [1], 'triangle', '* *'],
    ['right-aligned-triangle', [2], 'triangle', ' * *\n** **'],
    ['right-aligned-triangle', [3], 'triangle', '  * *\n ** **\n*** ***'],
    ['right-aligned-triangle', [4], 'triangle',
      "   * *\n  ** **\n *** ***\n**** ****"],
    ['right-aligned-triangle', [5], 'triangle',
      "    * *\n   ** **\n  *** ***\n **** ****\n***** *****"],
    ['right-aligned-triangle', [6], 'triangle',
      "     * *\n    ** **\n   *** ***\n  **** ****\n ***** *****\n****** ******"],
    ['right-aligned-triangle', [7], 'triangle',
      "      * *\n     ** **\n    *** ***\n   **** ****\n  ***** *****\n ****** ******\n******* *******"]
  ];

  return testCases;
}

function testFilledDiamondAndHollowDiamond() {
  const testCases = [
    ['diamond', [0], 'hollow-diamond', ''],
    ['diamond', [1], 'hollow-diamond', '* *'],
    ['diamond', [2], 'hollow-diamond', '* *'],
    ['diamond', [3], 'hollow-diamond', ' *   *\n*** * *\n *   *'],
    ['diamond', [4], 'hollow-diamond', ' *   *\n*** * *\n *   *'],
    ['diamond', [5], 'hollow-diamond',
      '  *     *\n ***   * *\n***** *   *\n ***   * *\n  *     *'],
    ['diamond', [6], 'hollow-diamond',
      '  *     *\n ***   * *\n***** *   *\n ***   * *\n  *     *'],
    ['diamond', [7], 'hollow-diamond',
      '   *       *\n  ***     * *\n *****   *   *\n******* *     *\n *****   *   *\n  ***     * *\n   *       *']
  ];

  return testCases;
}

function testFilledDiamondAndTriangle() {
  const testCases = [
    ['diamond', [0], 'triangle', ''],
    ['diamond', [1], 'triangle', '* *'],
    ['diamond', [2], 'triangle', '* *'],
    ['diamond', [3], 'triangle', ' *   *\n*** * *\n *   *'],
    ['diamond', [4], 'triangle', ' *   *\n*** * *\n *   *'],
    ['diamond', [5], 'triangle',
      '  *     *\n ***   * *\n***** *   *\n ***   * *\n  *     *'],
    ['diamond', [6], 'triangle',
      '  *     *\n ***   * *\n***** *   *\n ***   * *\n  *     *'],
    ['diamond', [7], 'triangle',
      '   *       *\n  ***     * *\n *****   *   *\n******* *     *\n *****   *   *\n  ***     * *\n   *       *']
  ];

  return testCases;
}

function runTestCases(testCases, failed) {
  for (const testCase of testCases) {
    testGeneratePattern(testCase[0], testCase[1], testCase[2], testCase[3], failed);
  }
}

function runTestCasesReverse(testCases, failed) {
  for (const testCase of testCases) {
    testGeneratePattern(testCase[2], testCase[1], testCase[0], testCase[3], failed);
  }
}

function testAll() {
  const failed = [];

  runTestCases(testFilledRectangle(), failed);
  runTestCases(testHollowRectangle(), failed);
  runTestCases(testAlternatingRectangle(), failed);
  runTestCases(testTriangle(), failed);
  runTestCases(testRightAngledTriangle(), failed);
  runTestCases(testSpacedAlternatingRectangle(), failed);
  runTestCases(testFilledDiamond(), failed);
  runTestCases(testHollowDiamond(), failed);

  runTestCases(testFilledRectangleAndHollowRectangle(), failed);
  // runTestCasesReverse(testFilledRectangleAndHollowRectangle(), failed);

  runTestCases(testFilledRectangleAndAlternatingRectangle(), failed);
  // runTestCasesReverse(testFilledRectangleAndAlternatingRectangle(), failed);

  runTestCases(testFilledRectangleAndSpacedAlternatingRectangle(), failed);
  // runTestCasesReverse(testFilledRectangleAndSpacedAlternatingRectangle(), failed);

  runTestCases(testHollowRectangleAndAlternatingRectangle(), failed);
  // runTestCasesReverse(testHollowRectangleAndAlternatingRectangle(), failed);

  runTestCases(testHollowRectangleAndSpacedAlternatingRectangle(), failed);

  runTestCases(testRightAngledTriangleAndTriangle(), failed);
  // runTestCasesReverse(testRightAngledTriangleAndTriangle(), failed);

  runTestCases(testFilledDiamondAndHollowDiamond(), failed);
  // runTestCasesReverse(testFilledDiamondAndHollowDiamond(), failed);

  // runTestCases(testFilledDiamondAndTriangle(), failed);
  // runTestCasesReverse(testFilledDiamondAndTriangle(), failed);

  console.table(failed);
}

testAll();
