$(document).ready(()=>{
    $("#btn").click(()=>{
        var options = "";
        var firstValue = document.getElementById("firstValue").value;
        var secondValue = document.getElementById("secondValue").value;
        var select = document.getElementById("selected");

        //we can't assume which number from the two values is grater than other, for that every time we have to check : 

        //second  value is grater
        if(firstValue<secondValue){
            for (let i = firstValue; i <= secondValue; i++) {
          options += `<option value = ${i}> ${i} <option>`;
        }
        }        //first value is grater

        else{

            for (let i = secondValue; i <= firstValue; i++) {
                options += `<option value = ${i}> ${i} <option>`;
              }
        }
        
        $(select).append(options);

    })
})

