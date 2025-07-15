import Home from "./Home";
import Login from "./Login";
import Dash from "./Dash";
import Signup from "./Signup";
import { Routes, Route } from "react-router";
import { useState } from "react";

import { globalContext } from "./globalContext";
import ProtectedRoute from "./ProtectedRoute";

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
