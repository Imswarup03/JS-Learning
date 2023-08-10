// some method

const numbers = [3,5,8,9];

// check even 
// if one even number is there it will return true

const ans = numbers.some((number)=>number%2===0);
console.log(ans)


const  userCart=[
    {productId:1 , productPrice: 2000},
    {productId:2 , productPrice: 3000},
    {productId:3 , productPrice: 1000},
    {productId:4 , productPrice: 500},
    {productId:5 , productPrice: 9000},
    
]

const some = userCart.some((cartItem)=>cartItem.productPrice>2000);
// this function returns boolean value
console.log(some)