// methods 
// function inside object 
// this keyword

// const person = {
//     firstName:"Swarup",
//     age:23,
//     about:function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`);
//     }
// }
// person.about()

//function

function personInfo(){
    console.log( `name:${this.firstName}, age:${this.age}`)
}

const person1 = {
    firstName:"Vasu",
    age:25,
    about:personInfo
    }

const person2 = {
    firstName:"Ashutosh",
    age:24,
    about:personInfo
}
const person3 = {
    firstName:"Kishore",
    age:23,
    about:personInfo
}
const person4 = {
    firstName:"Priya",
    age:21,
    about:personInfo
}

person2.about()
person3.about()


