import React from 'react'

const PromiseTest = () => {

    const cart = ["laptop", "shoes", "bag"];

    const promise1 = () => {
        return new Promise((resolve, reject) => {
            if(cart){
                const area = {
                    id: 1,
                    name: "Shwetank",
                    location : "Noida"
                };
                resolve(area)
            }
            else reject("Error fetching cart");
        })
    }

    promise1().then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log("Error:", err)
    })

    
  return (
    <div>
        <h3>Test</h3>
    </div>
  )
}

export default PromiseTest