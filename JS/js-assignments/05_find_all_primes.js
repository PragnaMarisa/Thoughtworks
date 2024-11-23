// Do not rename startOfRange and endOfRange, use it as input for your program.
// Use them to find all prime numbers between startOfRange and endOfRange (both inclusive).
const startOfRange = 1;
const endOfRange = 10;
// Print all prime numbers between startOfRange and endOfRange
// For example, if startOfRange = 1 and endOfRange = 10, then the output should be
// 2
// 3
// 5
// 7
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
for (let currentNumber = startOfRange; currentNumber <= endOfRange; currentNumber++) {
    let isDivsible = true;

    for (let divisor = 2; divisor < currentNumber; divisor++) {
        isDivsible = ((currentNumber % divisor) === 0);
        if (isDivsible){
            break;
        }
    }

    if ((!isDivsible) || currentNumber === 2 ) {
        console.log(currentNumber);
    }
}
