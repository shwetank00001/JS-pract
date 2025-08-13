import React, { useState, useEffect } from "react";
import DebouncedSearch from "./DebouncedSearch";

export default function List() {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const [allData, setData] = useState([]);

  const [inputData, setInputData] = useState("");

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

  function handleSubmit(e) {
    e.preventDefault();
    const newSearchedData = allData.filter(function (item) {
      return item.title.toLowerCase().includes(inputData);
    });
    setData(newSearchedData);
  }

  function handleReset(){
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
  }

  const testFn =() =>{
    console.log("debounce")
  }
  function debouncedSearch(apiFunction, delay){
    let timer;
    return function(){
      let context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        apiFunction.apply(context, args);
      }, delay)
    }
  }

  const betterFunction = debouncedSearch(testFn, 1000)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add a data...1"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          onKeyPress={betterFunction}
        />
        <button type="submit">Search </button>
        <button onClick={handleReset}>Reset </button>
      </form>
      <p>{displayData}</p>
    </div>
  );
}
