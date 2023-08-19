<<<<<<< HEAD
console.log("A" + "B" + "C")
console.log("A" - "B" + "C")
=======
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();


>>>>>>> 6224170046777fe69e5533b5a8e74ca0e62f2200
