import React from "react";
import { Link } from "react-router-dom";

function PersonalData() {
  const [user, setUser] = React.useState([
    "Shwetank",
    "Manoj",
    "Jathin",
    "Aman",
    "Kushal",
  ]);

  const ele = user.map(function (item) {
    return (
      <p>
        Data for: <Link>{item}</Link>
      </p>
    );
  });

  return (
    <div>
      <h3>This is the Personal data for users.</h3>
      {ele}
    </div>
  );
}

export default PersonalData;
