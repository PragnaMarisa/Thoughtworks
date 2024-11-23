// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "abcba";
// Replace duplicate spaces with single space
// If string = "statement      with    two spaces"
// Then print "statement with two spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let spaceCount = -1;
let resultString = '';

for (let currentIndex = 0; currentIndex < string.length; currentIndex++) {
    const isSpace = string[currentIndex] === ' ' ? spaceCount + 1 : -1;
    spaceCount = isSpace;
    if (spaceCount <= 0 ) {
        resultString = resultString + string[currentIndex];
    }
}

console.log(resultString);
