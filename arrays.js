// arrays - ordered collection of items 
// we can store any data types

let fruits =["apple",'mango','grapes'];
console.log(fruits)

// null undefined are also keywordsin JS
let length = fruits.length -1 // to know the last index

console.log(length)
// fruits[-1]='Banana' // element update
console.log(fruits)
const PI=3.14;   // constant variable declaration and initialization (cannot be chnaged)

//arrays are objects 
console.log(typeof fruits)

// How to check variable is array or not
console.log(Array.isArray(fruits)) // true
let obj = {}
console.log(typeof obj)

// push ===> Works like append add element in last

fruits.push('banana');
console.log(fruits)


// pop == delete the last element and return that

// fruits.pop(); 
// console.log(fruits.pop()) // pop returns the last element so we can store that element
let poppedFruit= fruits.pop()
console.log(`Popped Fruit== ${poppedFruit}`)
console.log("After Popping",fruits)



// unshift ===> it will add the element from the start

fruits.unshift('Banana',"bnana")
fruits.unshift('Dragon')
console.log(fruits);


// shift ==> Remove first element

let removedFruit = fruits.shift();
console.log(fruits)


// splice  ==>Adds, removes, or replaces elements in an array at a specified index.
let fruit= ["apple", "banana", "orange", "grape"];
fruits.splice(2, 1, "kiwi");
fruits.splice(2,1)//["apple", "banana", "grape"]
console.log(fruit); // Output: ["apple", "banana", "kiwi", "grape"]
// array.splice(startIndex, deleteCount, item1, item2, ...)
//startIndex: The index at which the modification should begin.
//deleteCount: The number of elements to be removed from the array starting at the startIndex. If set to 0, no elements are removed.
//item1, item2, ...: Optional. Elements to be added to the array starting from the startIndex.




