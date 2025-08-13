import React from "react";
import Users from "./Users";
import Todo from "./Todo";

import './style.css';

export default function Main() {
  return (
    <div>
      <h1>Main page</h1>

      <div className="card">
        <Users />
        <Todo />
      </div>
    </div>
  );
}
