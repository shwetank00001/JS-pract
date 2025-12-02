import Searchbar from "./Searchbar"
import React, { useState } from "react";


const Hero = () => {

    const url = "https://fakestoreapi.com/products";
    const [listofData, setList] = useState([]);
    const [searchData, setSearch] = useState('');

    React.useEffect(() => {
      async function getData() {
        try {
          const data = await fetch(url);
          const response = await data.json();
          console.log(response);
          setList(response);
        } catch (error) {
          console.log("error", error);
        }
      }
      getData()
    }, []);
    
    console.log("listofData", listofData);


    const ele = listofData?.map(function(item){
      return (
        <div>
          <h3>{item.title}</h3>
          <h4>{item.description}</h4>
          <hr />
        </div>
      )
    })



    function handleSubmit(e){
      e.preventDefault();
      console.log(searchData);
      const searchedEnteredData = listofData.filter((item) => {
        item.description.toLowerCase().includes(searchData);
      })

      console.log("searchedEnteredData", searchedEnteredData)
      // setList(searchedEnteredData)
    }


  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value= {searchData} onChange={e => setSearch(e.target.value)} />
            <button type='submit'>Search</button>
        </form>
      </div>
      <h1>This will load API.</h1>

      <div>
        {ele}
      </div>
    </div>
  )
}

export default Hero