import React from "react";
import Parent from "./Parent";
import Child from "./Child";
import { GlobalContext } from "./GlobalContext";

const GrandParent = () => {
  const [isTrue, setTrue] = React.useState(true);
  return (
    <div>
      <GlobalContext.Provider value={{ isTrue, setTrue }}>
        <h1>This is GP</h1>
        <Parent />
        <Child />
      </GlobalContext.Provider>
    </div>
  );
};

export default GrandParent;
