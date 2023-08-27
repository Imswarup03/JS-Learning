// fill method 
// value , start , end

// it will create a new array
// this will create a new array of 10 elements for and the values are -1
const myArray = new Array(10).fill(-1);
console.log(myArray)


const array = [1,2,3,4,5,6,7,8,9];
array.fill(0,2,4)// value, start , end
console.log('new array', array);//[1,2,0,0]