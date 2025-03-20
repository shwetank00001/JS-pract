import React from "react";
import { themeContext } from "./themeContext";
import "./main.css";

function Subsection() {
  const { color, setColor } = React.useContext(themeContext);

  const styles = {
    backgroundColor: color,
  };

  return (
    <div style={styles} className="sub">
      <h4>This is subsection in a themed div</h4>
    </div>
  );
}

export default Subsection;
