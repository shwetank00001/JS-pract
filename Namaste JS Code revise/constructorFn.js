function Count(){
    let sum = 0;

    this.add = function(){
        sum++;
        console.log(sum);
    }

    this.sub= function (){
        sum--;
        console.log(sum);
    }
}

let value = new Count();
value.add();
value.add();
value.add();
value.add();
value.add();