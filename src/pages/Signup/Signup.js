import React, { useEffect, useState } from "react";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/authAction";
import Loader from "../../assets/loader";
import { verifyEmail, verifyLength, verifyName } from "../../utils/Helper";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const { loading, userInfo, userToken, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    reEnterPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleOnSignUp = (e) => {
    e.preventDefault();
    const data = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };

    if (
      verifyEmail(user.email) &&
      verifyName(user.firstName) &&
      verifyName(user.lastName) &&
      verifyLength(user.password, 6)
    ) {
      dispatch(registerUser(data));
    } else {
      setErrorMsg("Please fill information correctly");
    }

    if (error === "Request failed with status code 422") {
      setErrorMsg("User Already Present!, try login..");
    }
    if (error === "Request failed with status code 500") {
      setErrorMsg("Server Error!!");
    }
  };

  useEffect(() => {
    if (userToken) {
      localStorage.setItem("token", userToken);
      localStorage.setItem("user", JSON.stringify(userInfo));
      navigate("/");
    }
  }, [userToken]);

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="signup-form">
        <div>
          <lable>Email</lable>
          <input
            type="text"
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            placeholder="sample@abc.com"
          />
        </div>
        <div>
          <lable>First Name</lable>
          <input
            type="text"
            placeholder="John"
            value={user.firstName}
            onChange={(e) => {
              setUser({ ...user, firstName: e.target.value });
            }}
          />
        </div>
        <div>
          <lable>Last Name</lable>
          <input
            type="text"
            placeholder="Maxwell"
            value={user.lastName}
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value });
            }}
          />
        </div>
        <div>
          <lable>Password</lable>
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </div>
        <div>
          <lable>Re-enter Password</lable>
          <input
            type="password"
            placeholder="Re-enter Password"
            value={user.reEnterPassword}
            onChange={(e) => {
              setUser({ ...user, reEnterPassword: e.target.value });
            }}
          />
        </div>

        <p style={{ color: "rgb(236, 23, 23)" }}>{errorMsg}</p>
        <button
          onClick={handleOnSignUp}
          className="signup-button"
          type="submit"
        >
          {loading ? <Loader /> : "Sign Up"}
        </button>
      </div>
      <div>
        <p style={{ marginTop: "12px" }}>
          Already have an account please <Link to="/login">LogIn</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
