import React, { useState } from "react";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [userData, setUserdata] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [textDisplay, setText] = useState();

  let handleSub = async function (e) {
    e.preventDefault();
    const newData = {
      id: new Date().getTime(),
      email: email,
      password: password,
    };
    setUserdata(function (item) {
      return [...item, newData];
    });

    try {
      const userCreds = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User Signed up with", userCreds);
      setText("User created in firebase DB.");
    } catch (error) {
      console.log(error);
    }
  };

  // const ele = userData.map((item) => {
  //     return (
  //         <div key={item.id}>
  //             <h3 >{item.email}</h3>
  //             <p>{item.password}</p>
  //         </div>
  //     )
  // })

  return (
    <div className="container mx-auto bg-slate-600 p-3 ">
      <form className="flex gap-3" onSubmit={handleSub}>
        <input
          className="border-2 border-blue-500 p-2 rounded-md"
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border-2 border-blue-500 p-2 rounded-md"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="text-white" type="submit">
          submit
        </button>
      </form>
      {/* {ele} */}
      {textDisplay}
    </div>
  );
};

export default Login;
