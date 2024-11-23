// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "this is a statement";
const subString = "is";
// Print the count of occurences of a substring in the given string
// If string = "duplicate substring statement" and subString = "ate", then print 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let countOfSubStringsMatched = 0;
let subStringIndex = 0;
let index = 0;

while (index < string.length) {
    const isSubStrCharMatched = string[index] === subString[subStringIndex];
    const isLastCharOfSubString = subStringIndex + 1 === subString.length;
    
    if (isSubStrCharMatched && isLastCharOfSubString) {
        countOfSubStringsMatched++;
        index = index - subStringIndex;
        subStringIndex = -1;
    }
    
    const isSubStrInRange = subStringIndex + 1 < subString.length;
    subStringIndex += isSubStrCharMatched && isSubStrInRange ? 1 : 0;
    index++;
}

console.log(countOfSubStringsMatched);
