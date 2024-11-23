// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'abcdef';
// Print the number of vowles in given string. Consider case sensitivity.
// If string = "abcdefghi" then output should be 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
const stringLength = string.length;
let countOfVowels = 0;

for (let currentIndex = 0; currentIndex < stringLength; currentIndex++) {
    switch (string[currentIndex]) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
            countOfVowels++;
    }
}

console.log(countOfVowels);
