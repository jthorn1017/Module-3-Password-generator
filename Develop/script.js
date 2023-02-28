// Assignment code here
var characterLength = 8;
var choiceArray = [];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]  
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"]

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  function generatePassword() {

  }

  function getPrompts(){
    characterLength = parsInt(prompt("How many characters do you want your password to be? (8 - 128 characters)"));

if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Password is unacceptable");
    return false;
}

if (confirm("Do you want lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(lowercaseArray);
}

if (confirm("Do you want uppercase letters in your password?")) {
    choiceArray = choiceArray.concat(uppercaseArray);
}

if (confirm("Do you want special characters in your password?")) {
    choiceArray = choiceArray.concat(specialArray);
}

if (confirm("Do you want numbers in your password?")) {
    choiceArray = choiceArray.concat(numberArray);
    return true;
}

}
  