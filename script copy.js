///////////////////////////////////////
// Lecture: Hoisting

// calculateAge(1990);

// function calculateAge(year) {
//     console.log(2018 - year);
// }



// // This isnt function declaration but expression and HOISTING with functions
// // Only work for function declaration
// // So we must comment it out this
// // retirement(1990);

// var retirement = function(year) {
//     console.log(65 - (2018 - year));
// }


// // variables
// // console.log(age);

// console.log(age);
// var age = 23;

// function foo() {
//     console.log(age);    
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age);













///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third();
//     }
// }

// function third() {
//     var d = 'John';
//     // console.log(c);
//     console.log(a+d); // We have access to a and d because they're in the scope chain for the 3rd function
    
// }




// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

/*
calculateAge(1985);

// regular function not a method. this keyword always points to the window object
// Because the object of the function that this object attached to
// Is the global object
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);

        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// Method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();





