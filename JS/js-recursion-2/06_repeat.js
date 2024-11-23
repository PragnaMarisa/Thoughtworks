function repeat(string, noOfTimes) {
  if (noOfTimes === 0) {
    return '';
  }

  return string + repeat(string, noOfTimes - 1);
}

function makeMessage(string, count, actual, expected) {
  const contextSegment = 'String "' + string + '" repeated "' + count;
  const expectationSegment = '" times\n  Expected: ' + expected;
  const actualSegment = "\n  Actual: " + actual;

  return contextSegment + expectationSegment + actualSegment;
}

function getMark(isPassed) {
  return isPassed ? '✅' : '❌';
}

function testRepeat(string, count, expected) {
  const actual = repeat(string, count);
  const isPassed = actual === expected;
  const message = makeMessage(string, count, actual, expected);

  console.log(getMark(isPassed), message);
}

function testAll() {
  testRepeat('a ', 3, 'a a a ');
  testRepeat(' ', 3, '   ');
  testRepeat('', 3, '');
  testRepeat('hello', 3, 'hellohellohello');
  testRepeat('lo', 0, '');
  testRepeat('lo', 1, 'lo');
  testRepeat('lo', 1, 'lo');
  testRepeat('sheela', 2, 'sheelasheela');
}

testAll();
