function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}
 
function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}
  
function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
 
function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}
 
function compute(form) {
	form.display.value = eval(form.display.value)
}
 
function absolute(form) {
	form.display.value = Math.abs(form.display.value)
}
 
function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.substring(i, i+1)
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}


//Task 2
// After form loads focus will go to User id field.
  function firstfocus()
  {
  var uid =document.registration.username.focus();
  return true;
  }
// This function will validate Name.
  function allLetter()
  { 
  var uname = document.registration.username;
  var letters = /^[A-Za-z]\w*$/;
  if(uname.value.match(letters))
  {
  // Focus goes to next field i.e. Address.
  document.registration.address.focus();
  return true;
  }
  else
  {
  alert('Name should start with alphabets only, Username must have alphanumeric characters only');
  uname.focus();

  return false;
  }
  }
  // This function will validate Address.
  function alphanumeric()
  { 
  var uadd = document.registration.address;
  var letters = /^[0-9a-zA-Z]+$/;
  if(uadd.value.match(letters))
  {
  // Focus goes to next field i.e. Country.
  document.registration.country.focus();
  return true;
  }
  else
  {
  alert('User address must have alphanumeric characters only');
  uadd.focus();
  return false;
  }
  }
  // This function will select country name.
  function countryselect()
  {
  var ucountry = document.registration.country;
  if(ucountry.value == "Default")
  {
  alert('Select your country from the list');
  ucountry.focus();
  return false;
  }
  else
  {
  // Focus goes to next field i.e. ZIP Code.
  document.registration.zip.focus();
  return true;
  }
  }
 // This function will validate ZIP Code.
  function allnumeric()
  { 
  var uzip = document.registration.zip;
  var numbers = /^[0-9]+$/;
  if(uzip.value.match(numbers) && uzip.value.length===10)
  {
  // Focus goes to next field i.e. email.
  document.registration.email.focus();
  return true;
  }
  else
  {
  alert('phone number should contain ten digits and only number');
  uzip.focus();
  return false;

  }
  }
 // This function will validate Email.
  function ValidateEmail()
  {
  var uemail = document.registration.email;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(uemail.value.match(mailformat))
  {
  document.registration.desc.focus();
  return true;
  }
  else
  {
  alert("You have entered an invalid email address!");
  uemail.focus();
  return false;
  }
  }










//task 3
function TestFunction()
{
var InputStr = document.getElementById('tbox').value; 
var resStr = checkingPalindrome(InputStr);
alert('The input string "'+InputStr+'" is "'+resStr+'"'); 
}
function checkingPalindrome(InputStr)
{
var origString;
InputStr = InputStr.toLowerCase();

origString= InputStr;

InputStr = InputStr.split(''); 
InputStr = InputStr.reverse();
InputStr = InputStr.join(''); 
var revString = InputStr;
if(origString == revString){
return 'Palindrome string';
}
else
{
return 'not a Palindrome string';
}
}

//anagrams




function checkAnagram() {
  var str1 = document.getElementById('string1').value;
  var str2 = document.getElementById('string2').value;
  if(str1 !== null && str2 !== null) {
    if(str1.length !== str2.length) {
      alert("Strings are not anagrams.");
      return false;
    }
    var hashTable = {};
    for(var i = 0; i < str1.length; i++) {
      if(hashTable.hasOwnProperty(str1[i])) {
        hashTable[str1[i]] = hashTable[str1[i]] + 1;
    } else {
     hashTable[str1[i]] = 1; 
    }
  }
   
  for(var i = 0; i < str2.length; i++) {
    if(hashTable.hasOwnProperty(str2[i])) {
      hashTable[str2[i]] = hashTable[str2[i]] - 1;
    } else {
      alert("Strings are not anagrams.");
      return false;
    }
  }
    
  for(var i in hashTable) {
    if(hashTable[i] !== 0) {
      alert("Strings are not anagrams.");
      return false;
    } else {
       alert("Strings are anagrams!");
       break;
    }
  }
}
}


