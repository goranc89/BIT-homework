//1. Find the min and max element in the following array and switch their places. Print out the modified array in the console.
//Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
//Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]


function findMinAndMax(arr) {
    var result=[];
    var min = arr[0];
    var max = arr[0];
    for (i=0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
            minIndex = i;
        } 
        if (max < arr[i]) {
            max = arr[i];
            maxIndex= i;
        }
    }

for (j=0; j < arr.length; j++) {
    if (j == minIndex) {
        result[j] = max;
    } else if (j == maxIndex) {
        result[j]= min;
    } else 
       result[j] = arr[j];  
}
console.log(result);
}

findMinAndMax([3, 500, 12, 149, 53, 414, 1, 19]);

// 2. Use the following array to make a new one by dividing its values by two and adding 5. If
// a given element's value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

function changeArr(arr) {
    var result = [];
for (i=0; i < arr.length; i++) {
    if (arr[i] == 0) {
        result[i] = 20;
    } else {
        result[i] = arr[i] / 2 + 5;
    } 
}
console.log(result);
}
changeArr([3, 500, 0, 149, 53, 414, 1, 19])


// 3. Initialize two arrays. The first one should contain student names, the second one the
// number of points for each student. Display student's names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input:
// [ "Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

function studentsGrades(arr1, arr2) {
    var result="";
    for (i=0; i < arr1.length; i++) {
        if (arr2[i] <=50) {
            result += arr1[i] + " acquired " + arr2[i] + " and failed\n";
        }
        if (arr2[i] > 50 && arr2[i] < 61) {
            result += arr1[i] + " acquired " + arr2[i] + " and earned 6\n";
        }
        if (arr2[i] > 60 && arr2[i] < 71) {
            result += arr1[i] + " acquired " + arr2[i] + " and earned 7\n";
        }
        if (arr2[i] > 70 && arr2[i] < 81) {
            result += arr1[i] + " acquired " + arr2[i] + " and earned 8\n";
        }
        if (arr2[i] > 80 && arr2[i] < 91) {
            result += arr1[i] + " acquired " + arr2[i] + " and earned 9\n";
        }
        if (arr2[i] > 90 && arr2[i] < 100) {
            result += arr1[i] + " acquired " + arr2[i] + " and earned 10\n";
        }
    }
        console.log(result)
}

studentsGrades([ "Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"], [ 50, 39, 63, 72, 99, 51, 83, 59 ])


// 6. Write a program that uses a loop to add all the even numbers from 1 to 1000 and
// subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
// multiplied by 12.5 and displayed in console.
// Output: 2350000

function sumAndSub () {
    var sum=0;
    for (i=2; i<=1000; i+=2) {
    sum += i;
}

    var sub=0;
    var result=0;
for (j=1; j<=500; j+=2) {
    sub += j;
    result= (sum - sub) * 12.5
}
  return result;
}
console.log(sumAndSub())

// 7. Define a 10 element array. Take the first two letters from every string (that has at least 2
// letters) in the array and create a new string from them. Print it out in the console.
// Input: ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"] Output: AnStJoJoDaMa

function firstTwoLetters (arr) {

    var string = "";

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > 1) {
            for (var j = 0; j < 2; j++) {
                string += arr[i][j];
            }
        }
    }
    return string;
}

console.log(firstTwoLetters(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));


// 8. Write a program that takes a string and prints its characters out in reversed order in the console.
// Input: Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

function reversedString(string) {
    var string1=""
    for (i=string.length - 1; i>=0; i--) {
        string1 += string[i]
    }
    return string1
}
console.log(reversedString("Belgrade Institute of Technology"))

// 9. Write a program that displays all the combinations of two numbers between 1 and 7.
// Don't display two of the same numbers at the same time. Display the number of possible
// combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

function numberComb () {
    var comb= "";
    for (i=1; i<=7; i++) {
        for (j=1; j<=7; j++) {
            if (i === j) {
                continue;
            }
            console.log(j,i);
        }
    }
}
numberComb();


// 10. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// Input: 17 | 15
//Output: true | false

function isPrime() {
    var num = 15;
    var result = "";
    for ( i = 2; i < num; i++) {
        if (num % i == 0) {
            result = false;
            break;
        } else {
            result = true;
    }
}
console.log (result)
}
isPrime()

// 11. Check if a given string is a palindrome (spaces are ignored).
// Input: eye | Geek | a nut for a jar of tuna
// Output: true | false | true

function isPalindrome(string) {
    for (i=0; i=string.length; i++) {
        for (j=string.length-1; i>0; i--) {
            if (string[i] != string[j-i]) {
                return false;
            } else {
                return true;
            }
        }
    }
}
console.log(isPalindrome("eye"));

// 12. Write a program that calculates the greatest common divisor of two integers. Note: The
// greatest common divisor of two non-zero integers is the greatest positive number that
// divides both numbers with no remainder.
// Input: 192 42 | 81 9
// Output: 6 | 9

function greatestCommonDiv() {
    var a=192;
    var b=42;
    var div=0;
    for (i=1; i<=a && i<=b; i++) {
        if (a % i == 0 && b % i == 0) {
            div= i;
        }
    } 
    console.log(div);
}
greatestCommonDiv()