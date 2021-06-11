// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// Serires of prompts
var len=prompt("What is the length of the password")

while(len >  8 && len < 128) {
  
} 



//  var c_types=alert("Confirm if you want lowercase,uppercase,number, and.or special characters with yes or no")
//  var l_case=prompt("Lowercase? ")
//  var u_case=prompt("Uppercase?")
//  var n_case=prompt("numeric?")
//  var s_case=prompt("Special case?")





  
  

  passwordText.value = password;

}


  
// Returns final result for password
function generatePassword() {
  
}


generateBtn.addEventListener("click",writePassword)

// Sets value for length of characters to be chosen
var length = 0



//LowerCase Array
l_Alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','w','z']
//UpperCase Array
C_Alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// Numbers Array
numeric=[1,2,3,4,5,6,7,8,9,0]
//special charcters
s_Char=["!","@", "#","$","%","^","&","*","(",")","~","/","+","_"]


//Function to generate a random number between 0 and (maxValue-1)
// function generateRandomNumber(maxValue) {
//   var randomNumber=Math.random();

//   var result=Math.floor(randomNumber * maxValue);
//   return result;

// }

// Function to reutnr a random element from an array 
// function getRandomElementFromArray(array) {
//   var randomPosition=generateRandomNumber(array.length);
//   return array[randomPosition]
// }

// console.log(getRandomElementFromArray(numeric[2]))


