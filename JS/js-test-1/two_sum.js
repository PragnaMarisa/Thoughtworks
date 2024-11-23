// Print all pairs of digits in `numberToCheck` which adds up to `target`.
const numberToCheck = 1234;
const target = 5;
// For example `numberToCheck` = 1234 and `target` = 5
// Pairs whose sum is 5 are (1, 4) and (2, 3) 
// Your program should print
// 1 4
// 2 3
// or
// 4 1
// 3 2
// As you can see above, order doesn't matter. You can print in any order.
// One line should contain only one pair.
// There should be exactly one space between numbers of a pair.
// You should use console.log(1, 4) to print 1 and 4 on a single line with exactly one space between them.
// If there is no pair that adds up to the target, your program should not print anything.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let numberToBeChecked = numberToCheck;
while (numberToBeChecked > 0) 
{
    const pair1 = numberToBeChecked % 10;
    numberToBeChecked = (numberToBeChecked - pair1) / 10;
    let copyNumber = numberToBeChecked;
    while (copyNumber > 0) {
        const pair2 = copyNumber % 10;
        copyNumber = (copyNumber - pair2) / 10;
        const isEqual = (pair1 + pair2) === target;
        if (isEqual) {
            console.log(pair1, pair2);
        }
    }
}
