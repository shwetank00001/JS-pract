import React, { useState } from "react";

export default function DebouncedSearch() {
  const [inputData, setData] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="add"
          value={inputData}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
