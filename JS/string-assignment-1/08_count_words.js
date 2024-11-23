// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'abcdef';
// Print the no.of words in given string. Consider multiple spaces.
// If string = "multiple words" then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let countOfWords = 0;
let beforeCharacter = ' ';
const SPACE = ' ';

for (let currentIndex = 0; currentIndex < string.length; currentIndex++) {
    const isSpaceValid = beforeCharacter === SPACE;
    if (string[currentIndex] !== SPACE && isSpaceValid) {
        countOfWords = countOfWords + 1;
    }
    beforeCharacter = string[currentIndex];
}
console.log(countOfWords);
