import React from "react";
import { useSelector } from "react-redux";

export default function Homepage() {
  const proteinCount = useSelector((globalState) => globalState.protein.proteinCount);
  console.log(proteinCount)
  return (
    <div>
      <h3>Protein App</h3>
    </div>
  );
}
