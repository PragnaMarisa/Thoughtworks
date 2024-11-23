// Do not rename string and charToFind, use them as input for your program.
// While testing we will change their values.
const string = 'abcdef';
const charToFind = 'c';
// Print the first index of the character in given string. Consider case sensitivity.
// If character not present in string print -1
// If string = "abccdef" and charToFind = "c", then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
const stringLength = string.length;
let currentIndex = 0;
let isFound = false;

while (currentIndex < stringLength && !isFound) {
    isFound = string[currentIndex] === charToFind;
    currentIndex++;
}

const charPosition = isFound === true ? currentIndex - 1 : -1;
console.log(charPosition);
