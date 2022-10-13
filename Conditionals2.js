//1. zadatak
var result=""
var a=3
var b=4
var c=5
if (a === b && a === c && b === c) {
    console.log("This is equlateral triangle")
} else if (a===b && c!==a || a===c && c!=b || b===c && a!==b) {
    console.log("This is isosceles triangle")
} else {
    console.log("This is scalene")
}

//2.zadatak
var a=15
var b=6
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b)

//3.zadatak
var a=70;
var b=85;
var c=(a+b)/2
if (c>=91 && c<=100) {
    console.log("A");
} else if (c>=81 && c<=90) {
    console.log("B");
} else if (c>=71 && c<=80) {
    console.log("C");
} else if (c>=61 && c<=70) { 
    console.log("D");
} else if (c>=51 && c<=60) {
    console.log("E")
} else {
    console.log("Student has failed the exam")
}

//4.zadatak
var a= 5;
var b= "dog";
if (a>1) {
    console.log(a + " " +  b + "s")
} else if (a=1) {
    console.log (a + b)
}

//5.zadatak
var age=13;
if (age>=18) {
    console.log("You are old enought to drive");
} else if (age<18) {
    console.log(18 - age + " " + "years")
}

//6.zadatak
var a= 43;
var myAge= 28;
if (a>myAge) {
    console.log("She is " + (a - myAge) + " years older than me" )
} else if (a<myAge) {
    console.log("She is " + (myAge - a) + " younger than me")
} else {
    console.log("We are the same age")
}

//7.zadatak
var a="Labrador"
var b="Pug"
var c="German Shepherd"
var d="Pitbull"
var e="Rotweiler"
    var f="German Shepherd"

if (a==f) {
    console.log("This is " + a + " called Neo")
} else if (b==f) {
    console.log("This is " + b + " called Neo")
} else if (c==f) {
    console.log("This is " + c + " called Neo")
} else if (d==f) {
    console.log("This is " + d + " called Neo")
} else if (e==f) {
    console.log("This is " + e + " called Neo")
} else {
    "This is a mixed breed"
}