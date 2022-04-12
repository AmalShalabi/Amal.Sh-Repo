
function validation(email) {
  var email = document.getElementById('email');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    }
    else {
      alert("Thanks for your intrest in us, Now you ,will be able to receive monthly updates from us.");
        document.getElementById('email').value = "";
    }
 }

 console.log(validation(email));

