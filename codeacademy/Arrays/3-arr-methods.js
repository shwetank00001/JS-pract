// .join(), .slice(), .splice(), .shift(), .unshift(), and .concat()

// splices mutates the array, slice doesnt

const groceryList = [
    "orange juice",
    "bananas",
    "coffee beans",
    "brown rice",
    "pasta",
    "coconut oil",
    "plantains",
];

groceryList.shift();
console.log(groceryList);
groceryList.unshift("popcorn");

console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);

