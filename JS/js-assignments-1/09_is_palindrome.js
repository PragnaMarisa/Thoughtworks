// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 121;
// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let quotient = a;
let reversedNumber = 0;

while (quotient > 0) {
    const remainder = quotient % 10;
    quotient = (quotient - remainder) / 10;
    reversedNumber = (reversedNumber * 10) + remainder;
}

const isPallindrome = (a === reversedNumber);
console.log(isPallindrome);
