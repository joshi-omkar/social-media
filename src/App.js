import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { useSelector } from "react-redux";
import NavBar from "./components/Navbar/Navbar";
import Feed from "./pages/Feed/Feed";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Explore from "./pages/Explore/Explore";
import Bookmark from "./pages/Bookmark/Bookmark";

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
        <Route
          path="/explore"
          exact
          element={
            <RequireAuth>
              <Explore/>
            </RequireAuth>
          }
        />
        <Route
          path="/bookmark"
          exact
          element={
            <RequireAuth>
              <Bookmark/>
            </RequireAuth>
          }
        />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
      <ToastContainer style={{ fontWeight: "500", fontSize: "1rem" }} />
    </div>
  );
};

export default App;
