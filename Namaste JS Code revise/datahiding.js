{let count = 0;
function addCount(){
    count++;
    console.log(count);
}}
addCount();
addCount();
addCount();

// console.log("data accessible globally", count);


function allCount(){
    let sum = 0;
    function testin(){
        sum++;
        console.log("Sum is", sum);
    }
    return testin
}
const mainCalc = allCount();
mainCalc();
mainCalc();
mainCalc();
mainCalc();
mainCalc();



function xyz(){
    let sumation =0;
    sumation++;
    console.log(sumation);
}

xyz();
xyz();
xyz();
xyz();


// we are calling same instance of sn xyz ^ so we will get sane value everytime