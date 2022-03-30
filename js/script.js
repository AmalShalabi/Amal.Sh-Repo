
/*=====================================================================Q1
function arrayAverage(arr) {

    let sum = 0;
    let avg;
    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];
    }
    avg = sum / arr.length;

    return (avg);

}
let A = [1, 2, 3, 4, 5, 6];
let B = [5, 5, 2, 6];
let C = [1, 1, 1, 1];
document.write("Average numbers in array A equals to: " + arrayAverage(A) + "<br>");
document.write("Average numbers in array B equals to: " + arrayAverage(B) + "<br>");
document.write("Average numbers in array C equals to: " + arrayAverage(C) + "<br>");

*/
/*=====================================================================Q2
function arrayMin(arr) {
    let min=0;
    for (let i = 0; i < arr.length; i++) {

        if (min > arr[i]) {
            min = arr[i];

        }
    }
    return (min);

}

let A = [1, 0, -3, 4, 5, 6];
let B = [5, 5, -2, -17];
let C = [1, 0, 1, 1];
document.write("The min  in array A equals to: " + arrayMin(A) + "<br>");
document.write("The min  in array B equals to: " + arrayMin(B) + "<br>");
document.write("The min  in array C equals to: " + arrayMin(C) + "<br>");

*/
/*=====================================================================Q3
function StringArray(arr) {
    let max=0;
    for (let i = 0; i < arr.length; i++) {

        if (max < arr[i].length) {
            max = arr[i].length;

        }
    }
    return (max);

}

let A = ["Shady", "Kamal", "Souha", "Johnny"];
let B = ["AMAL","JUMANA", "Grace", "Moris"];
let C = ["Joyce", "Maya", "Olga"];
document.write("The longest string  in array A equals to: " + StringArray(A) + "<br>");
document.write("The longest string in array B equals to: " + StringArray(B) + "<br>");
document.write("The longest string in array C equals to: " + StringArray(C) + "<br>");
*/

/*=====================================================================Q4
function StringArray(arr) {
    let max=0;
    for (let i = 0; i < arr.length; i++) {

        if (max < arr[i].length) {
            max = arr[i];

        }
    }
    return (max);

}

let A = ["Shady", "Kamal", "Souha", "Johnny"];
let B = ["Amal","JUMANA", "Grace", "Moris"];
let C = ["Joyce", "Maya", "Olga"];
document.write("The longest string  in array A equals to: " + StringArray(A) + "<br>");
document.write("The longest string in array B equals to: " + StringArray(B) + "<br>");
document.write("The longest string in array C equals to: " + StringArray(C) + "<br>");
*/

/*=====================================================================Q5
function MaxEqualAvg(arr) {
    let sum=0,avg,counter=0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
    
    avg=sum/arr.length;

    if(arr[i]>=avg )
        
        {
            counter++;

        }
    }
    
    return (counter);

}

let A = [7, 5, -100, 44];
let B = [5, 5, -2, -17];
let C = [1, 0, 1, 1];
document.write(MaxEqualAvg(A)+" Numbers that equal or grater than the avg in array A : "  + "<br>");
document.write(MaxEqualAvg(B)+" Numbers that equal or grater than the avg in array B : "  + "<br>");
document.write(MaxEqualAvg(C)+" Numbers that equal or grater than the avg in array C : "  + "<br>");
*/

/*=====================================================================Q6
function primaryNum(number) {


    if (number >= 1) {

        for (let i = 2; i < number; i++) {
            if (number % i == 0) return false;
        }
        
        return true;

    }
}
document.write(primaryNum(29) + "<br>");
document.write(primaryNum(55) + "<br>");
document.write(primaryNum(3) + "<br>");

*/

/*=====================================================================Q6
function primaryArray(arr) {
     
        for (let i = 0; i < arr.length; i++) {
            if (!primaryNum( arr[i])) return false;

        }
        return (true);
    }

let A = [7, 5, 3, 11];
let B = [5, 5, -2, -17];
let C = [1, 0, 1, 1];
document.write(primaryArray(A) + "<br>");
document.write(primaryArray(B) + "<br>");
document.write(primaryArray(C));

*/