
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


// nested if else

let winningNumber =19;

// let userGuess = +prompt('Guess a number:')
let userGuess= 23 ;
// prompt takes input as string 
// if we add  +from the beginning of prompt it will change to number
if (userGuess === winningNumber){
    console.log("you win")
}else{
    if( userGuess < winningNumber){
        console.log("too low")
    }else{
        console.log("Too high.")
    }
}

//else if

let temp = 40;
let temperature =temp > 60 ? "too hot" : "too cold"
console.log(temperature) //ternary

// else if

let t = 2;

if (t>45){
    console.log('Extremely hot ');
}
else if (t>35){
    console.log('Moderate Hot');
}
else if (t>25){
    console.log("Moderate cold");
}
else{
    console.log('cold');
}


let i =0;
while (i<=3)
{
    console.log(i);
    i++
}