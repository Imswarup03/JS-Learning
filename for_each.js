// for each 
// important array method 

const numbers = [6,8,10,24]

function even(numbers){
    for (let i =0; i<numbers.length;i++){
        if(numbers[i]%2===0) {
            console.log(numbers[i],i)
        }
    }
}
even(numbers)
// for each loop 
//important
function multiplytwo(number,index){
    console.log(`index is ${index} number is ${number}`)
}

numbers.forEach(multiplytwo)
console.log("****************")
// anonymous function

numbers.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`)
})

const users =[
    {name:"Swarup",age:23},
    {name:'Raj', age :57 },
    { name :"Nikhil" , age:90}

]
// users.forEach(function(user){
//     console.log(user.name)
// })

//using arrow function
users.forEach((user,index)=>{
    console.log(user.name)
})

 

