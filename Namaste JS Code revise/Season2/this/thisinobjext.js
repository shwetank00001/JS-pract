const obj1 = {
    a: "Shwetank",
    printName: function(){
        console.log(this)
        console.log(this.a)  // points towards the particular key
    }
}
obj1.printName(); // will print the whole obj
