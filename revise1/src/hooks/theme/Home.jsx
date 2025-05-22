import React from "react";
import Page from "./Page";
import { themeContext } from "./themeContext";

export default function Home() {
  const [color, setColor] = React.useState("");
  console.log(color);

  function setColorFn(colorParam) {
    setColor(colorParam);
  }
  console.log(color);

  return (
    <themeContext.Provider value={{ color }}>
      <div>
        <p onClick={() => setColorFn("red")}>Red</p>
        <p onClick={() => setColorFn("blue")}>Blue</p>
        <p onClick={() => setColorFn("yellow")}>Yellow</p>
        <p onClick={() => setColorFn("black")}>Black</p>
        <Page />
      </div>
    </themeContext.Provider>
  );
}
