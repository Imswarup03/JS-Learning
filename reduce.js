// reduce

const numbers= [1,2,3,4,5]

// sum of all the numbers in array

const sum =numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue
},100);

// here 100 is the default or initial value for the sum and it will be added to each element of the array
console.log(sum) // output :  115


const userCart=[
    {product:1 , productType:"mobile",price:12000},
    {product:2, productType:"laptop",price:23000}]

const user = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price

},0)

console.log(user)



