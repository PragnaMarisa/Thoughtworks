// Do not rename sentence, use it as input for your program.
// While testing we will change it's value.
const sentence = "this is cool";
//  Reverse the sentence
// If sentence = "this is cool" then Output should be "cool is this"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
const SPACE = ' ';
const EMPTYSTRING = '';

let reversedSentence = '';
let wordInSentence = '';

for (let index = 0; index < sentence.length; index++) {
    const isSpace = sentence[index] === SPACE;
    wordInSentence += !isSpace ? sentence[index] : EMPTYSTRING;

    if (isSpace) {
        reversedSentence = SPACE + wordInSentence + reversedSentence;
        wordInSentence = EMPTYSTRING;
    }

}

reversedSentence = wordInSentence + reversedSentence;
console.log(reversedSentence);
