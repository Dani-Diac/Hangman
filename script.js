//This function hide the input box and the submit button.
 function hide() {
  var submitButton = document.getElementById("getInputToAdd");
  var inputBox = document.getElementById("add");
  submitButton.style.visibility = "hidden";
  inputBox.style.visibility = "hidden";
}
var hiddenWord = [];
var counter;
//This function should create the number of underscores exactly as long as the input word
function createUnderscores() {
  var input = document.getElementById("getInputToAdd").value;
  counter = input.length;
  for (var i = 0; i < input.length; i++) {
    hiddenWord[i] = ["_"];
  }
  var spaces = hiddenWord.join(' ');
  document.getElementById("hiddenWord").innerHTML = spaces;
}
//I make a clickable button for every letter of the alphabet
function createAlphabet() {
  for (var i = 65; i <= 90; i++) {
    var button = document.createElement("button");
    var c = String.fromCharCode(i);
    button.type = ("button");
    button.id = c;
    button.innerHTML = c;
    button.addEventListener("click", function() {
      checkWord(this.id);
    });
    button.addEventListener("click", function() {
      document.getElementById(this.id).style.visibility = "hidden";
    });
    document.getElementById("alphabet").appendChild(button);
  }
}
//This function creates lives
var livesLeft = [];
function lives() {
  for (var i = 0; i < 10; i++) {
    livesLeft[i] = ["❤️"];
  }
  var spaces = livesLeft.join(' ');
  document.getElementById("lives").innerHTML = spaces;
}
//Here I should check the word and replace every underscore with the letter from the original word
function checkWord(letter) {
  var input = document.getElementById("getInputToAdd").value;
  var correctLetter = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i] == letter) {
      correctLetter = 1;
      --counter;
      hiddenWord[i] = letter;
      var spaces = hiddenWord.join(' ');
      document.getElementById("hiddenWord").innerHTML = hiddenWord;
      document.getElementById("hiddenWord").innerHTML = spaces;
    }
  }
//If the letter doesn't fit a "life" turns black
  if (correctLetter != 1) {
    for (var i = 0; i < 10; i++) {
      if (livesLeft[i] == "❤️") {
        livesLeft[i] = "🖤";
        var spaces = livesLeft.join(' ');
        document.getElementById("lives").innerHTML = spaces;
        return statusWord(counter);
      }
    }
  }
  statusWord(counter);
}
//Here I display the message if you won or lose
function statusWord(lettersLeft) {
  if (lettersLeft == 0 && livesLeft[9] == "❤️") {
    alert("Congratulations!");
    location.reload();
  }
  if (lettersLeft > 0 && livesLeft[9] == "🖤") {
    livesLeft[9] = "🖤";
    alert("Game over!");
    alert("Try again");
    location.reload();
  }
}
