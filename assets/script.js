// the variable characterLength as defined here is basically a placeholder variable that will be reassigned later, and the choiceArray variable will be where the users chosen arrays will be concatenated to
var characterLength = 8;
var choiceArray = [];

// the following 4 variables are the specified potential character types that can be utilized by the password generator
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacterArray = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','@','[',']','^','_','`','{','}','|','~'];
var numberArray = ['1','2','3','4','5','6','7','8','9','0']


// Assignment Code: this variable and event listener were provided with the starter code
var generateBtn = document.querySelector("#generate");

// Upon clicking the generateBtn variable attached to the #generate ID the writePassword function will begin
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // at this point the askPrompts function will trigger, refer to line 46
  // if the askPrompts functions is ran to completion, the variable validPrompts will be set to the outcome of the askPrompts function
    var validPrompts = askPrompts();
    var passwordText = document.querySelector("#password");

    // if the validPrompts variable is true, which it should be, we will take the result of the generatePassword function and assign it to the variable newPassword. Refer to line 35 for the generatePassword function.
    if (validPrompts) {
      // the result of the generatePassword function is then reassigned to the variable newPassword, and then assigned to be equal to the passwordText.value which can be seen above on line 23. 
      var newPassword = generatePassword();
      passwordText.value = newPassword;
    } else {
      passwordText.value = "";
    }
}

// this function begins by clearing the value of the password variable. 
function generatePassword() {
  var password = "";
// a simple for loop is used to create a string of characters equal to the length of the choiceArray, which was dictated by the choices made in the askPrompts function below.
  for(var i = 0; i < characterLength; i++) {
    // math.floor is used here to clear any decimals from the math.random function. Essentially we are creating a random index selector based on the length of the choiceArray.
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

// Once this function is called the choiceArray variable will be cleared, and then the user will be propted to answer a question as to how long they would like their password to be.
function askPrompts() {
  choiceArray = [];

  characterLength = parseInt(prompt("How many characters long would you like your password to be? (Please choose a number 8 - 128)"))

  // If the user tries to input a string such as "twenty" instead of a number, or if they choose a number less than 8 or above 128 they will receive an error message, and the code will stop.
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Oops! Character length has to be a number between 8 and 128. Please try again.")
    return false;
  }

  // If the user chooses a valid number then the following four questions will be asked. Depending on the user's choices, the choiceArray will grow to include the chosen character types.
  if (confirm("Would you like to include lowercase letters in your password?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }
    if (confirm("Would you like to include uppercase letters in your password?")) {
      choiceArray = choiceArray.concat(upperCaseArray);
  }
  if (confirm("Would you like to include special characters in your password?")) {
    choiceArray = choiceArray.concat(specialCharacterArray);
  }
  if (confirm("Would you like to include numbers in your password?")) {
    choiceArray = choiceArray.concat(numberArray);
  }

  // If the user fails to select at least one character type from the above choices the following error message will be displayed, and the code will stop.
  if (choiceArray < 9) {
    alert("Oops! You must select at least one character type for your password. Please try again.")
    return false;
  }

  return true;
}