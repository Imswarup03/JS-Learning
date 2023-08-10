const myArray=["Hi","Hello","Swarup","Biswal","abc"]

function islength(string){
    return string.length===5;
}

console.log(islength(myArray))

const ans=myArray.find((string)=>string.length===3);
console.log(ans);

// Real Examples

const  users=[
    {userId:1 , userName:"Harshit"},
    {userId:2,userName:"Swarup"},
    {userId:3,userName:"Rajesh"},
    {userId:4,userName:"Abhijeet"}
]

const myUser= users.find((user)=>{
    return user.userId===3
})

console.log(myUser);

// another way of using arrow function
const myUsers= users.find((user)=>user.userId===3);
console.log("another way",myUsers)
