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