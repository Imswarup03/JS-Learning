
// arrow functions in object
const user1 ={
    firstName:"Swarup",
    age:"25",
    about:()=>{
        console.log("person name is",`${this.firstName}`,"and","Age is ", `${this.age}`);
    }
}

user1.about()
// arrow function takes this keyword from surroundings means it will not work inside object
// undefined because arrow functions will not work inside the object