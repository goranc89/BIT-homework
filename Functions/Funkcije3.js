//1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).
//"My random string", "JS " -> "JS My random string";
//"My random string", "JS ", 10 -> "My random JS string";

function insertString(string, insertedString, position) {
    var newString = "";
    insertedString = " " + insertedString + " ";
    var index = 0;
    if (position === undefined) {
      position = 0;
    }
    for (i = 0; i <= string.length; i++) {
      if (i === position) {
        newString += insertedString;
      } else {
        newString += string[index];
        index++;
      }
    }
    return newString;
  }
  
  var sentence = insertString("I love you", "don't", 2);
  console.log(sentence);
  
  //2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
//[NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
  

  function joinIntoString(array) {
    var string = "";
    for (i = 0; i < array.length; i++) {
        var check = isNaN(array[i]);
      if (
        array[i] == undefined ||
        array[i] == null ||
        array[i] == NaN ||   
        check === true ||
        array[i] == Infinity
      ) {
        continue;
      } else string += array[i];
    }
    return string;
  }
  
  var NewString = joinIntoString([NaN, 0, 15, false, -22, "", undefined, 47, null]);
  console.log(NewString);
  
  
//3. Write a program to filter out falsy values from the array.
//[NaN, 0, 15, false, -22, "", undefined, 47, null] -> [15, -22, 47]
  
  function filterFalsyValues(array) {
    var newArray = [];
    var index = 0;
  
    for (i = 0; i < array.length; i++) {
      var check = isNaN(array[i]);
      if (
        array[i] === false ||
        array[i] === 0 ||
        array[i] === "" ||
        array[i] === undefined ||
        array[i] === null ||
        array[i] === NaN ||
        check === true
      ) {
        continue;
      } else {
        newArray[index] = array[i];
  
        index++;
      }
    }
    return newArray;
  }
  
  var truthyValues = filterFalsyValues([NaN, 0, 15, false, -22, "", undefined, 47, null]);
  console.log(truthyValues);
  
//4. Write a function that reverses a number. The result must be a number. 12345 -> 54321. Output must be a number
  
  function reverseNum(num) {
    num = num + "";
    var string = "";
    for (i = num.length - 1; i >= 0; i--) {
      string += num[i];
    }
    string = String(string);
    return string;
  }
  
  var myNum = reverseNum(123456789);
  console.log(myNum);
  
// 5. Write a function to get the last element of an array. Passing a parameter "n" will return the  last "n" elements of the array.
// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]
  
  function lastElement(array, n) {
    var result = [];
    var index = n - 1;
    if (n == undefined) {
      n = array.length - 1;
      result = array[n];
    } else {
      for (i = array.length - 1; i > array.length - 1 - n; i--) {
        result[index] = array[i];
        index--;
      }
    }
    return result;
  }
  
  var whatIsTheLastElement = lastElement([7, 9, 0, 2, 4, 5], 3);
  console.log(whatIsTheLastElement);
  

// 6. Write a function to create a specified number of elements with pre-filled numeric value array.
// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null]


  function preFilled(numberOfElements, value) {
    var arrayPre = [];
    if (value === undefined) {
      value = null;
    }
    for (i = 0; i < numberOfElements; i++) {
      arrayPre[i] = value;
    }
    return arrayPre;
  }
  
  var array1 = preFilled(2);
  console.log(array1);
  
//7. Write a function that says whether a number is perfect. 28 -> 28 is a perfect number.
//Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum
//of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known
//as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors
//(including itself).
//E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6.
//Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next
//perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.


  function perfectNumber(num) {

    var result = "";
    var sum = 0;
    for (i = 1; i <= num; i++) {
      if (num % i == 0) {
        sum += i;
      } else continue;
    }
    console.log(sum);

    if (num === sum / 2) {
      result = `The number ${num} is a perfect number!`;
    } else result = `The number ${num} is not a perfect number!`;
  
    return result;
  }
  
  var myPerfectNumber = perfectNumber(496);
  console.log(myPerfectNumber);
  
//8. Write a function to find a word within a string.
// 'The quick brown fox', 'fox', -> "'fox' was found 1 times"
// 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

function findMyWord(string, word) {
    var sum = "";
    var stringArray = [];
    var index = 0;
    for (i = 0; i < string.length; i++) {
      if (string[i] == " " && i < string.length - 1) {
        stringArray[index] = sum;
        index++;
        sum = "";
      } else if (string[i] != " " && i < string.length - 1) {
        sum += string[i];
      } else if ((i = string.length - 1)) {
        sum += string[string.length - 1];
        stringArray[index] = sum;
      }
    }
    console.log(stringArray);
    var numOfApp = 0;
    for (i = 0; i < stringArray.length; i++) {
      if (word == stringArray[i]) {
        numOfApp++;
      } else continue;
    }
  
    numOfApp > 1
      ? (result = `The word ${word} was found ${numOfApp} times`)
      : (result = `The word ${word} was found ${numOfApp} time`);
    return result;
  }
  
  var myWord = findMyWord("The quick brown fox", "fox");
  //var myWord = findMyWord("aa bb cc dd aa", "aa");
  
  console.log(myWord);
  

//9. Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"
  
 function hideEmail(mailAddress) {
    var sum = [];

    for (i = 0; i < mailAddress.length; i++) {
      sum[i] = mailAddress[i];
    }
  
    for (j = 0; j < sum.length; j++) {
      if (sum[j] == "@") {
        break;
      } else {
        sum[j] = "*";
      }
      
    }
    var string = "";
    for (k = 0; k < sum.length; k++) {
      string += sum[k];
    }
    return string;
  }
  
  var myMail = hideEmail("aldina.sehovic@gmail.com");
  console.log(myMail);
  
//10. Write a program to find the most frequent item of an array.
//[3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
  
  function mostFrequentItem(arr) {
    var frequencyArray = [];
    for (i = 0; i < arr.length; i++) {
      var frequency = 0;
      var item = arr[i];
      for (j = 0; j < arr.length; j++) {
        if (item == arr[j]) {
          frequency++;
        } else continue;
      }
      frequencyArray[i] = frequency;
    }
    var max = 0;
    var max_i = 0;
    for (i = 0; i < frequencyArray.length; i++) {
      if (frequencyArray[i] > max) {
        max = frequencyArray[i];
        max_i = i;
      } else continue;
    }
    result = `The item ${arr[max_i]} is the most frequent item of the array`;
    return result;
  }
  
  var item = mostFrequentItem([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);
  console.log(item);
