// "use strict"

// function abc(){
//     let obj2 = {
//         a: 10,
//         x: () => {
//             console.log(this)
//         }
//     }
//     obj2.x()
    
// }

// abc()


let obj1 = {
    a : 10,
    x: function(){
        // enclosing lexical context
        const y = () => {
            console.log(this)
        }
        y();
    }
}

obj1.x()