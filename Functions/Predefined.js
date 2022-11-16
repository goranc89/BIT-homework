// 1. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]

var outputArray = [];
var inputArray = ["1", "21", undefined, "42", "1e+3", Infinity];
var index = 0;
for (i = 0; i < inputArray.length; i++) {
  var check = parseInt(inputArray[i]);
  if (isNaN(check) == true) {
    continue;
  } else {
    outputArray[index] = check;
    index++;
  }
}
console.log(outputArray);

// 2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
// Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
// Output: “015false-2247”

var sum = "";
var a = [NaN, 0, 15, false, -22, "", undefined, 47, null];
for (i = 0; i < a.length; i++) {
  var check = parseInt(a[i]);
  if (isNaN(check) == true && a[i] != false) {
    continue;
  } else sum += a[i];
}
result = sum;
console.log(result);

// 3. Write a program to filter out falsy values from the array.
// Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
// Output: [15, -22, 47]

var outputArray3 = [];
var index = 0;
var a = [NaN, 0, 15, false, -22, "", undefined, 47, null];
for (i = 0; i < a.length; i++) {
  if (Boolean(a[i]) == true) {
    outputArray3[index] = a[i];
    index++;
  } else continue;
}

console.log(outputArray3);

// 4. Write a program that calculates a number of integer values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
// Output: 3

var a = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];
var numberOfIntegerValues = 0;
for (i = 0; i < a.length; i++) {
  if (parseInt(a[i]) == a[i]) {
    numberOfIntegerValues++;
  } else continue;
}
console.log(numberOfIntegerValues)

// 5. Write a program that calculates a number of float values in the array.
// Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
// Output: 2

var a = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];
var numberOfFloatValues = 0;
var numberOfIntegerValues = 0;

for (i = 0; i < a.length; i++) {
  if (Boolean(a[i]) == false) continue;
  else {
    if (parseInt(a[i]) == a[i]) {
      numberOfIntegerValues++;
    } else numberOfFloatValues++;
  }
}
console.log(numberOfFloatValues);