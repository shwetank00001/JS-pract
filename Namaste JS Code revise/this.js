/* what is THIS?
this is a keyword in js, and the vlaue of this in the global space is equal to the global object. 
 and the value of the global object depends on the run time env!
Also, this behaves differently in a function, a object, an arrow function.
*/
/*
In a function!!!!!
this gives us two values in a function
1. undefined when used in a strict mode
2.  window when used in a regular non strict mode-> 
in Non- strict mode, a this subsitution happens and
if the vlaue of this is undef or null, the value becomes the global object.
*/
"use strict"
function x(){
    console.log(this)
}
x()

// 'this' in an object
/*
This points toward the whole object when used in a method in an obj.
A method is nothing but a function declared in an object.
*/
const obj1 = {
    a: 10,
    x: function(){
        console.log(this)
        console.log(this.a)  // this points to the object as this = obj1, this.a = obj1.a
    }
}
obj1.x()
// HOW TO USE FUNCTION X OF OBJ1 IN ANOTHER OBJECT
const obj2 = {
    a: 20,
}
// we use CALL, Apply, bind to share methods in an object.!
obj1.x.call(obj2)  
// the 'this' in x is pointing to obj1, so the .call(obj2) makes the 'this' point to obj2.
// so now, obj1.x.call(obj2), will give the value of ob2.x()
/*
A more advanced use of this.
*/
const name1 = {
    fname: "shwetank",
    lname: "mishra",
    printName : function(){
        console.log(this.fname +" "+this.lname)
    }
}
name1.printName()

const name2 = {
    fname : "Swapnil",
    lname: "awasthi"
}
// name2.x()  we cant
name1.printName.call(name2)  

// ---------------THIS IN ARROW FUNCTION ----------------
// they dont have their own this binding.
// this behaves differently in an arrow function. this behaves like how it would be in the enclosed lexical env.

function a(){
    let abc = () => {
        console.log(this)
    }
    abc()
}
a()
// here, 'this' will beahve like it's in the the lexical enclosing lexical env.
// that is it behaves like it's in function a();
/* 
function a(){
        console.log(this)
    }
a()
*/
// since we are in strict mode. so the 'this' in function will give us 'undef'

const test1 = {
    val1: 20,
    outer: () => {
        console.log(this)
    }
}
test1.outer() // window - global
const test2 = {
    val1: 20,
    outer: function (){
        let y = () => {
            console.log(this)
        }
        y()
    }
}
test2.outer()