function counter1(){
    var count = 0;
    function increment(){
        count++
        console.log(count)
    }
    return increment

}
counter = counter1()
counter();counter();counter();counter();counter();

// console.log(count) = data hiding