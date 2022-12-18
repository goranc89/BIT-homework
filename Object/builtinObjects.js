var  imePrezime = "Hamza Muharemović";
        console.log(imePrezime);

        var name= "Hamza"
        var surname= "Muharemovic"
    
        function print () {
    
            name + surname
        
        return "My name is " + name + " " +  surname 
        }
        console.log(print());

// Global JavaScript Objects (homework)

// Math
//● Random

function getRandomInt() {
    var arr=[];
    for (var i=0; i<10; i++) {
    arr.push(Math.round(Math.random() * (50-1)+1))
}
        return arr;
    }
    console.log(getRandomInt());

// ● Round

function roundEl () {
    var arr= [0.9254, 5.3458, 4.7558, 9.3875, 3.5585];
    var arr1= [];
    for (var i=0; i< arr.length; i++) {
        arr1.push(Math.round(arr[i]*100)/100);
    }
    return arr1;
}
console.log(roundEl());

// ● Floor

    function roundNum () {
        var arr= [0.92, 5.34, 4.75, 9.38, 3.55];
        var arr1= [];
        for (var i=0; i< arr.length; i++) {
            arr1.push(Math.floor(arr[i]));
        }
        return arr1;
    }
    console.log(roundNum());

// ● Max

    function getMaxOfArray(arr) {
        return Math.max.apply(null, arr);
      }
    console.log(getMaxOfArray([53, 41, 75, 38, 35]))

//Date
 
function getDate () {
    var myDate = {
        date: new Date()
       }
       return myDate;
    }
       console.log(getDate());


function getTime () {
    var time= new Date;
    var result= time.toLocaleTimeString();
    return result
}
     console. log(getTime());

function getCurrentDate () {
    var time= new Date;
    var result= time.toDateString();
    return result
    }
    console. log(getCurrentDate()); 