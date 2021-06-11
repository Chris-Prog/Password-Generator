// Assignment Code
var generateBtn = document.querySelector("#generate");

//LowerCase Array
l_Alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','w','z']
//UpperCase Array
C_Alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// Numbers Array
numeric=[1,2,3,4,5,6,7,8,9,0]
//special charcters
s_Char=["!","@", "#","$","%","^","&","*","(",")","~","/","+","_"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Returns final result for password
function generatePassword() {
  
}


generateBtn.addEventListener("click",writePassword)









