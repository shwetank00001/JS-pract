const stud1 = {
    name : "Shwetank",
    x: function(){
        console.log(this)
    },
    printName: function(){
        console.log(this.name)
    }

}
stud1.x();
stud1.printName();

const stud2 = {
    name : "Stud2 Name",
}
// how can we use the methods x and printName in stud2? We can use call,apply, bind methods.

// stud2.printName() // we will get an error since printName is not a method of stud2;

// HOW TO SHARE A METHOD? we use Call, Bind Apply;
// we can share a method by overriding the value of 'THIS' keyword
// to share we can do 'stud1.printName' because printName is only in stud1 
// and then we .call this statement to pass in the value, WHERE 'THIS' SHOULD POINT TO;

stud1.printName.call(stud2)





