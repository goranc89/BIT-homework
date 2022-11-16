//1. Write a function that rotates a list by k elements.
//For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotatesList (arr, k) {
    var newArr= [];
    var a=0;
    for (i= k; i < arr.length; i++) {
       newArr[a] = arr[i]; a++;
    }
    for (i= 0; i < k; i++) {
        newArr[a] = arr[i]; a++;
    }

    console.log(newArr);
}
rotatesList([1,2,3,4,5,6], 2)



//2. Write a function that takes a number and returns array of its digits.

function numberToarray(num) {
    num = num + "";
    var sum= [];
    var index= 0;
    for (i=0; i < num.length; i++) {
        sum[i] =  num[i]; 
        index ++
    }
    return sum;
}
console.log(numberToarray(1568))

//3. Write a program that prints a multiplication table for numbers up to 12.

function multiplicationTable (num) {
    var result = "";
    for (var i = 1; i <= num; i++) {
        for (var j = 1; j <= num; j++) {
            result += (i + '*' + j + '=' + i * j + ' ');
        }
    }
    return result;
}
console.log(multiplicationTable(12));

//4. Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

function findMax(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
      var element = array[i];
      if (element > max && typeof element === "number") {
        max = element;
      }
    }
    return max;
  }
  console.log(findMax([1, 7, "65", "7", 88, 412, -4, 35, 145]));

//5. Napisati funkciju koja vraca najveci I najmanji element niza. Rezultat prikazati kao niz.

function findMaxMin(array) {
var newArr = [];
    var max = array[0];
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] > max && typeof array[i] === "number") {
        newArr[0] = array[i];
      }
      if (array[i] < min && typeof array[i] === "number") {
        newArr[1] = array[i];
      }
    }
    return newArr;
}
  var arr = [20, 3, "65", "7", 8, 12, -34, 65, 145];
  console.log(findMaxMin(arr));

//6. Napisati funkciju koja vraća medijanu niza. (Medijana je “srednji” broj niza kada su brojevi poređani od najmanjeg do najvećeg ako niz ima neparan broj elemenata. Ako ima paran
//broj onda se medijana definiše kao aritmetička sredina dve srednje vrednosti).

function median (array) {
    var max = array[0];
    var min = array[0];
    var position = 0;
    var newArr = [];
    var ind = 0;
    var med = 0;
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    for (var j = 0; j < array.length; j++) {
        for (var k = 0; k < array.length; k++) {
            if (array[k] !== null) {
                if (min > array[k]) {
                    min = array[k];
                    position = k;
                }
            }
        }
        newArr[j] = min;
        array[position] = null;
        min = max;
    }
    if (newArr.length % 2 === 0) {
        ind = newArr.length / 2;
        med = (newArr[ind] + newArr[ind - 1]) / 2;
    } else {
        med = (newArr[newArr.length / 2 - 0.5])
    }
    return med + ' is median';
}
console.log(median([2, 1, 5, 3, 4, 6, 7,9]));


// 7. Write a function to find and return the first, middle and last element of an array if the array
// has odd number of elements. If number of elements is even, return just the first and the
// last. In other cases (empty array), input array should be returned.

function firstMiddleLast (arrayNumbers) {
    var medianIndex = 0;
    if (arrayNumbers.length % 2 == 1) {
      medianIndex = (arrayNumbers.length - 1) / 2;
      return "First number in array is:"+arrayNumbers[0] + "\nLast number of array is:" + arrayNumbers[arrayNumbers.length - 1] + "\nThe number in the middle of array is:" + arrayNumbers[medianIndex];
    } else {
      return "First number in array is: "+arrayNumbers[0] + "\nLast number of array is:  " + arrayNumbers[arrayNumbers.length - 1];
    }
  }
  console.log(firstMiddleLast([1, 2, 3, 4, 5, 6, 7]));

// 8. Write a function to find the average of N elements. Make the function flexible to receive
// dynamic number or parameters.

function averageResult(arrayNum){
    var result;
    var sum = 0;
    for(i=0; i <= arrayNum.length; i++){
      sum += i;
      result = sum / (arrayNum.length);
    }
    return result;
  }
  console.log(averageResult([1,2,3,4,5,6,7,8]));

// 9. Write a function to find all the numbers greater than the average.

function greaterThanAverage(array){
    var greater=[];
    var result;
    var sum = 0;
    for(i=0; i <= array.length; i++){
      sum += i;
      result = sum / (array.length);
    }
    for(i=0; i<array.length; i++){
        if(array[i] > result){
          greater[greater.length] = array[i];
              }
      } return greater;
    }
    console.log(greaterThanAverage([1,2,3,4,5,6,7,8]));

// 10. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the
// square of the height (in meters). Write a function that takes two parameters, weight and
// height, computes the BMI, and prints the corresponding BMI category:
//  Starvation: less than 15
//  Anorexic: less than 17.5
//  Underweight: less than 18.5
//  Ideal: greater than or equal to 18.5 but less than 25
//  Overweight: greater than or equal to 25 but less than 30
//  Obese: greater than or equal to 30 but less than 40
//  Morbidly obese: greater than or equal to 40

function BMI(weight,height) {
    index = weight/(height*height);
    var result = '';
    switch (true) {
        case index < 15:
            result = 'Starvation'
            break;
        case index < 17.5:
            result = 'Anorexic'
            break;
        case index < 18.5 :
            result = 'Underweight'
            break;
        case index >= 18.5 && index < 25:
            result = 'Ideal'
            break;
        case index >= 25 && index < 30:
            result = 'Overweight'
            break;
        case index >= 30 && index < 40:
            result = 'Obese'
            break;
        case index >= 40:
            result = 'Morbildly obese'
            break;
    }
    return result;
}
  console.log(BMI(85,1.85));

// 11. Write a function that takes a list of strings and prints them, one per line, in a rectangular
// frame.:
// For example the list [&quot;Hello&quot;, &quot;World&quot;, &quot;in&quot;, &quot;a&quot;, &quot;frame&quot;] gets
// printed as:
// *********
// * Hello *
// * World *
// * in *
// * a *
// * frame *
// *********

function print (array) {
    var result = '';
    var star = '*';
    var newLine = '\n';
    var
     space = ' ';
    var maxWord = array[0].length;
    for (let x = 0; x < array.length; x++) {
        if (maxWord < array[x].length) {
            maxWord = array[x].length;
        }
    }      
    for (var i = -1; i <= array.length; i++) {
        for (var j = -2; j <= maxWord +1; j++) {
            if (i === -1 || i === array.length || j === -2 || j === maxWord +1) {
                result += star;
            } else if (j >= 0 && j < array[i].length) {
                result += array[i][j];
            } else {
                result += space;
            }
        }
        result += newLine;
    }
    return result;
}
console.log(print(["Hamza", "is", "a", "little", "lion "]));