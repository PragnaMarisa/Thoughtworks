// Do not rename startOfTheRange, endOfTheRange, use them as input for your program.
// While testing we will change their values.
const startOfTheRange = 1;
const endOfTheRange = 10;
// Print all the even numbers between startOfTheRange and endOfTheRange (both inclusive)
// For example, if startOfTheRange = 1 and endOfTheRange = 10, then the output should be
// 2
// 4
// 6
// 8
// 10
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
for (let currentNumber = startOfTheRange; currentNumber <= endOfTheRange; currentNumber++) {
    const isEven = (currentNumber % 2 === 0);
    if (isEven) {
            console.log(currentNumber);
        } 
}
