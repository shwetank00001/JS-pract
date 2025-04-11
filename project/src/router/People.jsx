import React from "react";
import { userList } from "./dataPeople";

export default function People() {
  const [peopleList, setList] = React.useState(userList);

  const ele = peopleList.map(function (item) {
    return (
      <div key={item.id}>
        <img src={item.avatar} />
        <h3>Name: {item.name}</h3>
        <h4>Role: {item.role}</h4>
        <h4>Customer Rating: {item.id}</h4>
      </div>
    );
  });
  return <div>{ele}</div>;
}
