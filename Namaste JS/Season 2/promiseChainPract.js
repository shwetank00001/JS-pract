let cart = ["Obj1", "Obj2", "Obj3"];

function getCartDataApi() {
  return new Promise(function (resolve, reject) {
    if (cart) {
      resolve(cart);
    }
    reject(new Error("Cart couldn't be fetched"));
  });
}

getCartDataApi().then(function (result) {
  console.log(result);
});
