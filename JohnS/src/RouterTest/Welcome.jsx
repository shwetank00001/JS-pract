import React, { useState } from "react";
import { namesList } from "./personData";
import { Link } from "react-router";

function Welcome() {
  const [peopleList, setList] = useState(namesList);

  const ele = peopleList.map((item) => {
    return (
      <ul>
        <li>
          <Link to={`/welcome/${item.name}`}>{item.name}</Link>
        </li>
      </ul>
    );
  });
  return (
    <>
      <h1>Welcome</h1>
      <h1>List of people</h1>
      {ele}
    </>
  );
}

export default Welcome;
