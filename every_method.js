// every method 

const numbers =[2,4,21,3,42,1];

// to check all the numbers are even or not
const ans =numbers.every((number)=>number%2===0);

// callback function ---> true/ false 

// every method ===> true / false (boolean)

console.log(ans);


const  userCart=[
    {productId:1 , productPrice: 2000},
    {productId:2 , productPrice: 3000},
    {productId:3 , productPrice: 1000},
    {productId:4 , productPrice: 500},
    {productId:5 , productPrice: 9000},
    
]

const every = userCart.every((cartItem)=>cartItem.productPrice>200);
console.log(every)