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

console.log(danteYell());