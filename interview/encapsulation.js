// DATA HIDING = ENCAPSULATION 
// Closure offers us this ^^ ability.

function counter(){
    var count = 0;
    function add(){
        count++
        console.log(count)
    }
    return add
}
// console.log(count) Here count is hidden and we can not access it further the func scope!. 
// So Count is hidden by the global code. 
// We can access this is line 16 because of the closure property. 
// add() is in closure with its lexical env that contains var count and return add = the func add itself
var counter1 = counter()
counter1();