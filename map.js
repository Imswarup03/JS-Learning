// map method 

const numbers = [3,4,6,1,8]

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