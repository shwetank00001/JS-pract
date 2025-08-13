import React, { useState } from "react";
import useFetch from "./useFetch";

export default function Users() {
  const url = "https://dummyjson.com/users";

  const {fetchedData} = useFetch(url);

  console.log("Users", fetchedData.users);

  const allUsers = fetchedData?.users || []; // revised this common logic when fetching data from API
  const ele = allUsers.map(function (item) {
    return (
      <div>
        <h3>{item.firstName}</h3>
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
