// Do not rename a and b, use them as input for your program.
// a and b will be whole numbers.
// While testing we will change their values.
const a = 12;
const b = 18;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let divident = a;
let divisor = b;

if (a > b) {
    divident = b;
    divisor = a;
}

let remainder = divisor;
while (remainder > 0) {
    divisor = remainder;
    remainder = divident % divisor;
    divident = divisor
}

const hcf = divisor; 
console.log(hcf);
