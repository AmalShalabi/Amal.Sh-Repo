/*==========================================================================Q1

function fullName() {

    let firstname = prompt('Please Enter Your First Name:');
    let lastname = prompt('Plese Enter Your Last Name');

    return firstname + " " + lastname;


}

var user1, user2;
document.write('User1 Fullname :' + fullName(user1) +' <br>');
document.write('User2 Fullname:' + fullName(user2 ) + '<br>');
*/

/*==========================================================================Q2
function SumAvg(a,b,c) {
    var sum = 0, avg = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    avg = sum / arguments.length;
    return  console.log(sum),console.log(avg);
}
//A
SumAvg(505, -5, 22) ;

//B
SumAvg(Math.round(Math.random(55,698,5)*100));
//C
SumAvg(
    a=+prompt('please enter your 1st number'),
    b=+prompt('please enter your 2nd number'),
    c=+prompt('please enter your third number')
)
*/
/*==========================================================================Q4

 function len(n) {
     for (var i = 0; i < n; i++)
         document.write("*"+ "");

 }

 function size(n) {
     for (var j = 0; j < n; j++) {
         len(n);
         document.write("<br>");
   }
 }
 var x=size(prompt("Please enter a number to get a stars pattern")) ;
 */
 

/*==========================================================================Q4
 function limit(n) {
     for (let i = 1; i <= n; i++) {
         document.write(i+ " ");

     }

}
 function size(n) {
     for (let j = 1; j <= n; j++) {
         limit(j+ "");
         document.write("<br>");
     }
 }

 var x=size(prompt("Please enter a number to get a pattern")) ;
 */

 /*==========================================================================Q5
  function limit(n) {
      for (let i = n-1; i >= 0; i--) {
         document.write("*"+ "");

      }

  }
  function size(n) {
    for (let j = n; j >= 0; j--) {
          limit(j);
         document.write("<br>");
     }

  }
  var x=size(prompt("Please Enter A Number To Get A Pattern")) ;
  */

  /*==========================================================================Q6
 function limit(n) {
     for (let i = 1; i <= n; i++) {
        document.write(i+ "");

     }
     for (let j = 1; j <= n; j++) {
         document.write("*" + "");

      }
 }
 function size(n) {
    for (let i = n; i >= 0; i--) {
         limit(i +" ");
        document.write("<br>");
    }
 }

 var x=size(prompt("Please Enter A Number To Get A Pattern")) ;
 */
 
  /*==========================================================================Q6

function len1(n) {
    for (let i = 1; i <= n; i++) {
        document.write("*"+" ");

    }
 }

 function len2(n) {
    for (let i = 1; i <= n; i++) {
        document.write("*"+ " ");

    }

 }

 function size(n) {
    for (let i = n; i > 0; i--) {
        len1(i);
       document.write("<br>");
    }
    for (let i = 1; i <= n; i++) {
        len2(i);
       document.write("<br>");
    }

 }


 var x=size(prompt("Please Enter A Number To Get A Pattern")) ; 
 */
