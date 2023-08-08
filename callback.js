// callback functions 

function myFunc2(name){
    console.log('hello world')
    // let name= "swarup"
    console.log(`my name is ${name}`)
} 
function myFunc(callback){
    console.log('callback function called ')
    callback("swarup");
}
myFunc(myFunc2);