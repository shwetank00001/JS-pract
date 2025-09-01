// METHOD -> Function part of an object is called a method.
// this => inside an object points toward the object value!!!
// this.a => points towards the value of a

const obj = {
    a: 10,
    x : function(){
        console.log(this.a)
    }
}

obj.x() ;


const obj1 = {
    b : 3993,
    printData : function(){
        console.log(this.b)
    }
}

obj1.printData()

