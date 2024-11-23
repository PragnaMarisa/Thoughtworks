Skip to content
Navigation Menu
PragnaMarisa
/
classwork

Type / to search
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Files
Go to file
JS
Games
js-assignments
Sprint
Creating a new file in classwork
Breadcrumbsclasswork/JS/js-assignments
/
allPrimes.js
in
main

Edit

Preview
Indent mode

Spaces
Indent size

2
Line wrap mode

No wrap
Editing allPrimes.js file contents
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
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
    let isDivsible = currentNumber < 2;
    let divisor = 2;
    let lastDivisor = currentNumber / 2;

    while (divisor <= lastDivisor) {
        isDivsible = ((currentNumber % divisor) === 0);
        
        if (isDivsible) {
            divisor = currentNumber;
        }
        divisor++;

    }

    if ((!isDivsible)) {
        console.log(currentNumber);
    }
}


// for (let currentNumber = startOfRange; currentNumber <= endOfRange; currentNumber++) {
//     let isDivsible = true;

//     for (let divisor = 2; divisor < currentNumber; divisor++) {
//         isDivsible = ((currentNumber % divisor) === 0);
//         if (isDivsible){
//             break;
//         }
//     }

//     if ((!isDivsible) || currentNumber === 2 ) {
//         console.log(currentNumber);
//     }
// }
Use Control + Shift + m to toggle the tab key moving focus. Alternatively, use esc then tab to move to the next interactive element on the page.
New File at JS · PragnaMarisa/classwork
