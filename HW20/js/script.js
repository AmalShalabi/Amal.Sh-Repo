let counter = 0, sum = 0, arr = [];

function GettingData() {
///first step, validating to ensure that the data entered is in the correct format
  let valid = true;
  let sname = document.getElementById("student_name");
  let sgrade = document.getElementById("student_grade");


  if (!/^[a-zA-Z]+$/.test(sname.value)||sname.value.length<2 || sname.value.length>9|| sname.value == "" ||  sname.value == null) {
    valid = false;
    alert("Error! This Is An InValid Name");
  }
  else if(sgrade.value>100 || sname.value<0 || sgrade.value==""||sgrade.value==null){
    valid=false;
    alert("Error! This Is An Invalid Grade")
  }
  else if (valid){
    tableEntry(sname.value, Number.parseInt(sgrade.value))
    var obj={
      stName:sname.value,
      stGrade:Number.parseInt(sgrade.value)

    }
    arr.push(obj);
    localStorage.setItem("tableData",JSON.stringify(arr));
//////next round should empty the values
    sname.value = "";
    sgrade.value = "";

  }

}
//after the validation, starting data entry
function tableEntry(s_name,s_grade){
  var GradesAvg=document.getElementById("avg");
  var StudentsTotal=document.getElementById("total");
  var mainTable=document.getElementById("main_Table");

  //creationg Elements in HTML
  let tr=document.createElement("tr");
  let td1=document.createElement("td");
  let td2=document.createElement("td");
  let label1=document.createElement("label");
  let label2=document.createElement("label");

  //getting values 2 the variables
  label1.textContent=s_name;
  label2.textContent=s_grade;

  //appending values
  td1.appendChild(label1);
  tr.appendChild(td1);
  
  td2.appendChild(label2);
  tr.appendChild(td2);

  mainTable.appendChild(tr);

  sum+=s_grade;
  counter++;

  GradesAvg.textContent=Number.parseInt(sum / counter);
  StudentsTotal.textContent=counter;
}

if(localStorage.getItem("tableData")){
//to getBack the datatype of the keys in the object
arr=JSON.parse(localStorage.getItem("tableData"));
let d1=d2 = null;
for (var i of arr) {
    d1 = arr[i].s_name;
    d2 = arr[2].s_grade;
    tableEntry(d1, d2);

}





}