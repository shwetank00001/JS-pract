// .join(), .slice(), .splice(), .shift(), .unshift(), and .concat()

// splices mutates the array, slice doesnt,, mutates = updating the initial array
//shift deletes the 1st array value. array.shift()
// pop deltes the last element of the array. arr.pop()
// unshift adds a new value at the array start. array.unshift("newValue")
// push adds a new elemnt to the end of the arr. arr.push('value')
// slice will slice the array and arrayName.slice(1,4) =? this will take the value from 1 index to the 4-1 = 3rd index.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits)

const groceryList = [
    "orange juice",
    "bananas",
    "coffee beans",
    "brown rice",
    "pasta",
    "coconut oil",
    "plantains",
];

console.log(groceryList.slice(3, 5));
console.log(groceryList);

groceryList.unshift("popcorn");
console.log(groceryList);

groceryList.shift();
console.log(groceryList);

const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);


const test = ["1", "2", "3", "$"]
console.log(test.join(" ^ "))


const test2 = ["12", "213", "313", "$13"];
console.log(test2.concat(test))


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren)