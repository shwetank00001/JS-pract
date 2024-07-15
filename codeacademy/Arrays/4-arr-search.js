const fruits = ["Yello", "Apple", "Orange", "Apple", "Mango", 'Apple'];
let count = 0;

const ele = fruits.map(function(item){
    if(item === "Apple"){
        count = count + 1
    }

})    
console.log(count)