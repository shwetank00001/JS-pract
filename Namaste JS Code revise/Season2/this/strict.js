"use strict"

function a(){
    console.log(this)
}
a();
window.a();
globalThis.a();  //another way of finding globalThis
