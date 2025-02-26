function count(){
    let x = 0;
    function y(){
        x++
        console.log(x)
    }
    return y
}

const count1 = count
count1();
count1();
count1();
count1();
