let groceryList = ["bread", "tomatoes", "milk"];
console.log(groceryList);
groceryList[1] = "avocados";
console.log(groceryList);

// let and const difference- adding commit changes
let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

condiments[0] = "Mayo";
console.log(condiments);
condiments = ["Mayo"];
console.log(condiments);

utensils[3] = "Spoon";
console.log(utensils);


//  length
const objectives = ["Learn a new language", "Read 52 books", "Run a marathon"];
console.log(objectives.length);

// push- adds element to last
const chores = ["wash dishes", "do laundry", "take out trash"];
chores.push("item 1", "item 2");
console.log(chores);

// pop- deletes from end
const chores1 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop()
console.log(chores1)

//nested arrays trick

const numberClusters = [
    [1, 2],
    [3, 4],
    [5, 6],
    [2,[4,5]]
];

const target = numberClusters[2];
console.log(target);

const target1 = numberClusters[2][1];
console.log(target1);

const target2 = numberClusters[3][1][0];
console.log(target2);







