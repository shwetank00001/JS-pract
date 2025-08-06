import React from "react";
import { useParams } from "react-router";

function UserData() {
  const { name } = useParams();
  console.log(name);
  return (
    <>
      <h1>THis data is for: {name} </h1>
    </>
  );
}

export default UserData;
