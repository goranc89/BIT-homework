
    //  1. Write a function to check whether the `input` is a string or not.
    // "My random string" -> true
    // 12 -> false

    function checkInput(input) {
      if (input === Number(input)) {
        console.log("false");
      } else if (input === String(input)) {
        console.log("true");
      } else console.log("false");
    }
    
    checkInput("My random string");

    // 2. Write a function to check whether a string is blank or not.
    // "My random string" -> false
    // " " -> true
    // 12 -> false
    // false -> false
  
    function checkBlank(input) {
      if (input === Number(input)) {
        console.log("false");
      } else if (String(input) === " " || String(input) === " ") {
        console.log("true");
      } else if (input === String(input)) {
        console.log("false");
      } else console.log("false");
    }
    
    checkBlank(" ");

    // 3. Write a function that concatenates a given string n times (default is 1).
    // "Ha" -> "Ha"
    // "Ha", 3 -> "HaHaHa"
    
    function concatenate(string, numberOfConcat) {
      var result = "";
      for (i = 0; i < numberOfConcat; i++) {
        result += string;
      }
    
      console.log(result);
    }
    
    concatenate("Ha", 10 );

    // 4. Write a function to count the number of letter occurrences in a string.
    // "My random string", "n" -> 2
    
    function countLetters(string, letter) {
      var counter = 0;
      for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) counter++;
      }
      console.log(counter);
    }

    countLetters("my rannndom strinnnng", "n");
    

    // 5. Write a function to find the position of the first occurrence of a character in a string.
    // The result should be the position of character.
    // If there are no occurrences of the character, the function should return -1.
    
    function findIndex(string, letter) {
      var index = 0;

      for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
          index = i;
          break;
        } else {
          index = -1;
        }
      }

      console.log(index);
    }

    findIndex("We are having fun", "e");

    // 6. Write a function to find the position of the last occurrence of a character in a string.
    // The result should be in human numeration form. If there are no occurrences of the character,
    // function should return -1.

    function findLastIndex(string, letter) {
      var index = 0;

      for (var i = string.length - 1; i >= 0; i--) {
        if (string[i] === letter) {
          index = i + 1;
          break;
        } else {
          index = -1;
        }
      }

      console.log(index);
    }

    findLastIndex("We are having fun", "n");

    // 7. Write a function to convert string into an array.
    // Space in a string should be represented as “null” in new array.
    // "My random string" -> ["M", "y", null, "r", "a"]
    // "Random" -> ["R", "a", "n", "d", "o", "m"]

    function convertIntoArr(string) {
      var arr = [];

      for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
          arr[i] = null;
        } else {
          arr[i] = string[i];
        }
      }

      console.log(arr);
    }
    convertIntoArr("My random string");

//8. Write a function that accepts a number as a parameter and checks if the number is prime or not.
//Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function primeNumber(num) {
  var result = 0;

  if (num <= 1) {
    result = num + " is not a prime";
  } else if (num === 2) {
    result = num + "is a prime";
  } else {
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      result = num + " is not a prime";
      break;
    } else {
      result = num + "is a prime";
    }
  }
}
return console.log(result);
}
primeNumber(6);


//9. Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
//"My random string", "_" -> "My_random_string";
//"My random string", "+" ->; "My+random+string";
//"My random string" -> "My-random-string";

function replaceSpace(string, separator) {
  var sum = "";

  if (separator === "+" ) {
    separator = "+";
  } else separator === undefined;

  for (i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      sum += separator;
    } else {
      sum += string[i];
    }
  }
  return sum;
}

var newString = replaceSpace("i love you", "+");
console.log(newString);

//10. Write a function to get the first n characters and add “...” at the end of newly created string.


function addDots(string) {
  var newString = "";
  for (i = 0; i < 6; i++) {
    newString += string[i];
  }
  newString += "...";
  return newString;
}

var myNewString = addDots("i love you")
console.log(myNewString);

//11. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
//["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]


function stringToNumber(array) {
  var newArray = [];
  var index = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === String(array[i])) {
      newArray[index] = Number(array[i]);
      index++;
    } else continue;
  }
  return newArray;
}
var array11 = ["1", "21", undefined, "42", "1e+3", Infinity];
var numberArray = stringToNumber(array11);
console.log(numberArray);


//12. Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
//already retired, a proper message should be displayed.

function isRetired(yearOfBirth, gender) {
  if (gender === "male") {
    years = 65 - (2022 - yearOfBirth);

    if (years > 0) {
      result = `You have ${years} years until you retire`;
    } else if (years <= 0) {
      result = `You have already retired`;
    }
  } else if (gender === "female") {
    years = 60 - (2022 - yearOfBirth);

    if (years > 0) {
      result = `You have ${years} years until you retire`;
    } else if (years <= 0) {
      result = `You have already retired`;
    }
  }
  return result;
}

var retired = isRetired(1961, "female");
console.log(retired);

////13. Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th


function humanizeNumber(num) {
  if (num === 1) {
    num = num + "st";
  } else if (num === 2) {
    num = num + "nd";
  } else if (num === 3) {
    num = num + "rd";
  } else if (num > 3) {
    num = num + "th";
  }
  return num;
}

var howDoYouWriteThisNumber = humanizeNumber(824);
console.log(howDoYouWriteThisNumber);