//1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for (i=0; i<16; i++) {
    if(i % 2 === 0) {
        console.log("Number is even " + i);
    }
    else console.log ("Number is odd "+ i)
}

//2. Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0

for (i=0; i<1000; i++) {
    if (i % 3 == 0 && i % 5 == 0)
    sum += i ;
}
console.log(sum)


//3. Write a program that will iterate from 0 to 10 and display squares of numbers.

var result= 0

for (i=0; i<11; i++) {
    result = i ** 2;
console.log(result)
}

//4. Write a program to compute the sum and product of an array of integers.

 var arrayOfIntegers= [6, 8, 19, 24, 65, 127]
var sum= 0
var product= 1
 for (i=0; i<arrayOfIntegers.length; i++) {
    sum += arrayOfIntegers[i] ;
    product *= arrayOfIntegers[i];
 }
 console.log ("The sum is " + sum);
 console.log ("The product is " + product)

//5. Write a program which prints the elements of the following array as a single string.

var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
var sum=""
for (i=0; i<x.length; i++) {
    sum += x[i];
}
console.log(sum)

//6. Write a program that prints the elements of the following array.

var a = [[1, 2, 1, 24],[8, 11, 9, 4],[7, 0, 7, 27]];

for (i = 0; i<a.length; i++) {
    for (j=0; j<a[i].length; j++)
    console.log (a[i][j]);
}
//7. Write a program that outputs the sum of squares of the first 20 numbers.

var square=0
var sum=0
for (i=0; i<21; i++) {
    square= i ** 2
    sum += square
}
console.log(sum)

//8. Write a program that computes average marks of the following students. Then use this average to determine the corresponding grade.

var marks= [ 80, 87, 88, 95, 68 ]
var sum=0
for (i=0; i<marks.length; i++) {
    sum += marks[i];
}
average= sum / marks.length
console.log(sum)
console.log(average)

if (average < 100) {
    result= "The mark is A"
}

else if (average < 90) {
    result= "The mark is B"
}
else if (average < 80) {
    result= "The mark is C"
}
else if (average < 70) {
    result= "The mark is D"
}
else if (average < 60) {
    result= "The mark is F"
}
console.log(result)

//9. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your
//program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print
//'Fizz"; or "Buzz" for numbers divisible by only one of those).

var result1=""
var result2=""
var result3=""

for (i=0; i<101; i++) {
if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz")
}
else if (i % 3 == 0) {
    console.log("Buzz")
}
else if (i % 5 === 0) {
    console.log("FizzBuzz")
}
else console.log(i)
}