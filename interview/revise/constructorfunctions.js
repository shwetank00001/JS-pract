function count(){
    var sum =0;
    this.add = function(){
        sum++
        console.log(sum)
    }
    this.sub = function(){
        sum--;
        console.log(sum)
    }

}

const counter = new count();
counter.add();
counter.add();
counter.add();
counter.add();
counter.add();
counter.add();
counter.sub();
counter.sub();