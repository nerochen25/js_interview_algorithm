// 3. Object Equality
// How would you compare two objects in JS?
// First to check the lengths of both objects
// Second to check the values of the same keys are the same;
// Orders of the keys don't matter
function isEqual(a, b) {
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) {
        return false;
    }

    for (let i = 0; i < aKeys.length; i++) {
        var currentKey = aKeys[i];

        if (a[currentKey] !== b[currentKey]) {
            return false;
        }  
    }

    return true;
}

// var a = {b: 3, a: 1};
// var b = {a: 1, b: 3};
// console.log(isEqual(a,b));

// 6. Extend Core Object
// How could you write a method on instance of a date which will give you next day?
// Arrow function wouldnt work since 'this' will point to global.
Date.prototype.nextDay = function() {
    var currentDate = this.getDate();

    //this.setDate(int) returns a serial long number that represents a date
    return new Date(this.setDate(currentDate + 1));
}

// 7. Bind
var nero = {
    name: 'Nero',
    yell: function(word) {
        return this.name + " yells " + word;
    }
}

var dante = {name: 'Dante'};
var danteYell = nero.yell.bind(dante, "HELLO to Nero!");

// console.log(danteYell());

// 8. arguments and call
// Write a simple function to tell whether 2 is passed as parameter or not?
// 'arguments' is a built-in name, a collection of parameters 
// like array but only has .length but no forEach or other Array prototypes
// .call takes individual parameters, like call(1,2,3)
// .apply takes an array of parameters, like apply([1,2,3])
function isTwoPassed() {
    var args = Array.prototype.slice.call(arguments);

    for (let i = 0; i < args.length; i++) {
        if (args[i] === 2) {
            return true;
        }
    }

    return false;
}

// console.log(isTwoPassed(1,3,4,5,2));

// 9. apply
// How could you use Math.max to find the max value in array?
function getMax(arr){
    return Math.max.apply(null, arr);
    // or return Math.max(...arr) without apply
}


// 12. log prefix
function log() {
    // think of it like arguments.slice()
    var args = Array.prototype.slice.call(arguments);
    args.unshift('(app)');
    // think of it like console.log(args) with the 2nd console
    console.log.apply(console, args);
}

// log('hello')

// 13. Scope and hoisting
// Question: What will you see in the console for the following example?
var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {}  //hoist first in local, so a is created in local, value a = 10
} 
// b(); 
// console.log(a); 

// 14.Closures Inside Loops
// Question: Look at the code below, you have a for loop if you have setTimeout inside it. If log the loop counter inside setTimeout, what will be logged?
// for(var i = 0; i < 10; i++) {
//     setTimeout(function() {
//       console.log(i);  
//     }, 10);
// }
// above will return 10 since the inner function will only be
// executed after the current call stack is over, which is value i already reaches to 10;
//SOLUTION: IIFE (Immediately Invoked Function Expression)
// for(var i = 0; i < 10; i++) {
//     setTimeout((function(i) {
//       console.log(i);
//     })(i), 10)
// }

// 15. Delete can delete but
// Question: Look at the code below, I have a property in a object and I am creating a new object where I am setting it to a new value. If I delete that property what will i get if I try to access that property?
var object = {
    name: 'Nero',
    luckyNum: 25,
    getLuckyNum: function() {
        return this.luckyNum;
    }
}

var newObject = Object.create(object);
newObject.luckyNum = 23;

delete newObject.luckyNum; 
console.log(newObject.getLuckyNum())
