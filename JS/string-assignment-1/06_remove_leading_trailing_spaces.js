// Do not rename string, use it as input for your program.
// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "abcba";
// Remove spaces at the start and end of the given string
// If string = " spaces at the start and the end "
// Then print "spaces at the start and the end"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
const stringLength = string.length;
let resultString = '';
let isStartingCharFound = false;
let isEndingCharFound = false;
let endIndex = stringLength;
let startIndex = -1;

while (isStartingCharFound === false) {
    isStartingCharFound = string[startIndex + 1] !== ' ';
    startIndex++; 
}

while (isEndingCharFound === false) {
    endIndex--;
    isEndingCharFound = string[endIndex] !== ' '; 
}

for (let currentIndex = startIndex; currentIndex <= endIndex; currentIndex++) {
    resultString = resultString + string[currentIndex];
}

console.log(resultString);
