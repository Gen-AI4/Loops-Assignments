// Set a maximum value:
const maxValue = 100;
// Generate a random number:
const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
// Track the guess status:
let track = false;
// Simulate user guesses:
let predefinedGuesses: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let i = 0;
// Simulate user guesses:
while (!track && i < predefinedGuesses.length) {
  let currentGuess = predefinedGuesses[i];
  console.log(`Current Guess: ${currentGuess}`);
  if (currentGuess === randomNumber) {
    console.log("Correct guess!");
    track = true;
  } else if (currentGuess < randomNumber) {
    console.log("Too low!");
  } else {
    console.log("Too high!");
  }

  i++;
}

if (!track) {
  console.log("No correct guess in the predefined guesses.");
}
