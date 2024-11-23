// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 3;
// Print true if a is prime otherwise print false
// Printing more than one output or printing anything other than prime or not prime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let isPrime = a > 1;

for (let divisor = 2; divisor <= (a / 2) ; divisor++) {
    if (a % divisor === 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime);
