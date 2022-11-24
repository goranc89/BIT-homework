// 1. Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids";
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(N, Z, Y, X ) {
    var future = "You will be a " + X + " in " + Y + " and married to " + Z + " with " + N + " kids ";

    return future

}
console.log(tellFortune(2, "Mirsad", "Novi Pazar", "professor"));
console.log(tellFortune(3, "Miki", "Austria", "programer"));
console.log(tellFortune(4, "Mikee", "Germany", "nurse"));



// 2. Write a function named calculateDogAge that:
//  takes 1 argument: your puppy's age.
//  calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
//  outputs the result to the screen like so: "Your doggie is NN years old in dog years";
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

function calculateDogAge(age) { 
    let dogAge= "Your doggie is " + 7 * age + " years old in dog years" ;

    return dogAge
}
console.log(calculateDogAge(4));
console.log(calculateDogAge(5));
console.log(calculateDogAge(6));

// 3. Write a function named calculateSupply that:
//  takes 2 arguments: age, amount per day.
//  calculates the amount consumed for rest of the life (based on a constant max age).
//  outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X";
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amountPerDay) {
    let maxAge = 100;
    let neededSupply = (amountPerDay * 365) * (maxAge - age);
    let result = "You will need " + neededSupply + " to last you until the ripe old age of " + maxAge;

    return result;
}
console.log(calculateSupply(29, 2.5));
console.log(calculateSupply(35, 14,5));
console.log(calculateSupply(51, 0.5));


// 4. Create a function called celsiusToFahrenheit:
//  Store a celsius temperature into a variable.
//  Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
//  Now store a fahrenheit temperature into a variable.
//  Convert it to celsius and output &quot;NN°F is NN°C.&quot;
// *NN is actual temperature you need to convert

function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    let result = celsius + "°C" + " is " + fahrenheit + "°F"
    
    return result;
}
console.log(celsiusToFahrenheit(36));

function fahrenheitToCelsius(fahrenheit) {
    let celsius = ((fahrenheit - 32)*5)/9;
    let result = fahrenheit +  "°F" + " is " + celsius + "°C"
    
    return result;
}
console.log(fahrenheitToCelsius(85));


// 5. Create a function that validates a password to conform to the following rules:
//  Length between 6 and 24 characters,
//  At least one uppercase letter (A-Z).
//  At least one lowercase letter (a-z).
//  At least one digit (0-9).
//  Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
//  Supported special characters: ! @ # $ % ^ &amp; * ( ) + = _ - { } [ ] : ; &quot; &#39; ? &lt; &gt; , .
//  Examples: validatePassword(&quot;P1zz@&quot;) ➞ false // Too short.
//  validatePassword(&quot;iLoveYou&quot;) ➞ false // Missing a number.
//  validatePassword(&quot;Fhg93@&quot;) ➞ true // OK!

function checkLength(password) {
    let checkLengthResult = "Password length must be between 6 and 24 characters!"
    if (password.length > 6 && password.length < 24) {
            return true;
    } else {
        console.log (checkLengthResult);
            return false;
        }
} checkLength("Hamza2610.");

function uppercaseLetter(password){
    let upperCaseResult = 'There is no uppercase letter in your password!';
    for (i=0; i<password.length; i++){
        if (password[i] === password[i].toUpperCase()){
            return true;              
    } else {
        console.log(upperCaseResult);
        return false;
    }
    }
} uppercaseLetter("Hamza2610.");


 function lowercaseLetter(password){
     let lowerCaseResult = 'There is no lowercase letter in your password!';
        for (i=0; i<password.length;i++){
             if (password[i] !== password[i].toLowerCase()){
               return true;
            } else {
        console.log(lowerCaseResult);
        return false;
        }
    }
  } lowercaseLetter("Hamza2610.");  
        

  function atLeastOneDigit(password){
    let digitResult = 'There is no digits in your password!';
       let atLeastOneDigit = /\d/;
        
 if(atLeastOneDigit.test(password)){
     return true;              
         } else {
             console.log(digitResult);
             return false;
         }
         } atLeastOneDigit('Hamza2610.');



function maxRepetition(password){
    let maxRepetitionResult = "Password mustn't contain 3 repeated characters!";
    
    for(i=0;i < password.length; i++){
    if(password[i] === password[i+1] && password[i] === password[i+2]){
        console.log(maxRepetitionMess);
        return false;
    }else{
        return true; 
    }
}
} maxRepetition("Hamza2610.");




function specialCharacters(password){
let specialCharactersMess = 'There is no special characters in your password!';
const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
if(specialChars.test(password)){
 return true;              
     } else {
         console.log(specialCharactersMess);
         return false;
     }
     } specialCharacters("Hamza2610.");

function validatePassword(password) {
let checkLengthOfPassword = checkLength(password);
let checkUppercaseLetterPassword = uppercaseLetter(password);
let checkLowercaseLetterPassword = lowercaseLetter(password);
let checkAtLeastOneDigitPassword = atLeastOneDigit(password);
let checkMaxRepetitionPassword = maxRepetition(password);
let checkSpecialCharactersPassword = specialCharacters(password);
let successfulPassword = "Your password is valid!";
let unsuccessfulPassword = "Your password is not valid!";

if(checkLengthOfPassword && checkUppercaseLetterPassword  && checkLowercaseLetterPassword 
 && checkAtLeastOneDigitPassword && checkMaxRepetitionPassword && checkSpecialCharactersPassword) {
   
   return successfulPassword;
} else {
return unsuccessfulPassword;
}
}

console.log(validatePassword("Password1TTt$"));



// 6. Create a function that finds how many prime numbers there are, up to the given integer.
// Examples: primeNumbers(10) ➞ 4 // 2, 3, 5 and 7
// primeNumbers(20) ➞ 8 // 2, 3, 5, 7, 11, 13, 17 and 19
// primeNumbers(30) ➞ 10 // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29

 function isPrime(primeNumber) {
  let result = true;

 for (i=2; i <= primeNumber; i++) {
    if ( primeNumber % i == 0 && primeNumber != i) {
        result = false;
        break;
    }
    }
        return result;

 }
console.log(isPrime(11));

function primeNumbers(inputNumber) {
    let counter = 0;
    let resultArray = [];

    for (let i=2; i < inputNumber; i++) {
    let isPrime1 = isPrime(i);
    
    if (isPrime1 == true) {
        counter = counter + 1;
        resultArray.push(i);
    }
}
    return counter;
}
console.log(primeNumbers(20));


// 7. Create a function that returns an array that expands by 1 from 1 to the value of the input, and then
// reduces back to 1. Items in the arrays will be the same as the length of the arrays.

// Examples:
// diamondArrays(1) ➞ [1],
// diamondArrays(2) ➞ [1, 2, 2, 1]
// diamondArrays(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]

function diamondArrays(input) {
     let index = 0;
    let diamondArray = [];
        for (i = 1; i <= input; i++) {
          for (j = 0; j < i; j++) {
            diamondArray[index] = i;
            diamondArray[input ** 2 - 1 - index] = i;
            index++;
          }
        }
        return diamondArray;
      }
      console.log(diamondArrays(5));