// closures
// decorators

function outerFunction(){
    function innerFunction(){
        console.log("inner function")
    }
    return innerFunction
}
let ans = outerFunction();
ans();

function fullName(firstName,LastName){
    function printName(){
        console.log(firstName,LastName)
    }
    return printName
}
let name= fullName("Swarup","Biswal");
name();

// code execution phase 

