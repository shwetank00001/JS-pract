function sayThanks(arr) {
    console.log("Thank you for your purchase! We appreciate your business.");
}

sayThanks();
sayThanks();
sayThanks();


function sayThanks(name) {
    console.log(
        `Thank you for your purchase ${name}! We appreciate your business.`
    );
}

sayThanks("Cole");


// DEFAULT VALUES

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

makeShoppingList();