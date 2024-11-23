function getReplacedString(text, length, target, replacement) {
  if (length === text.length) {
    return '';
  }

  const char = text[length] === target ? replacement : text[length];

  return char + getReplacedString(text, length + 1, target, replacement);
}

function replace(text, target, replacement) {
  return getReplacedString(text, 0, target, replacement);
}

function makeMessage(string, target, replacement, actual, expected) {
  const contextSegment = 'In String "' + string + '" "' + target + '" is ';
  const expectationSegment = 'replaced with "' + replacement + '"\n Expected:"';
  const actualSegment = expected + '"\n Actual:"' + actual + '"';

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testReplace(string, target, replacement, expected) {
  const actual = replace(string, target, replacement);
  const isPassed = actual === expected;
  const message = makeMessage(string, target, replacement, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testReplace('hello', 'l', '!', 'he!!o');
  testReplace('', 'l', '!', '');
  testReplace('hello', 's', '!', 'hello');
  testReplace('hello', 'l', '', 'heo');
  testReplace('h e l l o', ' ', '_', 'h_e_l_l_o');
}

testAll();
