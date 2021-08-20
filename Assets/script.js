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
  var specialCharacters = "!@#$%^&*()/?|"
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