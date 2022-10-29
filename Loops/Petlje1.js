//1. zadatak
var sum=0;

for (i=1; i<=10; i++) {
    sum += i
}
    console.log("The sum of first ten numbers is: " + sum);

//2. zadatak

var a=5;
var cube=1;

for (i=1; i<=3; i++) {
    cube *= a
}
    console.log(a + " up to cube is " + cube)

//3. zadatak

var a= 7;
var factorial= 1

for (i=1; i<=7; i++) {
    factorial *= i
}
    console.log("Factorial of " + a + " is " + factorial)

//4. zadatak

var numberOfTerms=5;
var evenNumbers="";
var sumOfEvenNumbers=0;

for (i=1; i<=10; i++) {
    if (i % 2 ===0) {
        evenNumbers += " " + i;
        sumOfEvenNumbers += i;
    }
} console.log ("The even numbers are " + evenNumbers +
"\nTheir sum is " + sumOfEvenNumbers);

//5. zadatak

var a = 232 + "0";
var sum = 0;

for (i=1; i < a.length; i++) {
    sum += +a[i];
} 
console.log ("Sum of digits is " + sum);

//6. zadatak

var word= "Eclip542se";
var sumLetters= word.length;

for (i=0; i < word.length; i++) {
    if (word[i] === "0" ||
        word[i] === "1" ||
        word[i] === "2" ||
        word[i] === "3" ||
        word[i] === "4" ||
        word[i] === "5" ||
        word[i] === "6" ||
        word[i] === "7" ||
        word[i] === "8" ||
        word[i] === "9" )
  { sumLetters--;
}  
}
console.log ("There is " + sumLetters + " in word "+ word)

//7.zadatak

var array= [1, 3, 32, "$", "g", "h", "t", "s", "c", 66, 23, "h2"];

for (i=0; i < array.length; i++) {
    if (array[i] === "c") {
console.log("Index of letter C in given array is " + i);
 }
}
