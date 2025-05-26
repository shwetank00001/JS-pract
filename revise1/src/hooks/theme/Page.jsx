import React from "react";
import { themeContext } from "./themeContext";

export default function Page() {
  const { color } = React.useContext(themeContext);
  console.log("Page COlor", color);

  const styling = {
    backgroundColor: color,
  };
  return (
    <div style={styling}>
      <p>Pages content</p>
    </div>
  );
}
