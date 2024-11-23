const colorCode = '🔵 = b, ⚪️ = w, 🟠 = o, 🔴 = r, 🟣 = p, 🟡 = y, 🟢 = g';
const pegCodes = 'bworpyg';

function getIndexFromStart(string, target, start) {
  if (start === string.length) {
    return -1;
  }

  if (string[start] === target) {
    return start;
  }

  return getIndexFromStart(string, target, start + 1);
}

function findIndex(string, char) {
  return getIndexFromStart(string, char, 0);
}

function createStringOfNumbers(noOfPos) {
  if (noOfPos === 0) {
    return '';
  }

  return createStringOfNumbers(noOfPos - 1) + noOfPos + ' ';
}

function getAlpha(code) {
  return pegCodes[code - 1];
}

function getRandomInt(from, to) {
  return Math.ceil((Math.random() * (from + to - 1)) + from);
}

function makeCode(secretCode, start, noOfPegs) {
  if (start === noOfPegs) {
    return secretCode;
  }

  const alpha = getAlpha(getRandomInt(1, 7));

  if (findIndex(secretCode, alpha) === -1) {
    secretCode = secretCode + alpha;
    start += 1;
  }

  return makeCode(secretCode, start, noOfPegs);
}

function getColoredPegs(secretCode) {
  switch (secretCode) {
    case 'b': return '🔵';
    case 'w': return '⚪️';
    case 'o': return '🟠';
    case 'r': return '🔴';
    case 'p': return '🟣';
    case 'y': return '🟡';
    case 'g': return '🟢';
  }
}

function getCodedPegs(codePegs, start) {
  if (start === codePegs.length) {
    return '';
  }

  return getColoredPegs(codePegs[start]) + getCodedPegs(codePegs, start + 1);
}

function getFeedback(codePegs, secretPegs, start, scoringPegs) {
  if (start === codePegs.length) {
    return scoringPegs;
  }

  const validPosition = codePegs[start] === secretPegs[start];
  const validColor = findIndex(secretPegs, codePegs[start]) !== -1;

  if (validColor && !validPosition) {
    scoringPegs = '𖡡' + scoringPegs;
  }

  scoringPegs += validPosition ? '📍' : '';

  return getFeedback(codePegs, secretPegs, start + 1, scoringPegs);
}

function getScoringPegs(codePegs, secretPegs) {
  return getFeedback(codePegs, secretPegs, 0, '');
}

function getDecodingBoard(codePegs, scoringPegs, decodingBoard) {
  decodingBoard += codePegs + '\t\t' + scoringPegs + '\n';
  return decodingBoard;
}

function displayInstructions() {
  console.log('\n' + colorCode + '\n');
  console.log('📍 indicates right color in correct position.');
  console.log('𖤥 indicates right color in wrong position.\n');
}

function validateInput(input, string, start) {
  const char = input[start];
  if (start === input.length) {
    return true;
  }

  if (findIndex(pegCodes, char) !== -1 && findIndex(string, char) === -1) {
    string += char;
    return validateInput(input, string, start + 1);
  }

  return false;
}

function getUserInput(noOfPegs) {
  const input = prompt("\nEnter the sequence : ");
  if (validateInput(input, '', 0) && input.length === noOfPegs) {
    return input;
  }

  console.log("Enter a valid Input.");
  return getUserInput();
}

function startGame(codeBreaker, scoringPegs, secretPegs, display, noOfPegs) {
  const codePegs = getUserInput(noOfPegs, secretPegs);
  const coloredPegs = getCodedPegs(codePegs, 0);

  console.clear();
  displayInstructions();

  scoringPegs = getScoringPegs(codePegs, secretPegs);

  const decodingBoard = getDecodingBoard(coloredPegs, scoringPegs, display);
  console.log(decodingBoard);

  if (codePegs === secretPegs) {
    return "\nCongratulations!!! 🥳" + codeBreaker + '.🥳';
  }

  return startGame(codeBreaker, scoringPegs, secretPegs, decodingBoard, noOfPegs);
}

function getPlayerName() {
  return prompt("Enter you Name: ");
}

function getNoOfPegs() {
  const noOfPegs = +(prompt("How many Pegs do You want: "));

  return noOfPegs < 8 && noOfPegs > 0 ? noOfPegs : getNoOfPegs();
}

function prepareGame() {
  const codeBreaker = getPlayerName();
  const noOfPegs = getNoOfPegs();

  displayInstructions();

  const secretCode = makeCode('', 0, noOfPegs);
  // console.log(secretCode);

  const postionHeader = createStringOfNumbers(noOfPegs);
  const decodingBoard = getDecodingBoard(postionHeader, 'Scoring Pegs', '');
  return startGame(codeBreaker, '', secretCode, decodingBoard, noOfPegs);
}

function runGame() {
  console.log("Welcome to the MasterMind Game!");
  return prepareGame();
}

console.log(runGame());
