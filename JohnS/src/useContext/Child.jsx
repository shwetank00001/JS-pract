import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Child = () => {
  const { isTrue, setTrue } = useContext(GlobalContext);
  console.log(isTrue);
  //   console.log(GlobalContext.isTrue);

  function changeTheOGState() {
    setTrue(function (item) {
      return !item;
    });
  }

  const eleToDisplay = isTrue
    ? "This is a true button"
    : "This is a false button";
  return (
    <div>
      <h1>This is Child</h1>
      <p>This will load the state</p>
      <button onClick={changeTheOGState}>{eleToDisplay}</button>
    </div>
  );
};

export default Child;
