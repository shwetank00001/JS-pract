import React, { useContext } from "react";
import { userList } from "./dataPeople";
import { globalContext } from "./globalContext";

export default function People() {

  const {auth, setAuth} = useContext(globalContext)
  const [peopleList, setList] = React.useState(userList);

  const ele = peopleList.map(function (item) {
    return (
      <div key={item.id}>
        <img src={item.avatar} />
        <h3 data-test={`userName-${item.name}`}>Name: {item.name}</h3>
        <h4>Role: {item.role}</h4>
        <h4>Customer Rating: {item.id}</h4>
      </div>
    );
  });

  function handleLogout(){
    setAuth(item => false);
  }
  return (
    <>
      <button data-test="logoutButton" onClick={handleLogout}>Logout</button>
      {ele}
    </>
  )
}
