// switch statements


let day = 4;
switch(day){
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log("Tueday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    
}
console.log("Hello")
// while loop

let num = 0;

while (num<=9){
    console.log(num)
    num++
}

console.log('Hello')
let end=10
let start =0

while (start <= end) {
    console.log(start)
    start++
}

let i =10
let j =0
let total =0
while (j<=10){
    total=total +j
    j++
}

console.log(total)

num1=10
let total1 = num1*(num1+1)/2
console.log(total1) // fastest

// for loop

for (let n =0;n<=9;n++){
    console.log(n)
}
// console.log(n) // it's an error bcoz of let 

console.log("Hello")
for(var m =0 ;m <=9; m++){
    console.log(m)
}
console.log("aa")
console.log(m)


// break

for (let i =1; i<=10; i++){
    if(i==5){
        break;
    }
    console.log(i)
}
console.log("Break")

for (let k=0;k<=10;k++){
    console.log(k)
}

for (let i =1; i<=10; i++){
    if(i==5){
        continue;
    }
    console.log(i)
}


// do while loop 

let x =0;
while(x<=5){
    console.log(x);
    x++;
}

let z =6;
do{
    console.log(z);
    z++
}while(z<=3)  // in do while loop do block will first executed then while block 
console.log("=======================")
let y =6;
do{
    
    y++
    console.log(y);
}while(y<=10)
