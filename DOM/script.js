// 4 pillars of DOM
// 1. Selection of an Element
// 2. Manipulation of the element (add, remove etc.), HTML
// 3. Changing CSS
// 4. Creating new elements and adding them to the page, Event Listener


var a = document.querySelector("h1")
console.log(a)

a.innerHTML = "Changed HTML"

a.style.color= "Yellow"

a.style.backgroundColor = "indigo"


// Event Listener
a.addEventListener("click",function(){
    console.log('clicked')
    a.innerHTML= "Event Listener"
    a.style.backgroundColor="Black"

})
