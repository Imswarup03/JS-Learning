// trim()
// toUpperCase()
// toLowerCase()
// slice

let firstName = "Swarup";

console.log(firstName.length); // 6
let lastName = "   Biswal  "
console.log(lastName.length); //11
//(including spaces and trailing space is counted as a character in JavaScript).
lastName=lastName.trim();
// #remove the leading/trailing white-spaces from string using .trim(). This will not modify original string we have to assign a variable
console.log(lastName.length) // 6

//toUpperCase
console.log(firstName.toUpperCase()); // SWARUP
// toLoweCase
console.log(firstName.toLowerCase()); //swarup

//slice
// Start Index
// End index (not included, optional parameter) - if not provided then it will take the end

let newString= lastName.slice(0,4); 
console.log(lastName.slice(0)) // no change
console.log(lastName.slice(1)) // no slicing from 1 to last
console.log(lastName.slice(-2,-5)); // no output not in range
console.log("abc",lastName.slice(-3)); // sliced the last three elements Biswal
console.log("abc",lastName.slice(-5,-3)); // sliced the Biswal -5,-4 means == is



// string concatenation

let string1= 'Swarup';
let string2 ='Biswal';
let fullName = string1 + string2
console.log(fullName);

let num1 = "17"
let num2 = "23" // both are strings

let sum = +num1 + +num2
console.log(sum) // it will add as number
console.log(typeof sum) // number 

//template string

let age = 23
let fName= "Swarup"
const message=`Hello ${fName}, your Age is: ${age}`
console.log(message)

let aboutMe = `my name is ${fName} and my age is ${age}`
console.log(aboutMe)
