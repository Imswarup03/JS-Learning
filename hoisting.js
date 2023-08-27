// hoisting

// hello();

// function hello(){
//     console.log("Hello World");
// }  // this is called hoisting

// function inside function

const app=()=>{
    const myFunc=()=>{
        console.log("Hello World")
    }
    const addTwo=(num1,num2)=>{
        return num1+num2;

    }
    const subTwo=(num1,num2)=>num1-num2;
    console.log('Inside app');
    myFunc();
    console.log(addTwo(5,3))
    console.log(subTwo(5,3))
    }
app()








