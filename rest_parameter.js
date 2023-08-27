function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`)
    console.log('c is ',c )
    console.log(`c is ${c}`)
}
myFunc(2,4,6,4,34,35,52,22,245,5)

function addAll(...numbers){
    let total =0;
    for (let i= 0 ;i< numbers.length;i++){
        total = total+numbers[i]
    }
    return total
}
console.log(addAll(2,4,6,4,34))
const person={
    firstName:"Swarup",
    lastName: "Biswal"
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.lastName)
// }
// printDetails(person)
// parameter destructuring

// we can destructure the data from the parameter  using object destructuring
function printDetails({firstName,lastName}){
    console.log(firstName);
    console.log(lastName)
}
printDetails(person)

