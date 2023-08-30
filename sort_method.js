//sort method

const users =['Swarup', 'Vasu', 'Ashutosh','Zubair']
users.sort()
console.log(users)
const numbers =[12,15,21,3,2,8]
numbers.sort()
console.log(numbers)
// javascript sort the numbers by string . first it takes the number by string and by ascii value it sort the numebr


// How TO get our expected output
numbers.sort((a,b)=>{
    return a- b; //ascending order
})
console.log(numbers)
numbers.sort((a,b)=>{
    return b-a; // descending order
})
console.log(numbers)


//real time scenerio
const products=[
    {name:'laptop',price: 119},
    {name:"mobile", price :89},
    { name :"tv" , price :69}
]
//price low to high
// clone into a new array
const lowToHigh =products.slice(0).sort((a,b)=>{
    return a.price-b.price
});
console.log(lowToHigh)

// price high to low 
const highToLow =products.slice(0).sort((a,b)=>{
    return b.price-a.price
});
console.log(highToLow)

