const plantNeedsWater1 = function(day){

}

const plantNeedsWater = (day) => {
    if (day === "Wednesday") {
        return true;
    } else {
        return false;
    }
};

plantNeedsWater("Tuesday");
console.log(plantNeedsWater("Tuesday"));


// const plantNeedsWater = (day) => (day === "Wednesday" ? true : false);   ===> implicit return