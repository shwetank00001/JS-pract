import React, { useState } from 'react'

const Effect = () => {

  const url = "https://dummyjson.com/products";

  const [allData, setData ] = useState([]);

  React.useEffect(()=> {
      async function getData(){
        try {
          const fetchedData = await fetch(url);
          const res = await fetchedData.json();
          console.log(res.products);
          setData(res.products)
        } catch (error) {
          console.log("Error", error)
        }
      }

      getData();
  }, []);

  const ele = allData.map(function(item){
    return (
      <div>
        <h1>{item.title}</h1>
      </div>
    )
  })
  return (
    <div>
      {ele}
    </div>
  )
}

export default Effect