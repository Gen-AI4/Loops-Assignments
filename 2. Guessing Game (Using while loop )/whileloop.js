var maxValue = 100;
var randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
var track = false;
var predefinedGuesses = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var i = 0;
while (!track && i < predefinedGuesses.length) {
    var currentGuess = predefinedGuesses[i];
    console.log("Current Guess: ".concat(currentGuess));
    if (currentGuess === randomNumber) {
        console.log("Correct guess!");
        track = true;
    }
    else if (currentGuess < randomNumber) {
        console.log("Too low!");
    }
    else {
        console.log("Too high!");
    }
    i++;
}
if (!track) {
    console.log("No correct guess in the predefined guesses.");
}
