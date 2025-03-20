import React from "react";
import Subsection from "./Subsection";
import { themeContext } from "./themeContext";

function Homepage() {
  const [color, setColor] = React.useState();

  function colorIt(param) {
    setColor(param);
    console.log(param);
  }

  return (
    <themeContext.Provider value={{ color, setColor }}>
      <h1>Creating theme generator page!</h1>
      <button onClick={() => colorIt("red")}>🔴</button>
      <button onClick={() => colorIt("blue")}>🔵</button>
      <button onClick={() => colorIt("purple")}>🟣</button>
      <button onClick={() => colorIt("green")}>🟢</button>
      <Subsection />
    </themeContext.Provider>
  );
}

export default Homepage;
