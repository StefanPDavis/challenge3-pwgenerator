// Assignment code here
function generatePassword() {
  let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
  "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
  "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", 
  "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  let passwordLength = [getPasswordLength];
  let selectedOptions = [];
  let typeSelection = false;

  while (typeSelection == false) {
    let capital = getChoice("uppercase");
    let notCapital = getChoice("lowercase");
    let numericValue = getChoice("numbers");
    let specialCharacter = getChoice("symbols");
    if ((capital) || (notCapital) || (numericValue) || (specialCharacter)) {
      charTypeSelected = true;
    } else {
      window.alert("You must select at least one character type.")
    }
  }
}


function getPasswordLength() {
  let userChoice = 0;
  while ((userChoice < 8) || (userChoice > 128)) {
    userChoice = parseInt(window.prompt("How long do you want your password to be? (between 8 and 128): "));
  }
}

if (capital) {
  selectedOptions = selectedOptions.concat(uppercase);
}
if (notCapital) {
  selectedOptions = selectedOptions.concat(lowercase);
}
if (numericValue) {
  selectedOptions = selectedOptions.concat(numbers);
}
if (specialCharacter) {
  selectedOptions = selectedOptions.concat(symbols);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
