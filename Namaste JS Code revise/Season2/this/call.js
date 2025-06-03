//CALL apply bind are used when to share a merhod

const person1 = {
    name: "Shwetank",
    printName : function(){
        console.log(this.name)
    }
}

const person2= {
    name:"Swapnil"
}
person1.printName();
person1.printName.call(person2);