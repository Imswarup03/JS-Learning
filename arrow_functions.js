// Arrow Functions


const myFunction=()=>{
    console.log("Arrow Functions")
}

myFunction(); 


const arrowFunction=(num1,num2,num3)=>{
    return num1+num2+num3
}
console.log(arrowFunction(2,4,6))

const isEven=(num)=>{
    if (num%2===0){
        return "Even";
    }
    else{
        return "Odd"
    }
}
console.log(isEven(14));

const isEvenArray=(array)=>{
    let iseven=true
    for (let i=0;i<array.length;i++){
        console.log(i,array[i])
        if (array[i]%2!=0){
            iseven= false
            return iseven
        }
    }
    return iseven
}

console.log(isEvenArray([2,10,20,24,12,23]));



//short version of the above function using an arrow functions
const isOdd=number=>number%2!==0;

console.log(isOdd(23))

var arr=""
const reverseString=(string)=>{
    for (let i=string.length-1;i>=0;i--){
        console.log(i)
        arr+=string[i];
    }
    return arr
}
var p=reverseString("Swarup")
console.log(p)

