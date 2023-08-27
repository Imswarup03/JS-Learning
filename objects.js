//objects

// key -value like map or dict

// objects are referenece types

// object don't have index 

const person={"name":"Harshit","age":22}; // object literal
console.log(person); // { name: 'Harshit', age:22} 
//{key:value} or {property: value}
// how to acces data from objects

console.log(person.name); //Harshit
console.log(person.age); // 22

const user ={
    "name":"Swarup",
    "age":23,
    "user Hobbies":["cricket", "Music"]
}

console.log(user.name) // Swarup

user.name = "Ashutosh" // updating the property value

console.log(user); //{ name: 'Ashutosh', age: 23, Hobbies: [ 'cricket', 'Music' ] }

user['name']='Swarup'
console.log(user); //{ name: 'Swarup', age: 23, Hobbies: [ 'cricket', 'Music' ] }

// diff between dot and bracket notation

// console.log(user."user Hobbies") we can't use like this bcoz key contains space where dot will throw an error

// instead of that we can use [] for accessing properties with string keys in an array-like way
console.log(user["user Hobbies"])

const key ="email"
person[key]='swarup@smartbots.ai'
console.log(person) // we can acces the value of key and update in person object


//for in loop in object
//object.keys

for (let key in person){
    console.log(key,person[key])
}
for (let key in person){
    console.log(`${key}:${person[key]}`)
}

console.log("*".repeat(20))

console.log(Object.keys(person)) // [ 'name', 'age', 'email' ] // returns an array

for (let key of Object.keys(person)){
    console.log(person[key])    
        
}



// computed properties

const key1="object1"
const key2 ="objectkey2"

const value1 ="myvalue1"
const value2 ="myvalue2"

obj ={}
obj[key1]=value1
obj[key2]=value2
console.log("computed property", obj )
// or we can do like

const obj1={
    [key1]:value1,
    [key2]:value2
}
console.log("computed property", obj1 )



// spread operator
const obj2={
    key1:"value3",
    key2:'value4'
}
const newObject ={...obj1,...obj2}

console.log(newObject)  //{object1: 'myvalue1', objectkey2: 'myvalue2',key1: 'value3', key2: 'value4' }

const newObject2={...newObject,key50:"abc"}
console.log(newObject2) 
//{object1: 'myvalue1', objectkey2: 'myvalue2',key1: 'value3', key2: 'value4',key50:'abc' }

const newObject3={...['item1','item2']};
const newObject4={..."abcd"}

console.log(newObject3) // { '0': 'item1', '1': 'item2' }
console.log(newObject4) // { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }

// object destructuring

const band ={
    bandName:"Aurora",
    famoussong:"sick",
    year: 1976,
    anotherFamousSong:"Kashmir"
};

const var1=band.bandName;
const var2 =band.famoussong;

// how to destruct

// let {bandName,famoussong,year} = band;
// console.log(`The name of the Band is ${bandName}, and their most famous song is ${famoussong} and year is${year}`)
// The name of the Band is Aurora, and their most famous song is sick and year isundefined

let {bandName:ab ,famoussong:ac} =band;
console.log(ab) 
// // bandName: ab specifies that the value of the bandName property should be assigned to a new variable named ab.
// famoussong: ac specifies that the value of the famoussong property should be assigned to a new variable named ac.
console.log(ac) 
console.log(band)

let {bandName,famoussong,...restProps}=band
console.log(bandName)
console.log("restprops",restProps)

// objects inside  array
const users =[
    {"user":1,"name":"John","age":30},
    {"user":2,"name":"Joe",'age':26},
    {"user":3,"name":"Swarup",'age':23},
    {"user":4,"name":"Vasu",'age':25},
    {"user":5,"name":"Kishor",'age':24},
    {"user":6,"name":"Ashu",'age':24}
]


console.log(users)

for (let user of users){
    console.log(user.name)
}

const [user1,user2,user3,...user4]=users
console.log(user1) //{ user: 1, name: 'John', age: 30 }
console.log(user2)// { user: 2, name: 'Joe', age: 26 }
console.log(user3) // { user: 3, name: 'Swarup', age: 23 }
console.log('user4',user4) // stored as object inside array
// user 4 [
//     { user: 4, name: 'Vasu', age: 25 },
//     { user: 5, name: 'Kishor', age: 24 },
//     { user: 6, name: 'Ashu', age: 24 }
//   ]


// Nested Destructuring
const users1=[
    {"user":1,"name":"John","age":30},
    {"user":2,"name":"Joe",'age':26},
    {"user":3,"name":"Swarup",'age':23},
    {"user":4,"name":"Vasu",'age':25},
    {"user":5,"name":"Kishor",'age':28},
    {"user":6,"name":"Ashu",'age':24}
]
// const[{name,age}]= users1
// console.log("name",name) //john
// console.log("age",age) // 30

// const [{name},,{age}] =users1
// console.log("name",name) //name John
// console.log("age",age) // age 23


// const [,,{name},,{age}] =users1
// console.log("name",name) // Swarup
// console.log("age",age) // 28

const [{name:username,age}]=users1;
console.log(username)//john
console.log(age) //30

