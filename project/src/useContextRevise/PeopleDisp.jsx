import React from "react";
import { useContext } from "react";
import { reviseContext } from "./reviseContext";

function PeopleDisp() {
  const { data, setData } = useContext(reviseContext);

  const ele = data.map(function (item) {
    return (
      <div key={item.id}>
        <h4>{item.fname}</h4>
      </div>
    );
  });
  return (
    <div>
      <h1>This is people details. </h1>
      {ele}
    </div>
  );
}

export default PeopleDisp;
