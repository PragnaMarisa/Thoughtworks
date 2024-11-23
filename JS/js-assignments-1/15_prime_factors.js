// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 12;
// Print the prime factors of a
// For example, if a = 12, then the output should be
// 2
// 2
// 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let quotient = a;
let divisor = 2;

while (quotient > 1) {
    const isDivisible = (quotient % divisor === 0);
    if (!isDivisible) {
        divisor++;
        continue;
    }
    quotient = quotient / divisor;
    console.log(divisor);
}
