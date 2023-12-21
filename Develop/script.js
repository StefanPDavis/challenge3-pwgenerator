// Assignment code here
function generatePassword() {
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", 
  "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
  "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", 
  "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  var passwordLength = getPasswordLength();
  var selectedOptions = [];
  var typeSelection = false;

  

  while (typeSelection == false) {
    var capital = getChoice("uppercase");
    var notCapital = getChoice("lowercase");
    var numericValue = getChoice("numbers");
    var specialCharacter = getChoice("symbols");
    if ((capital) || (notCapital) || (numericValue) || (specialCharacter)) {
      typeSelection = true;
    } else {
      window.alert("You must select at least one character type.")
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

  var passwordString = "";
  for (var i = 0; i < passwordLength; i++) {
    passwordString += selectedOptions[Math.floor(Math.random() * (selectedOptions.length))];
  }

  return passwordString;


  function getPasswordLength() {
    var userChoice = 0;
    while ((userChoice < 8) || (userChoice > 128)) {
      userChoice = parseInt(window.prompt("How long do you want your password to be? (between 8 and 128): "));
      if (isNaN(userChoice)) {
        userChoice = 0;
      }
    }
    return userChoice;
  }



  function getChoice(currentOption) {
    var userChoice = "a",
      messagePrompt = "";
    var messagePrompt = ('Do you want '.concat(currentOption));
    messagePrompt = messagePrompt.concat(' characters? (y or n)');
    while (userChoice = "a") {
      userChoice = (window.prompt(messagePrompt));
      if (userChoice == "y") {
        return true;
      } else if (userChoice == "n") {
        return false;
      }
    }
  }
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
