// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

function duplicateElements (arr) {

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i], arr[i]);
    }
    return newArr;
}

console.log(duplicateElements ([2, 4, 7, 11, -2, 1]));


// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

function removeDuplicate (arr) {
    return arr.filter (function (a, index) {
        return arr.indexOf(a) === index;
    });
}

console.log(removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]))

// 3.
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

//a

function findOdd (arr) {

    var oddEl = arr.find(function (a){
        return a % 2 !== 0;
    });
    if (oddEl) {
        return true;
    } else {
        return false;
    }
} 
console.log(findOdd([1, 2, 9, 2, 1]));

//b

function countElLessMiddleEl (arr) {
    if (arr.length % 2 === 0) {
        return 'ERROR';
    }
    
    //KOMENTAR: Nepotrebno koristis Math objekat :) Ali nema veze. Ubuduce samo malkice povedi racuna ima li smisla koristiti neki objekat/funkciju.
    var middle = Math.floor(arr.length / 2);
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] < middle){
            count++;
        }
    }
    return count;

    }

console.log(countElLessMiddleEl([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

function smallestEl (arr) {
    var obj = {};
    var min = Math.min(...arr);
    var minLastIndex = arr.lastIndexOf(min);
    obj = {min, minLastIndex}
    return obj;
}

console.log(smallestEl([1, 4, -2, 11, 8, 1, -2, 3]));

// 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

function lessThanGivenEl (arr, number) {
    
    var newArr = arr.filter(function (a) {
        return a < number
    });
    return newArr;
}
console.log(lessThanGivenEl([2, 3, 8, -2, 11, 4], 6));

// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

function findEl (arr) {
    var a = "pro";
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if(a === arr[i].toLowerCase().slice(0 , 3)) {
            newArr.push(arr[i]);
        } 
    }
    return newArr;
}

console.log(findEl(["JavaScript", "Programming", "fun", "product"]));

// c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.

function example (arr, str) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if(str === arr[i].toLowerCase().slice(0, 4)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function callBack (arr, str, func){
    return func(arr, str);
}

console.log(callBack(["JAva", "jaVa", "programming", "something"], "java", example));


// 6.
// a. Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// [ {name: ‘apples’, price: 100}, {name: ‘milk’, price: 80}, {name:’bananas’, price: 150}]

function createList (name, price) {
    this.name = name,
    this.price = price
}
var listProducts = [];
var obj1 = {name: "apples", price: 100};
var obj2 = {name:"bananas", price: 150};
var obj3 = {name: "milk", price: 80};

listProducts.push(obj1, obj2, obj3);

console.log(listProducts);

// b. Write a function that calculates the total price of your shopping list.

function totalPrice (total) {
    var sum = 0;
    for (var i = 0; i < total.length; i++){
        sum += total[i].price;
    }
    return "Total price is: " + sum;
}

console.log(totalPrice(listProducts));

// c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.

var averagePrice = listProducts.reduce (function (a, b) {
    return a + b.price / listProducts.length;
}, 0);

var average = averagePrice.toFixed(3);

console.log("Average price of products:", average);

// d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.

listProducts.sort(function (a, b) {
    return a.price - b.price;
})

var mostExpensive = listProducts[listProducts.length - 1].name.toUpperCase();
console.log(mostExpensive);

// 7.
// a. Write a function that checks if a given string is written in all capitals.

function checkCapitals (str) {
    if (str === str.toUpperCase()) {
        return 'String is fine.'
    } else {
        return 'String must be written in all capitals !!!'
    }
}
console.log(checkCapitals("hamza"));
console.log(checkCapitals("HAMZA"));

// b. Write a function that checks if a given string contains any digits.

function checkDigits (str) {

    var sum = 0;
    var check;

    for (var i = 0; i < str.length; i++) {
        if (isNaN(parseInt(str[i])) === false) {
            sum++;
        } 
    }
    if (sum > 0) {
        check = "String is fine, it contains digit.";
    } else {
        check = "String isn\'t ok, it must contains digit !!!";
    }
    return check;
    
}
console.log(checkDigits("Hamza2610"));
console.log(checkDigits("Hamza"));

// c. Write a function that checks if a given string is a valid hexadecimal color.

    function validHex (string) {

    var newString = "";

    if (string.length > 7) {
        return "The given string is not a valid hexadecimal color.";

    } else if (string[0] !== "#") {
        return "The given string is not a valid hexadecimal color."
    } else {
        newString += string[0];
        for (var i = 1; i <= 6; i++){
            if((string[i] === "A" || string[i] === "a") || 
            (string[i] === "B" || string[i] === "b") || (string[i] === "C" || string[i] === "c") ||
            (string[i] === "D" || string[i] === "d") || (string[i] === "E" || string[i] === "e") ||
            (string[i] === "F" || string[i] === "f") || (string[i] >= 0 || string[i] <= 9)){
                newString += string[i];
            } 
        }
    }
    return "The given string is a valid hexadecimal color."
}
console.log(validHex("#4ae57e"));

// d. Write a function that checks if a given number belongs to the interval from 1900 to 2018.

    function ifNumberBelongs (number) {
    if (number >= 1900 && number <= 2018){
        return true;
    } else {
        return false;
    }
}
console.log(ifNumberBelongs(1950));
console.log(ifNumberBelongs(2021));

// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function validator(stringValidator, passwordValidator, colorValidator, yearValidator) {
    return {
        string: checkCapitals(stringValidator),
        password: checkDigits(passwordValidator),
        color: validHex(colorValidator),
        year: ifNumberBelongs(yearValidator),
    }
}

console.log(validator("Hamza", "Hamza2610", "#457fda", 2000));
console.log(validator("HAMZA", "hamza", "#457f", 2022));


// 8. Write a function that calculates a number of days to your birthday.

// Input: 25 February
// Output: 5 days

function calculateDays (today, birthday) {
    var dayToday = new Date (today);
    var dayBirthday = new Date (birthday);

    var restDays = dayBirthday.getTime() - dayToday.getTime();

    return Math.round(restDays / (1000 * 3600 * 24)) + " days.";
}

console.log(calculateDays("12/17/2022","10/13/2023"));

// 9. Write a function that for a given departure and arrival time calculates the time the trip
// takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds

function calcTime (departure, arrival) {
    var timeDeparture = new Date (departure);
    var timeArrival = new Date (arrival);
    var hoursLeft = timeArrival.getHours() - timeDeparture.getHours();
    var minutesLeft = timeArrival.getMinutes() - timeDeparture.getMinutes();
    var secondsLeft = timeArrival.getSeconds() - timeDeparture.getSeconds();

    return hoursLeft + " hours " + minutesLeft + " minutes " + secondsLeft + " seconds"; 
}

console.log(calcTime("December 17, 22 8:22:13", "December, 22 11:43:22"));


// 10.
// a. Write a constructor function that creates points in space. Each point in space has
// its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.

function PointInSpace (x, y, z) {

    this.x = x,
    this.y = y,
    this.z = z
}

var coordinate1= new PointInSpace (15, 7, 4);
var coordinate2= new PointInSpace (3, 5, 1);
console.log(coordinate1, coordinate2);

// b. Write a function that calculates the distance between two points in the space.

function calcDistance (coordinate1, coordinate2) {

    var result, x, y, z;

    x = coordinate1.x - coordinate2.x;
    y = coordinate1.y - coordinate2.y;
    z = coordinate1.z - coordinate2.z;

    return result = (Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2))).toFixed(2);
}
console.log(calcDistance(coordinate1, coordinate2));

// 11.
// a. Write a function that generates a random integer value between 5 and 20.

function randomInteger () {
    return Math.floor(Math.random() * (20 - 5 + 1) + 5);
}

console.log(randomInteger());

// b. Write a function that generates a random integer value between 50 and 100.

function randomInt () {
    return Math.floor(Math.random() * (100 - 50 + 1) + 50);
}

console.log(randomInt());

// c. Write a function which expects a number and a callback generator function and
// returns an array of numbers produced by the generator function.

function makeArr (arrayLength, callGenFunc) {
    var arr = [];
    for (var i = 0; i < arrayLength; i++) {
        arr.push(callGenFunc());
    }
    return arr;
} 
console.log(makeArr(3, randomInt));

// 12. Write a function that shuffles the elements of a given array.

// Input: [3, 6, 11, 2, 9, 1]

// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)

function shuffleEl (arr) {
    return arr.sort (function() {
        return Math.random()-1;
    });
}
console.log(shuffleEl([3, 6, 11, 2, 9, 1]));



