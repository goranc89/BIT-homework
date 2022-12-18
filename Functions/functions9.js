// PART1
    
//     1. Write a function that checks if a given string contains 5 digits.
// Input: "1b8952abD"
// Output: true
//     1A. Modify previous task to check if it contains char or number "5". 

// Input: "1bser9re"
// Output: false

function digitsInString (string) {
    let result = true;

    for (let i=0; i < string.length; i++) {
       if (string.replace(/[^0-9]/g,"").length == 5) {
        return true;
       }
       else {
        return false
       }
    }
} console.log(digitsInString("1b8952abD"));

function checkString (string) {
    let result = true;
    for (let i=0; i < string.length; i++) {
        if (string[i] === "5") {
    return result; 
    }
    else {
    return false
    }
}

} console.log (checkString("1bser9re"));

//     2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

function stringReplace(string) {
    let sum= "";

for (let i=0; i < string.length; i++) {
    if (string[i] == "J" && string[i+1] == "S" ) {
        sum  += "**";
        i++;
    } else {
        sum += string[i];
        }
    }
    return sum;
} console.log(stringReplace("Programming in JS is super interesting!"))


//     3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’ 
// Output: “Good morning” 

function insertCharacter(string, position, letter) {
    let newString="";

    for (let i=0; i < string.length; i++) {
        if(i == position - 1) {
            newString += letter;
        } else {
            newString += string[i];
        }
    } 
    return newString;
}
console.log(insertCharacter("Goo  morning", 4, "d"));


//     4. Write a function that deletes a character from the given position in the string. 
// Input: “Goodd morning!”, 3 
// Output: “Good morning!” 

function deleteChar(string, position) {
    let newString="";

    for (let i=0; i < string.length; i++) {
        if(i == position + 1) {
            newString += "";
        } else {
         newString += string[i];
        }
    } 
    return newString;
}
console.log(deleteChar("Goodd morning", 3));

//     5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67];
// Output: [3, 1, 90, 23, 67];

function delElement(array) {
    let newArr= [];

    for (let i=0; i < array.length; i++) {
        if (i % 2 != 0) {
            continue;
        } else {
         newArr[newArr.length] = array[i];
        }
    } 
    return newArr;
}
console.log(delElement([3, 5, 1, 8, 90, -4, 23, 1, 67]));

//PART 2

// 6. Write a function that replaces the elements of the given array between two positions with their doubled values. 
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]

function replaceElements(array, position1, position2) {
    let newArr= [];

    for (let i=0; i < array.length; i++) {
        if (i >= position1 && i <= position2) {
           newArr[i] = array[i] * 2
        } else {
         newArr[newArr.length] = array[i];
        }
    } 
    return newArr;
}
console.log(replaceElements([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));


//     7. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true

function checkElements(array1, array2) {
    let result= true;
    let counter= 0;

for (let i=0; i < array1.length; i++) {
     for (let j=0; j < array2.length; j++) {
         if (array1[i] === array2[j]) {
            counter ++;
            break;
          }
        }
    }
    if (counter == array1.length) {
                return result;
            } else {
         return false
    }
} 
console.log(checkElements([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));

//drugi nacin

arr1= [3, 4, 1, 3,]
arr2= [8, 9, 3, 1, 11, 4, 3]
let allFounded = arr1.every( ai => arr2.includes(ai) );
console.log(allFounded);

//     8. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
// Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]

function numOfA(string) {
    let counter= 0;
    for (let i=0; i < string.length; i++) {
        if (string[i]== "a" || string[i] == "A") {
            counter ++;
        }
    }
    return counter;
} console.log(numOfA("apple"));

function sortArr (arr) {
    let firstEl;
    for (let i=0; i < arr.length; i++) {
        for (let j= i+1; j < arr.length; j++){
            if (numOfA(arr[i])> numOfA(arr[i])) {
                    firstEl = arr[i];
                    arr[i] = arr[j];
                    arr[j] = firstEl;
            } 
        }
    }
    return arr;
} 
console.log (sortArr(["apple", "tea", "amazing", "morning", "JavaScript"]));


//     9. Write a function that prints out the date of the next day. 
// Output:  25. 10. 2018. 

function calcNextDay(year, month, day) {
    var date = new Date(year, month, day );
    var oneDay = 24 * 60 * 60 * 1000;
    var nextDate = new Date(date.getTime() + oneDay);
    console.log(nextDate.getDate() + "." + nextDate.getMonth() + "." + nextDate.getFullYear()+ ".");
}
 calcNextDay(2018, 10, 24);

//     10. Write a function that prints out the date of the previous day. 
// Output:  23. 10. 2018. 

function calcPrevDay(year, month, day) {
    var date = new Date(year, month, day );
    var oneDay = 24 * 60 * 60 * 1000;
    var nextDate = new Date(date.getTime() - oneDay);
    console.log(nextDate.getDate() + "." + nextDate.getMonth() + "." + nextDate.getFullYear()+ ".");
}
 calcPrevDay(2018, 10, 24);

//     11. Write a function that prints out an array of the numbers aligned from the right side.
// Input: [78, 111, 4, 4321]
// Output: 
//   78
//  111 
//    4
// 4321

function printNumbersAlignedToRight(arr) {
    var strArr = [];
    var result = "";
    var longestInd = 0;
    var diference = 0;

    for (var i = 0; i < arr.length; i++) {
      // convert to string
      strArr[i] = String(arr[i]);

      if (strArr[i].length > longestInd) {
        longestInd = strArr[i].length;
      }
    }

    for (var i = 0; i < strArr.length; i++) {
      diference = longestInd - strArr[i].length;
      // repeat method gugl
      result += " ".repeat(diference) + strArr[i] + "\n";
    }
    return result;
  }

  console.log(printNumbersAlignedToRight([78, 111, 4, 4321]));