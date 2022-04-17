 var counter = 0, sum = 0;

function gcollege() {
    let data = [];
    data[0] = document.getElementById("sname");
    data[1] = document.getElementById("sgrade");
    let Avg_s= document.getElementById("avg_students");
    let Count_s = document.getElementById("num_students");
    let tables = document.getElementById("stable");

    if (data[0].value == "" || data[0].value == null || data[1].value > 100 || data[1].value < 0) {

        alert(" Please Make Sure All Fields Are Filled In Correctly");
    }

    else {

        // 2 filds to Input
        let student_name = document.createElement('label');
        let student_grade = document.createElement('label');

     /*   //div's data
        let avg_label = document.createElement('label');
        let counter_label = document.createElement('label');
        let avg_div = document.createElement('div');
        let counter_div = document.createElement('div');
*/

        //tables' data
        let student_tname = document.createElement('td');
        let student_score = document.createElement('td');

        //table's raw
        let student_table = document.createElement('tr');

        //Value for each element in the table
        student_name.textContent = data[0].value;
        student_grade.textContent = data[1].value;

        // filling students' names & grades in the table
        student_tname.appendChild(student_name);
        student_score.appendChild(student_grade);

        student_table.appendChild(student_tname);
        student_table.appendChild(student_score);


        tables.appendChild(student_table);



        //Value for each element in each div
        // filling students' names & grades in the table


        sum += Number.parseInt(data[1].value);
        counter++;

        Avg_s.textContent = Math.floor(sum / counter);
        Count_s.textContent = counter;
    }



}
