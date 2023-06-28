import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import NavBar from "./components/Navbar/Navbar";
import Feed from "./pages/Feed/Feed";
import RequireAuth from "./components/RequireAuth/RequireAuth";

const App = () => {
  const { userToken } = useSelector((state) => state.auth);
  return (
    <div className="App">
      {userToken ? <NavBar /> : ""}
      <Routes>
        <Route
          path="/"
          exact
          element={
            <RequireAuth>
              <Feed/>
            </RequireAuth>
          }
        />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
