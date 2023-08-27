const user={
    firstName:"Swarup",
    age:23,
    about(){
        console.log("person name is",`${this.firstName}`,"and","Age is ", `${this.age}`);
    }
}

user.about();