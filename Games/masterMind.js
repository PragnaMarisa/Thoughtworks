const colorCode = '🔵 = b, ⚪️ = w, 🟠 = o, 🔴 = r, 🟣 = p, 🟡 = y, 🟢 = g';
const pegCodes = 'bworpyg';

function greetUser() {
  console.log("Welcome to the MasterMind Game!");
}

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

function getEmojiFromStart(string, target, start) {
  if (start >= string.length) {
    return -1;
  }

  if (string[start] + string[start + 1] === target) {
    return start;
  }

  return getEmojiFromStart(string, target, start + 2);
}

function findEmoji(string, char) {
  return getEmojiFromStart(string, char, 0);
}

function createStringOfNumbers(noOfPos) {
  if (noOfPos === 0) {
    return '';
  }

  return createStringOfNumbers(noOfPos - 1) + ' ' + noOfPos;
}

function getAlpha(code) {
  return pegCodes[code - 1];
}

function codeMaker(secretCode, start, noOfPegs) {
  if (start === noOfPegs) {
    return secretCode;
  }

  const alpha = getAlpha(Math.ceil((Math.random() * 10) % 7));

  if (findIndex(secretCode, alpha) === -1) {
    secretCode = secretCode + alpha;
    start += 1;
  }

  return codeMaker(secretCode, start, noOfPegs);
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

  const codePeg = codePegs[start] + codePegs[start + 1];
  const secretPeg = secretPegs[start] + secretPegs[start + 1];

  const validPosition = codePeg === secretPeg;
  const validColor = findEmoji(secretPegs, codePeg) !== -1;

  if (validColor && !validPosition) {
    scoringPegs = '𖡡' + scoringPegs;
  }

  scoringPegs += validPosition ? '📍' : '';

  return getFeedback(codePegs, secretPegs, start + 2, scoringPegs);
}

function getScoringPegs(codePegs, secretPegs) {
  return getFeedback(codePegs, secretPegs, 0, '');
}

function getDecodingBoard(codePegs, scoringPegs, decodingBoard) {
  decodingBoard += codePegs + '\t\t\t\t\t' + scoringPegs + '\n';
  return decodingBoard;
}

function displayInstructions() {
  console.log('\n' + colorCode);
  console.log('\n📍 indicates right color in correct position.')
  console.log('𖤥 indicates right color in wrong position.')
}

function startGame(codeBreaker, scoringPegs, secretPegs, display) {
  let codePegs = prompt("\nEnter the sequence : ");

  if (findIndex(pegCodes, codePegs[0]) !== -1) {
    codePegs = getCodedPegs(codePegs, 0);
  }

  console.clear();
  displayInstructions();

  scoringPegs = getScoringPegs(codePegs, secretPegs);

  const decodingBoard = getDecodingBoard(codePegs, scoringPegs, display);
  console.log(decodingBoard);

  if (codePegs === secretPegs) {
    console.log("\nCongratulations!!! 🥳" + codeBreaker + '.🥳');
    return 0;
  }

  return startGame(codeBreaker, scoringPegs, secretPegs, decodingBoard);
}

function prepareGame() {
  const codeBreaker = prompt("Enter you Name: ");
  const noOfPegs = +(prompt("How many Pegs do You want: "));

  displayInstructions();

  const secretCode = codeMaker('', 0, noOfPegs);
  const secretPegs = getCodedPegs(secretCode, 0);
  console.log(secretPegs)

  const decodingBoard = getDecodingBoard(createStringOfNumbers(noOfPegs), 'Scoring Pegs', '');
  startGame(codeBreaker, '', secretPegs, decodingBoard);
}

function runGame() {
  greetUser();

  const willUserPlay = confirm("Do you want to play?");

  if (!willUserPlay) {
    console.log("I can understand it!! come back soon..");
  }

  prepareGame();
}

runGame();
