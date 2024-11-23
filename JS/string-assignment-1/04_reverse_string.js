// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'abcba';
// Reverse the given string
// If string = "reverse" then output should be "esrever"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let reversedString = "";
const stringLength = string.length;

for (let currentIndex = stringLength - 1; currentIndex >= 0; currentIndex--) {
    reversedString = reversedString + string[currentIndex];
}

console.log(reversedString);
