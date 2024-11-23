// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "abcba";
// Replace all spaces with underscore "_"
// If string = "statement with spaces"
// Then print "statement_with_spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
const stringLength = string.length;
let resultString = "";

for (let currentIndex = 0; currentIndex < stringLength; currentIndex++) {
    const character = string[currentIndex] === ' ' ? '_' : string[currentIndex];
    resultString = resultString + character;
}

console.log(resultString);
