/**
 * Guess The Number Game
 */

// Variable to store the list of guesses 
let guesses;
// Variable for store the correct random number 
let correctNumber;

window.onload = function () {
  initGame()
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame)
}

playGame = () => {
  let numberGuess = document.getElementById("number-guess").value;
  saveGuessHistory(numberGuess)
  displayHistory()
  displayResult(numberGuess)
}

// Initialize a new game by resetting all values and content on the page
initGame = () => {
  correctNumber = getRandomNumber();
  guesses = []
  displayHistory()
  resetResultContent()
}

// Reset the results list display
resetResultContent = () => {
  document.getElementById("result").innerHTML = "";
}

// Return random number between 1 and 100
getRandomNumber = () => {
  return Math.floor((Math.random() * 100) + 1);
}

// Save the user guess entered from the input
 saveGuessHistory = (guess) => {
  guesses.push(guess);
}

// Display history in HTML 
displayHistory = () => {
  let index = guesses.length - 1;
  let list = "<ul class='list-group'>"
  while (index >= 0) {
    list +=
      "<li class='list-group-item'>" +
      "You guessed " + guesses[index] +
      "</li>";
    index -= 1
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}

// Display the result in HTML
function displayResult(numberGuess) {
  if (numberGuess > correctNumber) {
    showNumberAbove()
  } else if (numberGuess < correctNumber) {
    showNumberBelow()
  } else {
    showYouWon()
  }
}



// Retrieve the dialog based on if the guess is wrong or correct 
getDialog = (dialogType, text) => {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

showYouWon = () => {
  const text = "Congrats! You got it!"
  let dialog = getDialog('won', text)
  document.getElementById("result").innerHTML = dialog;
}

showNumberAbove = () => {
  const text = "Your guess is too high!"
  let dialog = getDialog('warning', text)
  document.getElementById("result").innerHTML = dialog;
}

showNumberBelow = () => {
  const text = "Your guess is too low!"
  let dialog = getDialog('warning', text)
  document.getElementById("result").innerHTML = dialog;
}
