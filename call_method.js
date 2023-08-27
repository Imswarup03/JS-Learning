// call method used for function call

function hello(){
    console.log("Hello World")
}
hello.call();
// CALL , APPLY , BIND
const user1 ={
    firstName:"Ashutosh",
    age:23,
    about:function(){
        console.log("person name is",`${this.firstName}`,"and","Age is ", `${this.age}`);
    }
}
user1.about();
const user2 ={
    firstName:"Swarup",
    age:23,
    // how to use about function from user1 and use it here . 
}

user1.about.call(user2); // here in call method we have to use user2 as this keyword
console.log("*****************************************************************************");



// Here I can do in a another way i will create a separate function for about.

function about(hobby,place){
    console.log(this.firstName,this.age , hobby,place)
}

const user3 ={
    firstName:"Vasu",
    age:25,
}
user4 ={
    firstName:"Kishor",
    age:24,
}
about.call(user3,"Cricket","Cuttack")
about.call(user4,"Cricket","Vizag")


// apply
// for apply we have to write the arguments in array
about.apply(user1,["Guitar","KDP"]);

// Bind
// Bind will return a function 
const func = about.bind(user2,"Music","Hyderabad");
func()