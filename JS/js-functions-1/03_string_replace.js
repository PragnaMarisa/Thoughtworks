/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function getReplacement(char, match, replacement) {
  return char === match ? replacement : char;
}

function replace(text, match, replacement) {
  let replacedString = '';

  for (let index = 0; index < text.length; index++) {
    const char = text[index];
    replacedString += getReplacement(char, match, replacement);
  }

  return replacedString;
}

function makeMessage(text, match, replacement, actual, expected) {
  const contextSegment = 'In this text " ' + text + ' "  " ' + match + ' "';
  const targetSegment = ' is replaced with "' + replacement + '" expected "';
  const expectationSegment = expected + ' " result is "' + actual + '".';

  return contextSegment + targetSegment + expectationSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testReplace(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  const isPassed = actual === expected;
  const message = makeMessage(text, match, replacement, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testReplace('hello world', 'l', 'n', 'henno wornd');
  testReplace('no spaces in here', ' ', '_', 'no_spaces_in_here');
  testReplace('', 'd', 'e', '');
}

testAll();
