// splice method 
// start, delete, insert

const myArray = [ 'item1', 'item2','item3']

// delete
myArray.splice(1, 1); // (index, number of items to delete)
console.log(myArray)



// insert
myArray.splice(1,0,"insert item") // (index,how many elements to delete, "value" )
console.log(myArray)


// insert and delete at the same time

const ans =myArray.splice(1,2,"inserted item1","inserted item2")
console.log(myArray)

