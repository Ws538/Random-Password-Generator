// Assignment Code

var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//1.
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userChoice = window.prompt(
    "How long do you want your password? (8-128 characters) "
  );
  console.log(userChoice);

  if (userChoice < 8) {
    alert("The password length must be longer than 8 characters.");
    return "";
  }
  if (userChoice > 128) {
    alert("The password length must be shorter than 128 characters.");
    return "";
  }

  var hasSpecialCharacters = window.confirm(
    "Do you want to include special characters? If yes, press OK, if no, press cancel"
  );
  var hasNumbers = window.confirm(
    "Do you want to include numbers? If yes, press OK, if no, press cancel"
  );
  var hasLowerCase = window.confirm(
    "Do you want to include Lower case letters? If yes, press OK, if no, press cancel "
  );
  var hasUpperCase = window.confirm(
    "Do you want to include Upper Case letters? If yes, press OK, if no, press cancel "
  );

  var combineCharacters = [];

  if (hasSpecialCharacters) {
    combineCharacters = combineCharacters.concat(specialCharacters);
  }
  if (hasNumbers) {
    combineCharacters = combineCharacters.concat(numericCharacters);
  }
  if (hasLowerCase) {
    combineCharacters = combineCharacters.concat(lowerCasedCharacters);
  }
  if (hasUpperCase) {
    combineCharacters = combineCharacters.concat(upperCasedCharacters);
  }
  if (combineCharacters.length === 0) {
    alert("Didnt specify a character type");
    return "";
  }
  var randomPassword = "";
  for (var i = 0; i < userChoice; i++) {
    randomPassword = randomPassword + getRandomArray(combineCharacters);
  }
  return randomPassword;
}
function getRandomArray(array) {
  var random = Math.floor(Math.random() * array.length);
  var randomElement = array[random];
  return randomElement;
}
// // Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
