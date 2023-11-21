// Asynchronous programming

// console.log("start")

// setTimeout(function(){
//     console.log("Hey I am good");
// },1000
// )

// console.log("End")


// callbacks
function loadScript(src,callback){
    var script= document.createElement("script");
    script.src= url;
    script.onload = function(){
        console.log("script loaded")
        callback();
    }
    script.onerror = function(){
        console.log("Error landing script with SRC",src);
        callback(new Error("Src got some error"))
    }
    document.body.appendChild(script)
}

function hello(error,src){
    if (error){
        console.log(error);
        return;
    }
    alert("Hello world!",src);
}

loadScript("https://code.jquery.com/jquery-3.6.0.js");
