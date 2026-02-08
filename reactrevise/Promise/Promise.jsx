import React from 'react'

const Promise = () => {

  const fakeData = ["Study Table", "Laptop", "Mouse", "Perfume"];

  const p1 = new Promise((resolve, reject) => {
    if(fakeData){
      resolve(`The data in fakeData is: ${fakeData}`);
    }
    else throw new error(reject("THis is an error"))
  });

  p1.then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })

  return (
    <div>
      Fake data in console.
    </div>
  )
}

export default Promise