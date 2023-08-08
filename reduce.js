// reduce

const numbers= [1,2,3,4,5]

// sum of all the numbers in array

const sum =numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
},100);

// here 100 is the default or initial value for the sum and it will be added to each element of the array
console.log(sum) // output :  169