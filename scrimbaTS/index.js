const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

const cashInRegister = 100;
const orderQueue = [];

function addNewPizza(menuParam) {
  orderQueue.push(menuParam);
}

addNewPizza(menu);

function placeOrder(menuObj) {
  menuObj;
}
