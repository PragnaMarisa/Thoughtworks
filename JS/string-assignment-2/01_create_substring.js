// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "this is a statement";
const start = 3;
const end = 9;
// Print the substring from the given string using start index and end index.
// If string = "this is a statement", start = 3 and end = 9, then print "s is a "
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let subString = '';
const startIndex = start > -1 ? start : 0;
const endIndex = end > string.length ? string.length - 1 : end;

for (let index = startIndex; index <= end && index < string.length; index++) {
    subString += string[index];
}

console.log(subString);
