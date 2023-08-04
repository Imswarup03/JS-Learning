// FUNCTIONS

console.log('Happy Birthday to you....');

function sayHappyBirthday(){
    console.log("Happy birthday, dear Vasu G!");
}

// function call
// 1st way - using the name of a function followed by parentheses and any arguments inside them:
sayHappyBirthday();

function sum(a,b){
    return a+b;
}
const s =sum(3,5)
console.log(s)

function sum3(a,b,c){
    return a+b+c
}
console.log(sum3(2,35,45)) //82

function oddoreven(a){
    if (a%2==0){
        return true
    }
    else {
        return false
    }
    
}
console.log(oddoreven(25))


function iseven(number){
    return number%2===0;
}

console.log(iseven(25))


function firstChar(anyString){          // function declaration
    return anyString[0]
}
console.log(firstChar('Swarup'))

//function
// array

function target(array,num){
    for(let i =0;i<array.length;i++){
        if(array[i]==num){
            return i;
        }
        }
        return -1;   
        }
    
const t=[1,3,5,2]
console.log(target(t,3)) 

// New funtion 
// we can also write this type function
const myFunction=function(){
    console.log('My function')
}
myFunction() // function call // it is called function expression


var sum