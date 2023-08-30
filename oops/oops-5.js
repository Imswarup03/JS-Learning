// In JS classes are objects
// fake


// class CreateUser{
//     constructor(firstName,lastName,email,age,address){
//         console.log("constructor called")
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.email=email;
//         this.age=age;
//         this.address=address
//     }
//     about(){
//         return `${this.firstName} is ${this.age} years and email is ${this.email}`
//     }
//     isi8(){
//         return this.age>=18;
//     }
//     func(a){
//         console.log(a)
//     }
// }

// let user1= new CreateUser("Swarup","Biswal","swarup@smartbots.ai",23,"Cuttack");
// console.log(user1.about());
// user1.func("Harshit")

function CreateUser(firstName,lastName,email,age,address){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.age=age;
    this.address=address;
    
}
CreateUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years and email is ${this.email}`
};

CreateUser.prototype.is18=function(){
    return this.age>=18
}
CreateUser.prototype.play=function(){
    return "Playing"
}

let user1=new CreateUser("Swarup","Biswal","swarup@smartbots.ai",23,"Cuttack");
console.log(user1.about());