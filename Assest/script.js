var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbols = ['!', '@', '#', '$', '%', '^', '&', '8', '~', '?'];
var lowCaseLetters= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


function getPasswordCriteria() {
  var userChoseNumbers = confirm("Do you want numbers in your password?");
  var userChoseSymbols = confirm("Do you want symbols in your password?");
  var userChoselowCaseLetter = confirm("Do you want lower case letters in your password?");
  var userChoseupperCaseLetters = confirm("Do you want upper case letters in your password?");

console.log(userChoseSymbols)

  var options = {
    userChoseNumbers: userChoseNumbers
   
  };
  return options;
}
function createRandom(length) {
  var randomNum = Math.floor(Math.random() * length)
  return randomNum
}
function generatePassword() {
  var userChose = getPasswordCriteria();
  var availableChars = [];
  var passwordArr =[];
  if(userChose.userChoseNumbers) {
    availableChars = availableChars.concat(numbers).concat(symbols).concat(lowCaseLetters).concat(upperCaseLetters);
    console.log(availableChars)
  }

  function getRandomArbitrary(min, max){
    return Math.random() * (128 - 8) + 8;

  console.log(getRandomArbitrary)
  }
  for(var i = 0; i < 128; i++) {
    passwordArr.push(availableChars[createRandom(availableChars.length)])

  }


  return passwordArr.join("")
}

// function lengthRange(inputtxt, minlength, maxlength)
// {
//   var userInput = inputtxt.value;
//   if(userInput.length >=minlenght && userInput.length <=maxlength)
//     {
//       return true;
//     }
//     else
//     {
//       alert("8" +minlength+ "128" +maxlength+ "nummbers");
//         return false;
//     }


// }
 
    

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
