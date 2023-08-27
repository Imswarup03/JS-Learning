//undefined

//null

let Firstname;
console.log(typeof Firstname) // undefined
console.log(Firstname);
Firstname= 'Swarup'
console.log(Firstname)

let myVariable = null;
console.log(myVariable);// Output: null
// (type of variable is object, but it has no value assigned to it.)
console.log(typeof myVariable); // object
// bug , error  typeof null is oject

// BigInt

let myNumber=123;
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
let bigNumber= BigInt(12) // bigint also
let sameBigInt= 123n
console.log(typeof bigNumber) //bigint
console.log(typeof sameBigInt) //bigint
// console.log(myNumber + bigNumber); // error number and Big int can't be mixed
console.log(sameBigInt + bigNumber); //135n



// booleans and comparison 

let number1=5;
let number2=6;
let number3='5';
console.log(number1>number2); //false
console.log(number1<number2); //true

// comparison

console.log(number1 == number2); // false
console.log(number1 == number3); // true
console.log(number1 === number3); // when we wants to check the datatype and also value we use '==='

// != vs !==

console.log(number1!=number2) //true
console.log(number1!=number3) // false // it will check the data type
console.log(number1 !== number3); //true // it will check the value 



// Truthy and Falsy Values

// falsy values
// false
// ''


// If else condition

let age = 14;
if (age >=18){
    console.log("You are eligible for voting");

}else{
    console.log("You are not eligible for voting");
}

let num1=14;

console.log(num1%3) // remainder 

// truthy value means

let m= 23 // truthy

// falsy values

let myname= ""; // falsy value
if (myname){
    console.log('hello '+myname+'!');
}else{
    console.log('Name is empty')
}

// ternary operator

let age1 =15;
let drink;
if (age>=5){
    drink ="coffee"
    console.log(drink)
}else{
    console.log('milk')
}    // traditional if else
// Ternary opertaor means

let age2 = 15;
let drink1 = age >=5 ? 'Tea' : "Horlicks";
console.log(drink1) // Tea


// and or operator

let s = "Swarup"

let a = 23;
if(s[0] === "H" && a ==23 ){
    console.log('Name starts with S and Age 23')
}else{
    console.log('Not satisfied the condition.') //  and condition = &&
}
if(s[0] === "S" && a ==23 ){
    console.log('Name starts with S and Age 23')
}else{
    console.log('Not satisfied the condition.') // or condition = ||
}
if(s[0] === "S" || a ==23 ){
    console.log('Name starts with S and Age 23') 
}
else{
    console.log('Not satisfied the condition.') 
}