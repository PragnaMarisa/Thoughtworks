// Do not rename it, use this as input for your program.
// While testing we will change its value.
const n = 5;
// print factorial of n.
// Do not print anything else. Printing more than one output or printing anything other than factorial might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let factorial = 1;

for (let number = 1; number <= n; number++) {
    factorial = factorial * number;
}

console.log(factorial);
