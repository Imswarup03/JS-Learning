//methods
// function inside object

const person={
    firstName:"Swarup",
    lastName:"Biswal",
    age:23,
    about:function(){ // function inside object is called method
        console.log("person name is",`${this.firstName}`,"and","Age is ", `${this.lastName}`);
    },
    total:function(){
        console.log(this)
    }
}

person.about();
//person name is Swarup and Age is  Biswal
person.total();
//  {
//   firstName: 'Swarup',
//   lastName: 'Biswal',
//   age: 23,
//   about: [Function: about],
//   total: [Function: total]
// } 


function personInfo(){
    console.log(`person name is ${this.firstName} and last name is ${this.lastName} `)
}

const person1={
    firstName: 'Swarup',
    lastName: 'Biswal',
    age: 23,
    about: personInfo
  }
const person2={
    firstName: 'Ashutosh',
    lastName: 'Pattanayak',
    age: 23,
    about: personInfo
  }
const person3={
    firstName: 'Vasu',
    lastName: 'G',
    age: 23,
    about: personInfo
  }
const person4={
    firstName: 'Kishor',
    lastName: 'Peddamji',
    age: 23,
    about: personInfo
  }

person1.about()