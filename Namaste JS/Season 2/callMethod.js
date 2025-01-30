const obj1 = {
    first : "Shwetank",
    last : "Mishra",
    printName : function(hometown){
        console.log(this.first + " " + this.last +" "+ hometown);
    }
}
obj1.printName("Benaras")

//Suppose we have another object but it only has a name and no method!
let obj2 = {
    first : "Swapnil",
    last: "awasthi"
}
//Now this doesnt has a method, so we can use CALL to borrow a function => Function borrowing;
obj1.printName.call(obj2, "Mathura");
//Now in obj1.printName, 'THIS' is pointing towards the whole obj1,
// So when we will use ".call(obj2)". The this in the obj1.printName will now point towards the OBJ2

