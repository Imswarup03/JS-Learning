// const user ={
//     firstName:"Swarup",
//     lastName:"Biswal",
//     email:"swarup@smartbots.ai",
//     age:23,
//     address:"House NUmber, Colony , Pincode, State",
//     about:function(){
//         return `${this.firstName} is ${this.age} years and email is ${this.email}`
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }

// const aboutUser =user.about();
// console.log(aboutUser);

// function(that function create object)
//2. add key value pair
// 3. return object 

function CreateUser(firstName, lastName,email, age,address){
    const user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.email =email;
    user.age=age;
    user.address =address
    user.about=function(){
        return `${this.firstName} is ${this.age} years and email is ${this.email}`
    }
    user.is18=function(){
        return this.age>=18;
    }
    return user
}

const user=CreateUser('Swarup',"Biswal","swarup@smartbots.ai",23,"Cuttack");
console.log(user);
const is18 =user.is18()
console.log(is18);
const about=user.about()
console.log(about)