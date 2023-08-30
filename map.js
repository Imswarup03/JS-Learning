// map method 

const numbers = [3,4,6,1,8]
// Calls a defined callback function on each element of an array, and returns an array that contains the results.

// @param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

// @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

const squareN = function (number){
    return number ** 2;
}

const squareNumber = numbers.map(squareN)
// pass the function as an argument to .map()
console.log(squareNumber)


const square= numbers.map((number)=>{
    return number**2
})
console.log(square)

/// map will return a new array of values after applying a given function on each element in an array

let numbers1 = [7,8,9,10];
let items=numbers1.map((number)=>{
    return "studentno"+number;
})

console.log(items)