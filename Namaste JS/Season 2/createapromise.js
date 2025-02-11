let cart = ["I", "Will", "get Rich"];
// const promise = createOrder(cart);

// console.log(promise)
// create order will take 5 seconds and our promise object is in emptyy state - Promise {<pending>} -
// and when the async op createOrder finishes exec, it will populate the promise object

// WHATEVER WE WANT TO PASS IT DOWN THRU THE CHAIN, WE HAVE TO RETURN IT
createOrder(cart)
  .then(function (data) {
    console.log(data);
    return data; // we are passing data to paymentApi() as a parameter.
  })
  .then(function (data) {
    // data passed as an param     here
    return paymentApi(data); // we are RETURNING PAYMENT API because we want payment TXN to use it
  })
  .then(function (data) {
    return paymentTXN(data);
  })
  .catch(function (error) {
    console.log(error.message);
  });
// .then(function(data){
//     return paymentTXN(data)  <--- THIS WILL BE CALLED IF AFTER CATCH
// })

function createOrder() {
  const pr = new Promise(function (resolve, reject) {
    if (cart) {
      // setTimeout(function(){
      //     resolve (cart);
      // }, 0)
      resolve(cart);
    } else reject(new Error("Custom error comment in js"));
  });
  return pr;
}

function paymentApi(data) {
  return new Promise(function (resolve, reject) {
    if (data) {
      resolve(console.log("Payment SuccessFul"));
    } else reject(new Error("Payment has been failed"));
  });
}

function paymentTXN(data) {
  return new Promise(function (resolve, reject) {
    if (data) {
      resolve(console.log("Payment txn id"));
    } else reject(new Error("Payment TXN been failed"));
  });
}
