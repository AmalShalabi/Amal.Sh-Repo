//************************Functions to call back**************************************

//============1st Function 2 set cookies===============================================
function setCookies(cname) {
    const d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname.id + "=" + cname.value + ";" + expires + ";path=/";
}

//============2nd Function 2 get cookies===============================================

function getCookies() {
    var allcookies = document.cookie;

    // Get all the cookies pairs in an array
    cookiearray = allcookies.split(';');

    // Now take key value pair out of this array
    for (var i = 0; i < cookiearray.length; i++) {
        var name = cookiearray[i].split('=')[0];
        var value = cookiearray[i].split('=')[1];
        alert("Key is :" + name + " || Value is : " + value);
        ;
    }
}

//===================================3rd Function 2 validate email=============================
function checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    const $result = $("#result");
    const email = $("#email").val();
    $result.text("");

    if (validateEmail(email)) {
        $result.text(email + " is valid :)");

    } else {
        $result.text(email + " is not valid :(");

    }
    return false;
}
//===================================4th Function 2 validate phone number=============================

function checkPhone(elementValue) {
    var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return phoneNumberPattern.test(elementValue);
}
//===================================5th Function 2 validate name field=============================
function checkName(name) {
    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
}

//==============================================================================Q1
document.getElementById("saveBtnE").addEventListener("click", email2Cookies);
document.getElementById("loadBtnE").addEventListener("click", getEmail);

function email2Cookies() {
    let Email = document.getElementById("Email");
    if (checkEmail(Email.value)) {
        setCookies(Email);
    } else alert("Please Provide A Valid Email Address");
    Email.value = "";
}
function getEmail() {
    let Email = document.getElementById("Email").id;
    getCookies(Email);
}
//==============================================================================Q2
document.getElementById("saveBtnPH").addEventListener("click", phone2Cookies);
document.getElementById("saveBtnPH").addEventListener("click", getPhone);

function phone2Cookies() {
    let Phone = document.getElementById("Phone");
    if (checkPhone(Phone.value)) {
        setCookies(Phone);
    } else alert("Please Provide A Valid Phone Number");
    Phone.value = "";
}
function getPhone() {
    let Phone = document.getElementById("Phone").id;
    getCookies(Phone);
}
//==============================================================================Q3
document.getElementById("saveBtn").addEventListener("click", infoStorage)
let arr = [];
function infoStorage() {
    let name = document.getElementById("fullName");
    let email = document.getElementById("email1");
    let phone = document.getElementById("phone1");

    if (
        checkName(!name)||
        name.value.length < 3 ||
            name.value.length >= 30 ||
            name.value == ""
    ) {
        alert("Invaled Name !")
    } else if (
        checkEmail(!email) ||
        email.value.length < 3 ||
        email.value.length >= 30 ||
        email.value == ""
    ) {
        alert("Invalid Email Adress!")
    }
    else if (
        checkPhone(!phone) ||
        phone.value.length < 3 ||
        phone.value.length >= 30 ||
        phone.value == ""
    ) {
        alert("Invalid Phone Number!")
    }
    else {
        let object = {
            fullName: name.value,
            Email: email.value,
            Phone: phone.value
        };
        arr = object;
        localStorage.setItem("DataStorage", JSON.stringify(arr));
    }

}
//==============================================================================The Challenge!
document.getElementById("saveB").addEventListener("click", localStore);
document.getElementById("searchB").addEventListener("click", search);
let inputArray = [];
function localStore() {
  let input1 = document.getElementById("user");
  if (!( input1.value == null || input1.value == "")) {
      
    inputArray.push(input1.value);
    var strings=JSON.stringify(inputArray)
    localStorage.setItem("localData", strings);//The localStorage can store only strings. 
                                                                   // To store objects, we have to convert them to strings
  }
}
function search() {
    let input1= document.getElementById("user");
    if (!( input1.value == null || input1.value == "")) {
      let webData = JSON.parse(localStorage.getItem("localData"));
      for (let index of webData) {
        if (index == input1.value) {
          return alert(  "We'll Show An Answer to " +index+ " in the search results");
        }
      }
      alert("The Filed Is Empty");
    }
  }

  