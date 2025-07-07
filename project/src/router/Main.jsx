import React from "react";
import { Link } from "react-router";

export default function Main() {
  return (
    <div>
      <h1 data-test="main-header">This is the main page!</h1>
      <h3>Clicking this will take you to the users list page.</h3>
      <Link to="/people">People List (Only accessible if logged In!)</Link>
      <hr />
      <Link to="/auth">Log in?!</Link>
    </div>
  );
}
