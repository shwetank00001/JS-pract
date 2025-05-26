import Home from "./hooks/context/Home";
import Login from "./hooks/context/Login";
import Dash from "./hooks/context/Dash";
import Signup from "./hooks/context/Signup";
import { Routes, Route } from "react-router";
import { useState } from "react";

import { globalContext } from "./hooks/context/globalContext";
import ProtectedRoute from "./hooks/context/ProtectedRoute";

function App1() {
  const [auth, setAuth] = useState(false);
  return (
    <globalContext.Provider value={{ auth, setAuth }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dash />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </globalContext.Provider>
  );
}

export default App1;
