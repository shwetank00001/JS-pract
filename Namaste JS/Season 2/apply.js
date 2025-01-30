// CALL is used in the concept of FUNCTION BORROWING -> if list2 doesnt have, it can borrow from list1
// APPLY passes the arguements in an array!

let list1 = {
    fname: "shwetank",
    lname: "mishra",
    methodToPrint : function (age){
        console.log(this.fname+ " "+ this.lname + " "+ age )
    }
}
list1.methodToPrint(26)

let list2 = {
    fname: "swapnil",
    lname: "awasthi"
}
list1.methodToPrint.call(list2, 25); // call takes arguement normally
list1.methodToPrint.apply(list2, [25]);   // apply takes arguement in and array.
// this prints in one line only. SO we basically use BIND to copy and use it somehwere

// lastBind()


