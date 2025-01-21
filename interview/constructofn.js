function counter(){
    var count = 0;
    this.add = function(){
        count++;
        console.log(count)
    }

    this.sub = function(){
        count--;
        console.log(count)
    }
}

const counter1 = new counter()
counter1.add()
counter1.add()
counter1.add()
counter1.sub()
counter1.sub()