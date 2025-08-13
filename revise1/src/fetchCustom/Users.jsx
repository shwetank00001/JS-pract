import React, { useState } from "react";

export default function Users() {
  const url = "https://dummyjson.com/users";

  const ele = userData.map(function (item) {
    return (
      <div>
        <h1>{item.firstName}</h1>
      </div>
    );
  });

  return (
    <div>
      <h1>Users</h1>
      {ele}
    </div>
  );
}
