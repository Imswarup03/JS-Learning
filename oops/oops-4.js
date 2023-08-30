//  PROTO


const obj1={
    key1:"value1",
    key2:"Value2"
}

// const obj2={
//     key3:"value3"
// }
// console.log(obj2.key1) // undefined
// I don't want js to give undefined value so,


// there is one more way to create empty object
const obj2=Object.create(obj1);
obj2.key3="value3";
// console.log(obj2.key2);// Output = value2

// let's see how it's working.
// whenever JS can't find the value in the object it will search in previous object

console.log(obj2);
// PROTO
// official ecmascript documentation
// [[prototype]]
// __proto__, [[prototype]]  === are same

// {key3: 'value3'}
// key3: "value3"
// [[Prototype]]: Object
// key1:"value1"
// key2 : "Value2"
// [[Prototype]]:Object

console.log(obj2.__proto__)// { key1: 'value1', key2: 'Value2' }
// so JS will search the value in proto if it's not in parent object.


