// oops-6.js


class CreateUser{
    constructor(firstName,lastName,email,age,address){
        console.log("constructor called")
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.age=age;
        this.address=address
    }
    about(){
        return `${this.firstName} is ${this.age} years and email is ${this.email}`
    }
    isi8(){
        return this.age>=18;
    }
    func(a){
        console.log(a)
    }
}

let user1= new CreateUser("Swarup","Biswal","swarup@smartbots.ai",23,"Cuttack");
console.log(user1.about());
user1.func("Harshit")


// Inheritance

class Dog{
    constructor(name){
        this.name=name;
    }
    bark(){
        return`${this.name} is barking`
    }
}
const dog1= new Dog("Priya");
console.log(dog1.bark())

// Inheritance

class Dog extends Animal{

}

const tomy=new Dog("Tomy");
console.log(tomy.bark());