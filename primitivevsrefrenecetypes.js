// primitive vs reference types
// primitve
let num1 =6;
let num2 =num1
console.log('Value of num1',num1)
console.log('Value of num2',num2)
num1++
console.log('Value of num1 after increment',num1)
console.log('Value of num2',num2) // num 2 value not afffected 

// reference types

// array

let array1=['mango','banana']
let array2= array1

console.log(`array 1 is ${array1}`);

console.log(`array 2 is ${array2}`);
console.log(`array 1 is,`, array1);
console.log('array2 is ', array2)

array1.push('grapes')
console.log( `Array1 changed to: ${array1}` );
console.log( `Array2 changed to: ${array2}` );
console.log(`array 1 changed to,`, array1);
console.log('array2 is changed to  ', array2) // reference types array1 we changed but array 2 changed 



// primitive types === primitive stored in stack
// referenece types = reference types stored in Heap having same memory address and can be accessed using pointer

// to use different address 
let array3 = ['abc','cde','def']
let array4 = array3.slice(0)

console.log(array4) // [ 'abc', 'cde', 'def' ]

let array5 = [].concat(array3)
console.log(array5) // [ 'abc', 'cde', 'def' ] // different address

// spread operator
//=====================================================================

let array6 =[...array3];
console.log(array6)// / [ 'abc', 'cde', 'def' ]

// add more items

let array7 = array5.slice(0).concat('axz'); // [ 'abc', 'cde', 'def', 'axz' ]
let array8= array7.slice(0).concat(['shdvshd','sdbjsdb']); // [ 'abc', 'cde', 'def', 'axz', 'shdvshd', 'sdbjsdb' ]
let array9 = [].concat(array8,['12','235']) // ['abc','cde','def','axz','shdvshd','sdbjsdb','12','235']
console.log(array9)
let array10= [...array9,'346']
console.log(array10)  //['abc','cde','def','axz','shdvshd','sdbjsdb','12','235','346']

//======================================================================

// for loop in array

let array11= ['abc','cde','def','axz','shdvshd','sdbjsdb','12','235','346']

for (let i=0;i<array11.length;i++){
    console.log("index:",i, array11[i])
}
 
// use const for creating array

const array12 =['23','24',"26"]
array12.push('27')
console.log(array12); // [ '23', '24', '26', '27' ]
// it will change bcoz it is saved in same memory address
let i =0
while (i<array12.length){
    console.log(array12[i])
    i++
}
console.log("*".repeat(20));
for (let num of array12){                 //for of loop
    console.log(num)
}
const array13=[]
console.log("*".repeat(20));
for (let num of array12){
    array13.push(num.toUpperCase());
}
console.log(array13)


// for in loop
for (let index in array13){
    console.log(array13[index]); // for in loop give index
}
for (let num in array13){
    console.log(num); // for in loop give --index number 
}

// array destructuring
const myArray= ['vasu','ashu','swarup','priya','zubear','sadgun','kishor']

let [myVar1,myVar2] = myArray       // unpacking the array
let [myvar3,,myvar4] =myArray
console.log('first variable:',myVar1, 'second varibale:',myVar2)
console.log('first variable:',myvar3, 'second varibale:',myvar4)
let [var1,var2, ...mynewvar]=myArray
console.log(mynewvar) // [ 'swarup', 'priya', 'zubear', 'sadgun', 'kishor' ]
