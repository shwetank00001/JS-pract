function parent(){
    var x = 19
    function child(){
        console.log(x)
    }
    return child
}

parent1 = parent()
parent1()
console.log(parent1)


// constructor functions
function counter(){
    var count = 0;
    this.increment = function(){
        count++;
        console.log(count)
    }
    this.decre = function(){
        count--;
        console.log(count)
    }
}

var counter1 = new counter()
counter1.increment();counter1.increment();counter1.increment();counter1.increment();
counter1.decre(); 
