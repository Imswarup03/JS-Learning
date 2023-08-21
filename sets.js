// sets (iterable)

// sets also have its own methods

// no index -method access

const numbers = new Set();
// empty set
numbers.add(1); // add a value to the set, returns true if it was
const numebrss= new Set([1,2,3,3,4])
// no duplicates 
console.log(numebrss)

// no orders 
//for of loop over values in set


const variables = new Set("abcddd");
console.log(variables)
items = [2,3,5]
// add
numbers.add (1);
numbers.add(2);
numbers.add(5,6,7);// 1st member is added not other.
console.log('set',numbers )
numbers.add([1,3,5])
numbers.add([1,3,5]) //both arrays will be included bcoz of different address
numbers.add(items)
numbers.add(items)// this one will not add bcoz every items contain same address
numbers.add(5,6,7);// 1st member is added not other.
console.log('set',numbers ) // Set(6) { 1, 2, 5, [ 1, 3, 5 ], [ 1, 3, 5 ], [ 2, 3, 5 ] }


if (numbers.has(1) ){
    console.log ('found')
}else{
    console.log ('not found')
}                                   
// it will check 1 is present or not 

for (let number of numbers){
    console.log(number)
} 

const myArray= [1,2,3,4,5,7,5,9,9];
const uniqueElements= new Set(myArray);
console.log(uniqueElements);
console.log(uniqueElements.length) // undefined
let length =0
for (let num of uniqueElements){
    // console.log(num)
    length++;
}
console.log(length)