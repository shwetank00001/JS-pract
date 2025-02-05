// EVENT BUBBLING IS BOTTOM TO TOP and BY DEFAULT , we pas
// EVENT CAPTURE IS TOP TO BOTTOM.
// when we click child, in Event bub, it will start from child to gp
// when we click child, in Event capt, it will start from gp to child
// e.
document.querySelector(".grandParent")
.addEventListener("click", (e) => {
    console.log("GP Clicked") 
    e.stopPropagation()  // stops the event propagation. when the func is executed.
}, true)
document.querySelector(".parent")
.addEventListener("click", () => {
    console.log("parent clicked")

}, true)
document.querySelector(".child")
.addEventListener("click", () => {
    console.log("child clicked")

}, true)