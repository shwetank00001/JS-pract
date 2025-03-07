import React from "react";

const Signup = () => {
  const [isAuth, setAuth] = React.useState(false);

  const login = () => {
    setAuth(function (item) {
      return !item;
    });
  };
  const userState = isAuth ? "Logged In" : "Logged Out";
  return (
    <div>
      <h3> This is Signup page</h3>
      <p>User is :{userState}</p>{" "}
      <span>
        <button onClick={login}>Click to login!</button>
      </span>
    </div>
  );
};

export default Signup;
