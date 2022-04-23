//=============================================================================Q1

function Display1(name){
    alert (" Hello " + name + " !");
}

function processInput(callback){
     var name=prompt("please enter your name");
    callback(name);
}

processInput(Display1);
//=============================================================================Q2

function random(){
   console.log("Q2- The random number is " + Math.random());
}
function cool(callback) {
	callback();
}

cool(random);
//=============================================================================Q3

function display2(value){
    document.write("Q3- diplay the arrgument " +value +'<br>');
}
function nice(callback) {
	callback(42);
}
nice(display2);
//=============================================================================Q3

function display3(num1,num2,num3,num4,num5){
    const array = [num1, num2, num3, num4, num5];
    return array[Math.round(Math.random() * array.length)];}

function amazing(callback) {
	const num = callback(42, 128, 37, 81, 66);
	document.write('<br>' +"Q4- Num: " + num);
}

amazing(display3);

//=============================================================================Q4


function random(n1,n2,n3,n4,n5){
    var arr=[n1,n2,n3,n4,n5];
    return arr[Math.floor(Math.random()*arr.length)];
}

function amazing(callback) {
	const num = callback(42, 128, 37, 81, 66);
	document.write("Num: " + num);
}

amazing(random)