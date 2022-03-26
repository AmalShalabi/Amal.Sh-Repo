/*q1 var names = [], text1 = ' ';
;
for (i = 0; i <5; i++) {
    names[i] = prompt('Please Enter 5 Peoples Names');
    text1 += names[i] + "<br>";

}
document.write(' A- The 1st Name That You Entered: ' + names[0] + "<br>" + '-The Last Name That You Entered: ' + names[4] + "<br><br>");
document.write('B- The Names That You Entered in Order: ' +'<br>' + text1 + "<br>");

var text2 = "";
for ( var i = names.length - 1; i >= 0; i--) {
    text2 += names[i]+' ' ;

}
document.write('C- The Names That You Entered in Reverse Order:'+ '<br>' + text2);
*/


/*q2 var fruits=[];

fruits=['pair','orange','apple','mango'];
alert(fruits[0]+'\n'+ fruits[1]+'\n'+fruits[2]+'\n'+fruits[3]+'\n')



var text2=''
for(var i=0;i<4;i++){
    text2+=fruits[i]+'\n';
}
alert(text2);*/

/*q3
var grade=[];
for(i=0;i<10;i++){
    grade[i]=prompt('Please enter your grade');
    if(grade[i]>100 || grade[i]<0){
        alert('invalid grade, PLEASE try again');
    }
    else{
        alert(grade[i])
    }
}*/

/*q4
var arr=[11,55,66,897,555,-121,414,51,23,69,68,56,11,-22,5,6,9,44,51,69];
var sum=0;max=0;min=0;
for(var i=arr.length-1 ;i>=0; i--) {
    document.write(  arr[i]+ " ");
    sum+=arr[i]
    if(max<arr[i]){
        max=arr[i];
    }
    if(min>arr[i]){
        min=arr[i];
    }
}
document.write( '<br>' +'B- The Sum Of The Numbers In The Array Equals To :'  + sum);
document.write( '<br>' +'C- The Avg Of The Numbers In The Array Equals To :'  + (sum/20));
document.write('<br>' +'D- The Maximum Number In The Array Equals To:' + max);
document.write('<br>' +'E- The Minimum Number In The Array Equals To:' + min);
*/


/*q20
var num;
var num=+prompt("Please enter a number  of rows to be printed in a pattern...");
for(var m=1;m<=num;m++){
for(var n=1;n<=m;n++)
{
document.write(n+" ");
}
document.write("<br />");
}*/

/*q21
var n=prompt("Please enter a number be printed in a pattern...");
var present="";
for(var col= n -1 ; col>=0; col--)
{
    present += " " + (col + 1);
}
for(var row=0 ;row<n ;row++)
{
    document.write(present);
    document.write("<br />");
}
*/

/*q22
var num,i;
num=+prompt("enter the number");
while(num>0){ 
    
    for(i=num;i>0;i--){
        document.write(i+ " ");
    }
    document.write("</br> ");
    num=+prompt("enter the number"); 
}*/

/*--------------------------------------------האתגרים------------------------
challenge.q1
var n=prompt("Please enter a number to be printed in a stars pattern...");
var present="";
for(var col= n -1 ; col>=0; col--)
{
    present += "* " ;
}
for(var row=0 ;row<n ;row++)
{
    document.write(present);
    document.write("</br >");
}*/

/*challenge.q2
var n1=prompt("Please enter a number of column to be printed in a stars pattern...");
var present="";
for(var col= n1 -1 ; col>=0; col--)
{
    present += "* " ;
}
var n2=prompt("Please enter a number of rows to be printed in a stars pattern...");
for(var row=0 ;row<n2 ;row++)
{
    document.write(present);
    document.write("</br >");
}*/

/*challenge.q3
var num;
var num=+prompt("Please enter a number  of rows to be printed in a pattern...");
for(var m=1;m<=num;m++){
for(var n=num;n>=m;n--)
{
document.write("*" + " ");
}
document.write("<br />");
}*/
