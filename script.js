// 1. function: created window prompt when button clicked, prompt asks how many characters
// 2. prompt beetween 8 - 128 characters, if not, then loop prompt characters must be inbetween 8-128
// 3. prompt ask for character types including special characters / numbers / lower/upper case 
// 4. 






// Assignment Code

//1.
var generateBtn = document.querySelector("#generate");

  function promptMe() {
    var usergenerate = window.prompt("How long do you want your password? (8-128 characters) ")
    console.log(usergenerate)
    
  } 
   
//3.
function characterType() {

  var characters = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz1234567890?!@#$%^&*"
  
  var result = "";
  
  for (var i = 0 ; i < characters.length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  return result;
  }
  
// // Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// // cerates window prompt.
