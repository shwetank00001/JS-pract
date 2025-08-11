import React from "react";
import { useSelector } from "react-redux";

export default function Homepage() {
  const proteinCount = useSelector(
    (globalState) => globalState.protein.proteinCount
  );
  console.log(proteinCount);

  function handleSubmit(e){
    e.preventDefault();

  }
  
  return (
    <div>
      <h1>Protein App</h1>
      <div>
        <h3>Total Protein count: {proteinCount}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input placeholder="add protein for meals" />
        <button type="submit">Add</button>
      </form>
        
    </div>
  );
}
