// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 7;

// Print the nth Fibonacci term
// Printing more than one output or printing anything other than the nth Fibonacci term might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let nSeries = 0;
let nPlus1Series = 1;

for (let termCounter = 1; termCounter < n; termCounter++) {
    let nPlus2Series = nSeries + nPlus1Series;
    nSeries = nPlus1Series;
    nPlus1Series = nPlus2Series;  
}

console.log(nSeries);
