import React from "react";
import { reviseContext } from "./reviseContext";
import PeopleDisp from "./PeopleDisp";
import { persons } from "./tempData";

function Main() {
  const [data, setData] = React.useState(persons);
  return (
    <reviseContext.Provider value={{ data }}>
      <h1>This is the context router page</h1>
      <PeopleDisp />
    </reviseContext.Provider>
  );
}

export default Main;
