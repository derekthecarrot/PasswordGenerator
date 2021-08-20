// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to contain?")
  var characters = '';
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "0123456789"
  var specialCharacters = "!@#$%^&*()/?|`~"
  var result = "";
  
  if (passwordLength >= 8 && passwordLength <= 128) {
    var confirmUpper = confirm("Do you want Uppercase Letters?")
    var confirmLower = confirm("Do you want Lowercase Letters?")
    var confirmNumbers = confirm("Do you want number?")
    var confirmSpecial = confirm("Do you want special characters?")
    if (confirmUpper) {
      characters += upperCase;
    }
    if (confirmLower) {
      characters += lowerCase;
    }
    if (confirmNumbers) {
      characters += numbers;
    }
    if (confirmSpecial) {
      characters += specialCharacters;
    }
    
    var charactersLength = characters.length;
    for ( var i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
    }
  } else if (passwordLength < 8) {
    alert("Please pick a password that is atleast 8 characters")
  } else if (passwordLength > 128) {
    alert("Please pick a password that is less than 129 characters")
  }

  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

