// Maps
// map is an iterable 

// store data in ordered fashion
// like dictionary in python

// object literal
// key ->symbol
// key ->string


const person={
    name:"Swarup",
    age:23,
    1:"one"
}

for (let key in person){
    console.log(typeof key)
}

// map = key : value pair

const Student= new Map();
Student.set('firstName',"Swarup")
Student.set('age ',7);
Student.set(1,'one');
console.log("map ",Student )
console.log(Student.get(1));
// key can be any data type 

for (let key of Student.keys()){
    console.log(key,typeof key);
}

for(let key of Student){
    console.log(Array.isArray(key))
}
// all are array

for(let[key,value] of Student){
    console.log(key, value)
}


const person1 ={
    id:1,
    firstName:'swarup',
}
const userInfo= new Map();
userInfo.set(person1,{age:8,gender:"male"});
//  {id:1 , firstName:'swarup'}
console.log(userInfo)

console.log(person1.id); // 1 
console.log(userInfo.get(person1)) //{ age: 8, gender: 'male' }
console.log(userInfo.get(person1).age)// 8

// clone using object assign
console.log("================================================================================")
const obj = {
    key1:"Value1",
    key2:"value2"
}

const obj2= {...obj}; // spread operator
obj.key3="Value3"// this will update value only on obj
console.log(obj);
console.log(obj2);


// optional chaining
console.log("Conditional Chaining=============================================")
const user ={
    firstName:"Swarup",
    lastName:"Biswal",
    // address:{houseNumber: 88}
}

console.log(user.firstName);
// console.log(user.address.houseNumber)
console.log(user?.firstName); // it will not give error if value is not there instead of giving error it will give undefined
console.log(user?.address?.houseNumber)  // undefined

