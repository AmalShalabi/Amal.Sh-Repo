function validDetails() {
  var x1= document.getElementById("fname").value;
  var x2 = document.getElementById("age").value;
  var x3 = document.getElementById("i_d").value;
  var x4 = document.getElementById("email").value;


  Console.log(ValidateName(x1));
  Console.log(ValidateAge(x2));
  Console.log(ValidateID(x3));
  Console.log(ValidateEmail(x4));


}
function ValidateName(str)
  {
  
  var Firstname = String(str);
    if ((Firstname.length > 9) || (Firstname.length < 2)){
  return alet ("Please Enter your First Name \n");
}
else{
  return Firstname;
}  


  }
  //Checking The Age Form Input
function ValidateAge(age){

  if (age > 0 && age <= 120) {
    return age;
  }
  else {
    alert("Sorrry!" + User + "The Age Must Be A Number Between 1 And 120");
  
  }
  
  }
var R_ELEGAL_INPUT = -1;


function ValidateID(str)
{
   // Just in case -> convert to string
   var IDnum = String(str);

   // Validate correct input
   if ((IDnum.length > 9) || (IDnum.length < 5))
      return R_ELEGAL_INPUT;
   if (isNaN(IDnum))
      return R_ELEGAL_INPUT;

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
      return true;
   else
      return false;
}

function validation(email) {
  var email = document.getElementById('email');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
    }
    else {
      alert("Thanks for registering with us!");
        document.getElementById('email').value = "";
    }
 }
