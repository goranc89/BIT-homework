//1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

var e = 3;
var a = [5, -4.2, 3, 7];
var b = [5, -4.2, 18, 7];
function isItHere(array, e) {
  var result = "";
  for (i = 0; i < array.length; i++) {
    if (array[i] === e) {
      result = `The element ${e} is in the array`;
    } else continue;
  }
  result === ""
    ? (result = `The element ${e} is not in the array`)
    : (result = result);
  return result;
}

var checkVar = isItHere(a, e);
console.log(checkVar);

// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function multiplyPositive(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      array[i] = array[i] * 2;
    }
  }
  return array;
}

var positiveArray = multiplyPositive([-3, 11, 5, 3.4, -8]);
console.log(positiveArray);

// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function minimum(array) {
  var minimum = array[0];
  var arr = "";
  for (i = 0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
      index = i;
    } else continue;
  }

  return (arr = minimum + " " + index);
}

console.log(minimum([4, 2, 2, -1, 6]));

//4. Write a program that finds the second smallest number and prints out its value.
//Input array: [4, 2, 2, -1, 6]
//Output: 2

function smallerButNotSmallest(array) {
  var minimum = array[0];
  var secondMinimum = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i];
    } else continue;
  }
  for (i = 0; i < array.length; i++) {
    if (array[i] > minimum && secondMinimum > array[i]) {
      secondMinimum = array[i];
    } else continue;
  }
  return secondMinimum;
}

console.log(smallerButNotSmallest([4, 2, 2, -1, 6]));

//5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function sumPositive(array) {
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    } else continue;
  }
  return sum;
}

console.log(sumPositive([3, 11, -5, -3, 2]));

// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.

function isItSymmetric(array) {
  var counter = 0;
  for (i = 0; i < array.length; i++) {
    if (array[0 + i] === array[array.length - 1 - i]) {
      counter++;
    }
  }
  counter === array.length
    ? (result = `The array is symmetric`)
    : (result = `The array is not symmetric`);
  return result;
}

console.log(isItSymmetric([2, 4, -2, 7, -2, 4, 2]));
console.log(isItSymmetric([3, 4, 12, 8]));

// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function intertwine(array1, array2) {
  var outputArray = [];
  for (i = 0; i < array1.length + array2.length; i += 2) {
    outputArray[i] = array1[i - i / 2];
    outputArray[i + 1] = array2[i - i / 2];
  }
  return outputArray;
}

console.log(intertwine([4, 5, 6, 2], [3, 8, 11, 9]));


// 8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function concatenate(array1, array2) {
  var outputArray = [];
  for (i = 0; i < array1.length; i++) {
    outputArray[i] = array1[i];
  }
  for (i = 0; i < array2.length; i++) {
    outputArray[i + array1.length] = array2[i];
  }
  return outputArray;
}

console.log(concatenate([4, 5, 6, 2], [3, 8, 11, 9]));

//9. Write a program that deletes a given element e from the array a. 
//Input: e = 2, a = [4, 6, 2, 8, 2, 2]
//Output array: [4, 6, 8]

function deleteElement(a, e) {
  var arr1 = [];
  for (i = 0; i < a.length; i++) {
    if (a[i] === e) {
      delete a[i];
    } else continue;
  }
  var index = 0;
  for (j = 0; j < a.length; j++) {
    if (a[j] != undefined) {
      arr1[index] = a[j];
      index++;
    }
  }
  a = arr1;

  return a;
}

console.log(deleteElement([4, 6, 2, 8, 2, 2], 2));

//10. Write a program that inserts a given element e on the given position p in the array a. If
//the value of the position is greater than the array length, print the error message.
//Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
//Output: [2, -2, 33, 78, 12, 5, 8]

function insertElement(a, e, p) {
  var outputArray = [];
  var index = 0;
  if (p <= a.length) {
    for (i = 0; i <= a.length; i++) {
      if (i != p) {
        outputArray[i] = a[index];
        index++;
      } else {
        outputArray[i] = e;
      }
    }
  } else outputArray = "ERROR";
  return outputArray;
}
console.log(insertElement([2, -2, 33, 12, 5, 8], 26, 5));