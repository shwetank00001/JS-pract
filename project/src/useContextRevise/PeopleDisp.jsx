import React from "react";
import { reviseContext } from "./reviseContext";
import { useContext } from "react";

function PeopleDisp() {
  const { data } = useContext(reviseContext);

  const ele = data.map(function (item) {
    return (
      <div key={item.id}>
        <h3>{item.names}</h3>
      </div>
    );
  });

  return <>{ele}</>;
}

export default PeopleDisp;
