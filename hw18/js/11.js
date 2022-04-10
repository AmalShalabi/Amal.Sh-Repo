  /*
//Checking The Age Form Input
function ValidateAge(age){

if (age > 0 && age <= 120) {
  return age;
}
else {
  alert("Sorrry!" + User + "The Age Must Be A Number Between 1 And 120");

}

}
// DEFINE RETURN VALUES
var ElegalInput= -1;
var InValid_ID= -2;
var Valid_ID= 1;

// Checking The ID Form Input
function ValidateID(str)
{
//INPUT VALIDATION

// Just in case -> convert to string
var IDnum = String(str);

// Validate correct input
if ((IDnum.length > 9) || (IDnum.length < 5))
return ElegalInput;
if (isNaN(IDnum))
return ElegalInput;

// The number is too short - add leading 0000
if (IDnum.length < 9)
{
while(IDnum.length < 9)
{
IDnum = '0' + IDnum;
}
}

// CHECK THE ID NUMBER
var mone = 0, incNum;
for (var i=0; i < 9; i++)
{
incNum = Number(IDnum.charAt(i));
incNum *= (i%2)+1;
if (incNum > 9)
incNum -= 9;
mone += incNum;
}
if (mone%10 == 0)
return Valid_ID;
else
return InValid_ID;
}

//Check The Email Form Input
function ValidEmail() {
  var email = document.getElementById('email');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        alert('Please Provide A Valid Email Address');
        email.focus;
    }
    else {
        return email;
    }
 }
*/

function ValidateName(){


  if (name.length<1|| name.length>9) {  
    alert( "Please Enter your First Name \n"); 
}  
else { 
    var name = ""; 
} 
{
  