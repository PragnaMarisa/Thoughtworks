/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function findIndex(text, target) {
  for (let index = 0; index < text.length; index++) {
    if (text[index] === target) {
      return index;
    }
  }

  return -1;
}

function makeMessage(text, match, actual, expected) {
  const contextSegment = 'In this text " ' + text + ' "  " ' + match + ' "';
  const targetSegment = ' is found at index "' + actual + '" expected "';
  const expectationSegment = expected + '".';

  return contextSegment + targetSegment + expectationSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testFindIndex(text, match, expected) {
  const actual = findIndex(text, match);
  const isPassed = actual === expected;
  const message = makeMessage(text, match, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testFindIndex('hello world', 'o', 4);
  testFindIndex('repeating iiiiiiii', 'i', 6);
  testFindIndex('not found', 'z', -1);
  testFindIndex('', 'p', -1);
}

testAll();
