import React, { useState, useEffect } from "react";
import DebouncedSearch from "./DebouncedSearch";

export default function List() {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const [allData, setData] = useState([]);

  const [inputData, setInputData] = useState('');


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(url);
        const res = await data.json();
        setData(res);
      } catch (error) {
        console.log("Error is:", error);
      }
    };
    getData();
  }, []);

  console.log(allData);

  const displayData = allData.map(function (item) {
    return (
      <div>
        <h3>{item.title}</h3>
      </div>
    );
  });

  function handleSubmit(e){
    e.preventDefault();
    const newSearchedData = allData.filter(function(item){
      return item.title.toLowerCase().includes(inputData)
    })
    setData(newSearchedData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Add a data" value={inputData} onChange={(e) => setInputData(e.target.value)} />
        <button type="submit">Search </button>
      </form>
      <p>{displayData}</p>
    </div>
  );
}
