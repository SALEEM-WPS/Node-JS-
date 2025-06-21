// ...existing code...
const prompt = require("prompt-sync")({ sigint: true }) ;
const name = prompt("what is your name?");
console.log("Hello","welcome to our game!");

const shouldWePlay = prompt('Do you want to play?');

if (shouldWePlay.toLowerCase() === "yes") {
    // Game starts here
    const leftOrRight = prompt("You enter a maze, Do you want to go left or right?");
    if (leftOrRight === "left") {
        console.log("You go left and find a bridge over a river.");
        const cross = prompt("Do you want to cross the bridge?");
        if (cross === "yes"  || cross === "y"  || cross === "okay") {
            console.log("You cross the bridge, but it was weak and broke. You fell. You lost....");
        } else {
            console.log("You decide not to cross and stay safe. Good choice!");
        }
    } else if (leftOrRight === "right") {
        console.log("You go right and fall off a cliff....");
    } else {
        console.log("Invalid direction....");
    }
} else if (shouldWePlay.toLowerCase() === "no") {
    console.log("okay :(");
} else {
    console.log("Invalid input....");
}
// ...existing code...