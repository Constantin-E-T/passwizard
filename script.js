
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

//? Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

getPasswordOptions()

// Function for getting a random element from an array
function getRandom(arr) {

}

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