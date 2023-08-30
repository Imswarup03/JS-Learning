// filter method 

const numbers = [ 1,3,2 ,6,5,8]

const isEven=function(number){
    return number % 2 ===0;
}

const even= numbers.filter(isEven);
console.log(even)

const isOdd =numbers.filter((number)=>{
    return number%2 !==0;
})

console.log("odd",isOdd )


let filtered= numbers.filter(function(value){
    return value>=3;
});
console.log(filtered)

// if we use arrow function and we have only one parameter then we can write it in one line

let filtered1= numbers.filter((value)=>value>=4);
console.log(filtered1);