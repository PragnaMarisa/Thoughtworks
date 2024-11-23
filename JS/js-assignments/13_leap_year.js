// Do not rename year, use it as input for your program.
// year will be a natural number.
// While testing we will change its value.
const year = 2000;
// Print true if the year is a leap year otherwise print false.
// Printing more than one output or printing anything other than leap year or not leap year might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
const isDivBy4 = year % 4 === 0; 
const isDivBy400 = year % 400 === 0; 
const isDivBy100 = year % 100 === 0; 

const isLeapYear = (isDivBy400) || (isDivBy4 && (!isDivBy100));

console.log(isLeapYear);
