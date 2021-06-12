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
//New password array
newPass=[]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Returns final result for password
function generatePassword() {
  //Prompt for the length of the password
var askLength=prompt("What is the length of the password")
    askLength=parseInt(askLength)
  if(askLength < 8 || askLength > 128) {
    return alert("Put a number lower than 8 or higher than 128")
  }
//Serires of confirms for character types
var lCase=confirm("Do you want lowercase characters?")
  if(lCase) {
     newPass=newPass.concat(l_Alpha)
     console.log(newPass)
  
  }

var uCase=confirm("Do you want uppercase characters?")
if(uCase) {
  newPass=newPass.concat(C_Alpha)
  console.log(newPass)
 
}

var num=confirm("Do you want numbers?")
if(lCase) {
  newPass=newPass.concat(numeric)
  console.log(newPass)

}

var sCase=confirm("Do you want special characters?")
if(lCase) {
  newPass=newPass.concat(s_Char)
  console.log(newPass)
}

}


generateBtn.addEventListener("click",writePassword)









