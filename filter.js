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


