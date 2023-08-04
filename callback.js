// callback functions 

function myFunc2(name){
    console.log('hello world')
    console.log(`my name is ${name}`)
} 
function myFunc(callback){
    console.log('callback function called ')
    callback();
}
myFunc(myFunc2);