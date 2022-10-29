// 1. Write a program that calculates the maximum of two given numbers.

function maxNumber(first, second) {
    if ( first > second) {
    result = first;
  } else {
    result = second;
  }
  return result;
}
var maximum = maxNumber(35, 84)
console.log(maximum);

// 2. Write a program that checks if a given number is odd.

function isOddNumber(number) {
    if (number % 2 != 0 ) {
        result = true
    } else {
        result = false
    }
    return result;
}
var oddNumber = isOddNumber (13);
console.log (result);

// 3. Write a program that checks if a given number is a three digit long number.

function isThreeDigitsLong (a) {
    if ((a + "").length === 3) {
        result = true
    } else {
        result = false
}
return result;
}
var threeDigitsLongNum = isThreeDigitsLong (2185);
console.log(result);

// 4. Write a program that calculates an arithmetic mean of four numbers.

function arithmeticMean (a, b, c, d) {
   var result = (a + b + c + d) / 4;
return result;
}
var aMean = arithmeticMean (4, 7, 15, 26);
console.log(aMean);

// 5. Write a program that draws a square of a given size. For example, if the size of square
// is 5 the program should draw:
// *****
// * *
// * *
// * *
// *****

function drawSquare(num) {
    var result1 = "";
    var result2 = "";
    var star = "*";
    var doubleStar = "*" + " " + "*";

  for (i = 0; i < num; i++) {
    result1 += star;
  }
  for (i = num; i <= num; i++) {
    result2 += doubleStar;
  }

  return `${result1}\n${result2}\n${result2}\n${result2}\n${result1}`;
}
var draw = drawSquare (5)
console.log(draw);

// 6. Write a program that draws a horizontal chart representing three given values. For
// example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

function drawChart(a, b, c) {
    var result1 = "";
    var result2 = "";
    var result3 = "";
    var star = "*";

  for (i = 0; i < a; i++) {
    result1 += star;
  }
  for (var k = 0; k < b; k++) {
    result2 += star;
  }
  for (var f = 0; f < c; f++) {
    result3 += star;
  }
  return `${result1}\n${result2}\n${result3}`;
}
var horizontalChart = drawChart (5, 3, 7)
console.log(horizontalChart);


// 7. Write a program that calculates a number of digits of a given number.
var numberOfDigits= 0
function digits (number) {
    number = number + "";
for (i=0; i<number.length; i++) {
    if ( number[i] == 0 ||
        number[i] == 1 ||
        number[i] == 2 ||
        number[i] == 3 ||        
        number[i] == 4 ||
        number[i] == 5 ||
        number[i] == 6 ||
        number[i] == 7 ||
        number[i] == 8 ||
        number[i] == 9
        ) {numberOfDigits ++;
} else continue;
} return numberOfDigits;
}
var digNumber = digits (591.56);
console.log(digNumber);

// 8. Write a program that calculates a number of appearances of a given number in a given
// array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

var a = [2, 4, 7, 8, 7, 7, 1];
var numberOfAppearence = 0;

function numOfApp(e) {
  for ( i = 0; i < a.length; i++) {
    if (a[i] === e) {
      numberOfAppearence ++;
    } else continue;
  }
  return numberOfAppearence;
}

var appearance = numOfApp (7);
console.log(appearance);

// 9. Write a program that calculates the sum of odd elements of a given array.

var array= [5, 8, 17, 3, 12, 21];
var sum= 0;

function sumOdd(array) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      sum += array[i];
    } else continue;
  }
  return sum;
}
var sumOfOdds = sumOdd (array);
console.log(sumOfOdds);

// 10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.

var numberOfA = 0;

function numOfletters(letter) {

for ( i = 0; i < letter.length; i++) {
    if (letter[i] === "A" || letter[i] === "a") {
        numberOfA ++;
    } else continue;
    } return numberOfA;
  } 

  var word = numOfletters ("Aldijana");
  console.log(word);


// 11. Write a program that concatenates a given string given number of times. For example, if
// “abc” and 4 are given values, the program prints out abcabcabcabc.

var sum= "";

function concatenates(string, numOfRepp) {

  for (i = 0; i < numOfRepp; i++) {
    sum += string;
  }

  return sum;
}

console.log(concatenates("abc", 4));