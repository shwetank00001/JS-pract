import React from "react";
import { Link } from "react-router";

export default function Main() {
  const ele = ["Data1", "Data2","Data3","Data4","Data6"];
  const eleList = ele.map((item) => {
    return (
      <div key={item.id}>
        <h1 data-test ={`dataIsId-${item}`}>{item}</h1>
      </div>
    )
  })
  return (
    <div>
      <h1 data-test="main-header">This is the main page!</h1>
      <h3>Clicking this will take you to the users list page.</h3>
      <Link to="/people">People List (Only accessible if logged In!)</Link>
      <hr />
      <Link data-test="linkToAuth" to="/auth">Log in?!</Link>
      <div>
        {eleList}
      </div>
    </div>
  );
}
