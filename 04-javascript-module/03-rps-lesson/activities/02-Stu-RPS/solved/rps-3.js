// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var ties = 0;

for (var i = 0; i < 10; i++) {
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Test if it's working correctly
  console.log(computerGuess);

  // Collect the user's response and convert to lower case.
  var userGuess = prompt("Enter r, p, or s to play!");
  userGuess = userGuess.toLowerCase();
}
