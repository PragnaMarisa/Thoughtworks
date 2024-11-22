function isEven(number) {
  return number % 2 === 0;
}

function getHorizontalLine(lengthOfLine) {
  if (lengthOfLine === 0) {
    return '';
  }

  return '-' + getHorizontalLine(lengthOfLine - 1);
}

function createRow(columns, rowData, start) {
  let char = ' ' + rowData[start];
  if (columns === 0) {
    return '|';
  }

  if (rowData[start] === 'X' || rowData[start] === 'O') {
    char = rowData[start] === 'X'? '❌' : '⭕️';
  }

  const cell = '|   ' + char + '   ';
  return cell + createRow(columns - 1, rowData, start + 1);
}

function createtable(columns, rows, table, tableData, dataIndex) {
  let row = createRow(columns, tableData, dataIndex);
  table += '\n' + getHorizontalLine(row.length) + '\n' + row;
  
  if (rows === 1) {
    table += '\n' + getHorizontalLine(row.length) + '\n';
    return table;
  }

  return createtable(columns, rows - 1, table, tableData, dataIndex + 3);
}

function createGrid(tableData) {
  let table = '';
  table += createtable(3, 3, '', tableData, 0);
  return table;
}

const tictactoe = '123456789';

function getModifedInput(index, symbol, start, result, string) {
  let char = string[start];

  if (start === tictactoe.length) {
    return '';
  }

  if (char === string[index - 1]) {
    char = symbol;
  }

  return char + getModifedInput(index, symbol, start + 1, result, string);
}

console.log(createGrid(tictactoe));

function getPlayerInput(player) {
  return +prompt("Enter a number " + player + " : ");
}

function validateInput(index, tictactoe) {
  return tictactoe[index - 1] !== 'X' || tictactoe[index - 1] !== 'O';
}

function are3Equal(index1, index2, index3, tictactoe) {
  return tictactoe[index1] === tictactoe[index2] && tictactoe[index2] === tictactoe[index3];
}

function are3Matched(tictactoe) {
  const row1 =are3Equal(0, 1, 2, tictactoe);
  const row2 = are3Equal(3, 4, 5, tictactoe);
  const row3 = are3Equal(6, 7, 8, tictactoe);

  if (row1 || row2 || row3) {
    return true;
  }

  const column1 = are3Equal(0, 3, 6, tictactoe);
  const column2 = are3Equal(1, 4, 7, tictactoe);
  const column3 = are3Equal(2, 5, 8, tictactoe);

  if (column1 || column2 || column3) {
    return true;
  }

  const digonal1 = are3Equal(0, 4, 8, tictactoe);
  const digonal2 = are3Equal(6, 4, 2, tictactoe);

  if (digonal1 || digonal2) {
    return true;
  }

  return false;
}

function startGame(player1, player2, count, tictactoe) {
  let currentPlayer = player2 + ' "⭕️"';
  let symbol = 'O';
  if (count === 9) {
    console.log("It's a tie!!!.");
    return 0;
  }
  
  if (isEven(count)) {
    currentPlayer = player1 + ' "❌"';
    symbol = 'X';
  }

  const input = getPlayerInput(currentPlayer);

  if(validateInput(input, tictactoe)) {
    console.clear();
    tictactoe = getModifedInput(input, symbol, 0, '', tictactoe);
    console.log(createGrid(tictactoe));

    if (are3Matched(tictactoe)) {
      console.log("Congratulations!! " + currentPlayer + " you won!!");
      return 0;
    }
    return startGame(player1, player2, count + 1, tictactoe)
  }

  console.log("You can't select a block which is used. Try another..");
  return startGame(player1, player2, count, tictactoe);
}

function getPlayerName(player) {
  return prompt("Enter your name " + player + ": ");
}

function prepareGame() {
  console.log("Welcome to TicTacToe!");
  const player1 = getPlayerName('player1');
  const player2 = getPlayerName('player2');
  startGame(player1, player2, 0, tictactoe);
  console.log("Come back soon!!");
}

prepareGame();
