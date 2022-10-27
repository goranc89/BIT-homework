//1.zadatak
var day=4;
var result="";

switch (day) {
    case 1 :
        result="Monday";
        break;
    case 2 :
        result="Tuesday";
        break;
    case 3 :
        result="Wednesday";
        break;
    case 4 :
        result="Thursday";
        break;
    case 5 :
        result="Friday";
        break;
    case 6 :
        result="Saturday";
        break;
    case 7 :
        result="Sunday";
        break;
}
console.log(result)

//2.zadatak

var day=8;
var result="";

switch (day) {
    case 1 :
        result="Monday";
        break;
    case 2 :
        result="Tuesday";
        break;
    case 3 :
        result="Wednesday";
        break;
    case 4 :
        result="Thursday";
        break;
    case 5 :
        result="Friday";
        break;
    case 6 :
        result="Saturday";
        break;
    case 7 :
        result="Sunday";
        break;
    default:
        result="Input must be a number between 1 and 7";
        break;
}
console.log(result)

//3.zadatak

var day=6;
var result="";

switch (day) {
    case 1 :
    case 2 :
    case 3 :
    case 4 :
    case 5 :
       result="It's a weekday";
    case 6 :
    case 7 :
        result="It's a weekend";
        break;
    default:
        result="Input must be a number between 1 and 7";
        break;
}
console.log(result)

//4.zadatak

var month=10;
var result="";

switch (month) {
    case 1 :
        result="January";
        break;
    case 2 :
        result="February";
        break;
    case 3 :
        result="March";
        break;
    case 4 :
        result="April";
        break;
    case 5 :
        result="May";
        break;
    case 6 :
        result="June";
        break;
    case 7 :
        result="July";
        break;
    case 8 :
        result="August";
        break;
    case 9 :
        result="September";
        break;
    case 10 :
        result="October";
        break;
    case 11 :
        result="November";
        break;
    case 12 :
        result="December";
        break;
     default:
        result="Input must be a number between 1 and 12";
        break;
}
console.log(result)

//5.zadatak

var month=7;
var result="";

switch (month) {
    case 1 :
        result="It's winter";
        break;
    case 2 :
        result="It's winter";
        break;
    case 3 :
        result="It's spring";
        break;
    case 4 :
        result="It's spring";
        break;
    case 5 :
        result="It's spring";
        break;
    case 6 :
        result="It's summer";
        break;
    case 7 :
        result="It's summer";
        break;
    case 8 :
        result="It's summer";
        break;
    case 9 :
        result="It's autumn";
        break;
    case 10 :
        result="It's autumn";
        break;
    case 11 :
        result="It's autumn";
        break;
    case 12 :
        result="It's winter";
        break;
     default:
        result="Input must be a number between 1 and 12";
        break;
}
console.log(result)

//6.zadatak

var grade="C";
var result="";

switch (grade) {
    case "A" :
        result="Good job";
        break;
    case "B" :
        result="Pretty good";
        break;
    case "C" :
        result="Passed";
        break;
    case "D" :
        result="Not so good";
        break;
    case "F" :
        result="Failed";
        break;
   default :
        result="Unknown grade";
        break;
}
console.log(result)

//7.zadatak

var city="Venice";
var result="";

switch (city) {
    case "Novi Pazar" :
    case "Belgrade" :
    case "Novi Sad" :
        result="Serbia";
        break;
    case "Istanbul" :
    case "Ankara" :
    case "Bursa" :
    case "Izmir" :
        result="Turkey";
        break;
    case "Munchen" :
    case "Berlin" :
    case "Wiesbaden" :
    case "Hamburg" :
        result="Germany";
        break;
    case "Venice" :
    case "Rome" :
    case "Milano" :
        result="Italy";
        break;
    case "Madrid" :
    case "Barcelona" :
        result="Spain";
        break;
   default :
        result="Please choose a different city";
        break;
}
console.log(result)

//8. zadatak

var a=10;
var b=2;
var operation="*"
var result=""

switch (operation) {
    case "+" :
        result=a+b;
        break;
    case "-" :
        result=a-b;
        break;
    case "*" :
        result=a*b;
        break;
    case "/" :
        result=a/b;
        break;
}
console.log(result)