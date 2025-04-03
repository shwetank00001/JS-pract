import React from "react";

import { reviseContext } from "./reviseContext";
import PeopleDisp from "./PeopleDisp";

function Main() {
  const [data, setData] = React.useState(PeopleDisp);
  return (
    <reviseContext.Provider value={{ data }}>
      <PeopleDisp />
    </reviseContext.Provider>
  );
}

export default Main;
