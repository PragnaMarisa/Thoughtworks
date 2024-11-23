// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 153;
// Print true if a is an armstrong number otherwise print false
// A number is called Armstrong number if it is equal to the sum of the cubes of its own digits.
// For example: 153 is an Armstrong number since 153 = 1^3 + 5^3 + 3^3.
// Printing more than one output or printing anything other than armstrong or not armstrong might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let quotient = a;

let digitCount = 1;
let largestNumber = 10;
while (largestNumber < a) {
    digitCount++;
    largestNumber *= 10; 
}

let sumOfPowerOfDigits = 0;
while (quotient != 0) {
    const remainder = quotient % 10;
    quotient = (quotient - remainder) / 10
    sumOfPowerOfDigits += (remainder ** digitCount);
}

const isAmstrong = (sumOfPowerOfDigits === a);
console.log(isAmstrong);
