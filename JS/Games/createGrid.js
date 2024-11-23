const SIDE_BORDERS = '|';
const TOP_BORDERS = '-';

function getHorizontalLine(lengthOfLine) {
  if (lengthOfLine === 0) {
    return '';
  }

  return '-' + getHorizontalLine(lengthOfLine - 1);
}

function createRow(columns) {
  if (columns === 0) {
    return SIDE_BORDERS;
  }
  const cell =  SIDE_BORDERS + '     ';
  return cell + createRow(columns - 1);
}

function createtable(columns, rows, table) {
  let row = createRow(columns);
  table += '\n' + getHorizontalLine(row.length) + '\n' + row;
  
  if (rows === 1) {
    table += '\n' + getHorizontalLine(row.length) + '\n';
    return table;
  }

  return createtable(columns, rows - 1, table);
}

function createGrid(columns, rows) {
  let table = '';
  table += createtable(columns, rows, '');
  return table;
}

console.log(createGrid(9,8));
