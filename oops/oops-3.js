// store methods in different objects
const userMethods={
    about: function(){
        return `${this.firstName} is ${this.age} years and email is ${this.email}`
    },
    is18: function(){
        return this.age>=18
    },
    play:function(){
        return this.play===true;
    }

}
function CreateUser(firstName, lastName,email, age,address,play){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email =email;
    user.age=age;
    user.address =address
    user.play=play
    user.about=userMethods.about; // reference type
    user.is18=userMethods.is18; // code reusability
    user.sing=userMethods.play;
    return user
    }

const user=CreateUser('Swarup',"Biswal","swarup@smartbots.ai",23,"Cuttack",false);
const user1=CreateUser('Vasu',"G","swarup@smartbots.ai",23,"Vizag");
const user2=CreateUser('Ashu',"Pattanayak","swarup@smartbots.ai",23,"KDP");

console.log("User=>",user.about())
console.log(user.is18());
console.log(user.sing())