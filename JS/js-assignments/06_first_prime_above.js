// Do not rename a, use it as input for your program.
// a will be a whole number.
// While testing we will change its value.
const a = 13;
// Print the first prime number above a
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let quotient = a;

while ((quotient + 1) > 0) {
    quotient += 1;
    let isDivsible = quotient < 2;

    for (let divisor = 2; divisor < (a / 2); divisor++) {
      isDivsible = (quotient % divisor === 0);

      if (isDivsible) {
        isDivsible = true; 
        break;
      }
      
    }
    if (!isDivsible) {
        console.log(quotient);
        break;
    }
}
