const roverX = 0;
const roverY = 0;
const heading = 0; 
const instructions = 332331;

// The above input should leave the Mars Rover at 2 2 0

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let currentRoverX = roverX;
let currentRoverY = roverY;
let currentHeading = heading;

let currentInstructions = instructions;
let reversedInstructions = 0;

while (currentInstructions > 0) {
    const remainder = currentInstructions % 10;
    currentInstructions = (currentInstructions - remainder) / 10;
    reversedInstructions = (reversedInstructions * 10) + remainder;
}

currentInstructions = reversedInstructions;

while (currentInstructions > 0) {
    const instruction = currentInstructions % 10;
    if (instruction === 3) {
        if (currentHeading === 0) {
            currentRoverY++;
        }
        if (currentHeading === 1) {
            currentRoverX++;
        }
        if (currentHeading === 2) {
            currentRoverY--;
        }
        if (currentHeading === 3) {
            currentRoverX--;
        }
    }
    if (instruction === 2) {
        currentHeading = (currentHeading + 1) % 4;
    }
    if (instruction === 1) {
        currentHeading = (currentHeading + 3) % 4;
    }
    currentInstructions = (currentInstructions - instruction) / 10;
    reversedInstructions = (reversedInstructions * 10) + instruction;
}

console.log(currentRoverX, currentRoverY, currentHeading);
