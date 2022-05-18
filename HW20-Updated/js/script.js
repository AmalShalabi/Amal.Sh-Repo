let sum = 0, counter = 0;
const arr = [];
document.getElementById("btn").addEventListener("click", fillData);
//adding img
const img = document.createElement("img");
img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Moodle-logo.svg/1200px-Moodle-logo.svg.png";
img.setAttribute("width", "280px");
img.setAttribute("height", "150px");
img.setAttribute("alt", "moodle logo");
document.body.appendChild(img);

//addin a digital clock
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);




function fillData() {
    var valid = true;
    var sname = document.getElementById("sname");
    var sgrade = document.getElementById("sgrade");

    if (!/^[a-zA-Z]+$/.test(sname.value) || sname.value.length < 2 || sname.value == "" || sname.value == null) {

        valid = false;
        alert("this name is not valid");
    }

    else if (sgrade.value > 100 || sgrade < 0 || sgrade.value == "" || sgrade.value == null) {
        valid = false;
        alert("This grade is not valid")
    }
    else if (valid) {
        fillTable(sname.value, Number.parseInt(sgrade.value));
        const obj = {
            stdName: sname.value,
            stdGradw: Number.parseInt(sgrade.value)
        }
        arr.push(obj);
        localStorage.setItem("data", JSON.stringify(arr));
    }
    sname.value = "";
    sgrade.value = "";
}

function fillTable(name, grade) {
    var avg = document.getElementById("avg");
    var total = document.getElementById("total");
    var maintable = document.getElementById("maintable");


    //creating elements in HTML from external to internal:
    let tr = document.createElement("tr");
    let tdSname = document.createElement("td");
    let tdSgrade = document.createElement("td");
    let labelSname = document.createElement("label");
    let labelSgrade = document.createElement("label");

    labelSname.textContent = name;
    tdSname.appendChild(labelSname);
    tr.appendChild(tdSname);

    labelSgrade.textContent = grade;
    tdSgrade.appendChild(labelSgrade);
    tr.appendChild(tdSgrade);

    maintable.appendChild(tr);

    sum += grade;
    counter++;

    avg.textContent = Number.parseInt(sum / counter);
    total.textContent = counter;

}

if (localStorage.getItem("data")) {

    arr = JSON.parse(localStorage.getItem("data"));
    let d1 = d2 = null;
    for (let i of arr) {
        d1 = arr[1];
        d2 = arr[2];
        fillTable(d1, d2);

    }

}