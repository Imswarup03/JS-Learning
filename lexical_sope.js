// lexical scope


function myApp(){
    const app="myapp"
    function myFunc(){
        // const app="my Func"
        console.log(app)  // js will search app gloally so app is present in myApp function so it will prin "myapp"
        
    }
    const myFunc2=()=>{
        const second="my second"
        console.log('2ndFunc')
    }
    const myFunc3=function(){
        const third ='My third'
        console.log('3rd Func')
    }
    console.log('function Inside Function',app)
    myFunc()
    myFunc2()
    myFunc3()
}
myApp()


// block scope and function scope

// let and const are block scope
// var is function scope
{
    let firstname ="Swarup";
}
console.log(firstname) // error 
// because it's not defined outside the block

{
    if (true){
        var lastname = "Kumar";
        console.log("inside true",lastname);
    }
}

// function scope 

var firstname="Swarup"
// Var can be used anywhere in the file , but its recommended to use let or const instead of var.

function addTwo(a,b){
    if (typeof b ==="undefined"){
        b=0
    }
    return a+b
} // before we used to do this 


// default parameters 
function addTwo(a,b=0){
    return a + b;   /// now we have done this way
}
