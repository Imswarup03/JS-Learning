// clone using object.assign

//memory

const obj={
    key1:"value1",
    key2:"value2"
}

const obj2=obj;

obj.key3="value3"
obj.key4="value4"
console.log(obj)
console.log(obj2) //memory object is 1 and both object is poinitinf to 1 object
//so we have to clone for that we have to use spread operator
//const obj3={...obj};
const obj3=Object.assign({},obj);
obj.key5="value5"
console.log(obj)
// { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4',key5: 'value5' }
console.log(obj3);
// { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }


// optional chaining

const user={
    firstName:"swarup",
    lastName:"Biswal",
    address:{houseNumber:'1234'}
}
console.log(user.firstName);
console.log(user.address.houseNumber);
// address is a object also 
// for access houser number in address
console.log(user.address.houseNumber)
// if there is no object exist then what to do?
// for that case I don't want error I want it to be undefined
// for this we have to write this code
console.log(user?.firstName); // it will check user is exist or not then it will checkk the property is exist is not
// if user doen't exist then it will show ### undefined

console.log(user?.address?.houseNumber) 