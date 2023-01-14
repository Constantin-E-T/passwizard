
//! Global variables
//? Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
/* Joining the special characters array into a string. */
var specialString = specialCharacters.join("");


//? Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
/* Joining the numeric characters array into a string. */
var numericString = numericCharacters.join("");

//? Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
/* Joining the lowercase characters array into a string. */
var lowerCasedString = lowerCasedCharacters.join("");

//? Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
/* Joining the uppercase characters array into a string. */
var upperCasedString = upperCasedCharacters.join("");
// console.log(upperCasedString);

var charTypes = [];
// console.log(charTypes);

//? Function to prompt user for password options
//! This function is asking the user how many characters they want their password to contain, and then
// it is asking them if they want to include special characters, numeric characters, lowercase
// characters, and uppercase characters in their password.
// returns an object that contains the length of the password, and whether or not the user wants to
// include special characters, numeric characters, lowercase characters, and uppercase characters in
// their password.
function getPasswordOptions() {

  // This is a prompt that asks the user how many characters they would like their password to contain.
  // parseInt will convert the string to a number
  var length = parseInt(prompt('How many characters would you like your password to contain? (At least 10 characters but no more than 64)'));
  // console.log(typeof(length));
  
  // This is an if statement that checks if the user has entered a number between 10 and 64. If they
  // have not, it will alert them that they must enter a number between 10 and 64.
  if (isNaN(length) || length < 10 || length > 64) {
    alert('Invalid number! Please enter a number between 10 and 64.');
    return getPasswordOptions();
  }

  //  Prompts the user to confirm the inclusion of special characters, numeric characters, lowercase characters, and uppercase characters.           
  //  returns {boolean} - True if the user confirms including special characters, numeric characters, lowercase characters, and uppercase characters.           

  var hasSpecial = confirm("Click OK to confirm including special characters.");
  var hasNumeric = confirm("Click OK to confirm including numeric characters.");
  var hasLower = confirm("Click OK to confirm including lowercase characters.");
  var hasUpper = confirm("Click OK to confirm including uppercase characters.");

  // This is a series of confirm statements that are asking the user if they want to include special
  // characters, numeric characters, lowercase characters, and uppercase characters in their password. 
  if (!hasLower && hasNumeric && hasUpper && hasSpecial) {
    alert('You must choose at least one character type.');
    return getPasswordOptions();
  }
  // This is returning the length, hasSpecial, hasNumeric, hasLower, and hasUpper variables. 
  return {
    length: length,
    hasSpecial: hasSpecial,
    hasNumeric: hasNumeric,
    hasLower: hasLower,
    hasUpper: hasUpper
  };
}

//! getPasswordOptions()
// Function for getting a random element from an array
// This function is creating a password based on the user's input
// param arr - This is an object that contains the user's password length and character type choices.
// returns The password is being returned.
function getRandom(arr) {
  
  var password = "";
  // var charTypes = [];
  var possibleCharacters = "";

  if (arr.hasSpecial) {
    /* This is adding special characters to the possible characters string. */
    possibleCharacters += specialString;
    /* Adding special characters to the character types array. */
    charTypes.push("Special Characters");
  }
  /* This is checking if the user has selected numeric characters. If they have, it is adding
  numeric characters to the possible characters string and adding numeric characters to the
  character types array. */
  if (arr.hasNumeric) {
    possibleCharacters += numericString;
    charTypes.push("Numeric Characters");
  }
  /* This is checking if the user has selected lowercase characters. If they have, it is adding
  lowercase characters to the possible characters string and adding lowercase characters to the
  character types array. */
  if (arr.hasLower) {
    possibleCharacters += lowerCasedString;
    charTypes.push("Lowercase Characters");
  }
  /* This is checking if the user has selected uppercase characters. If they have, it is adding
  uppercase characters to the possible characters string and adding uppercase characters to the
  character types array. */
  if (arr.hasUpper) {
    possibleCharacters += upperCasedString;
    charTypes.push("Uppercase Characters");
  }
  /* This is an if statement that is checking if the user has selected at least one character type. If
  they have not, it will alert them that they must select at least one character type. */
  if (!possibleCharacters) {
    alert("You must select at least one character type!");
    return getPasswordOptions();
  }
  else {
    /* This is a for loop that is looping through the length of the password that the user has chosen. It
    is then generating a random index number based on the length of the possible characters that the
    user has chosen. It is then adding that random character to the password. It is then alerting the
    user what their password is and what character types it contains. It is then returning the
    password. */
    for (var i = 0; i < arr.length; i++) {
      var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
      password += possibleCharacters[randomIndex];
    }
    alert("Your password is: " + password +"\nYour password contains "+ charTypes.join(", "));

    return password;
  }
}

/* This is calling the getPasswordOptions function and storing the returned value in the
passwordOptions variable. It is then calling the getRandom function and passing the passwordOptions
variable as an argument. It is then storing the returned value in the randomPassword variable. It is
then logging the randomPassword variable to the console. */
var passwordOptions = getPasswordOptions();
var randomPassword = getRandom(passwordOptions);
console.log(randomPassword);


// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);