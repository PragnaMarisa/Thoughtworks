// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "abcba";
// Print true if the given string is palindrome otherwise false
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
const stringLength = string.length;
let startIndex = 0;
let endIndex = stringLength - 1;
let isPallindrome = true;

while (startIndex < stringLength / 2 && isPallindrome) {
    isPallindrome = string[startIndex] === string[endIndex];
    startIndex++;
    endIndex--;
}

console.log(isPallindrome);
