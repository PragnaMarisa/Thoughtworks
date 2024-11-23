// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 7;
// Print the series till nth Fibonacci term
// Example if n = 7, then the output should be
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let nSeries = 0;
let nPlus1Series = 1;

for (let termCounter = 0; termCounter < n; termCounter++){
    console.log(nSeries);
    let nPlus2Series = nSeries + nPlus1Series;
    nSeries = nPlus1Series;
    nPlus1Series = nPlus2Series;  
}
