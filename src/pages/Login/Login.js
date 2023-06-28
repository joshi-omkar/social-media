import React, { useEffect, useState } from "react";
import Loader from "../../assets/loader";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmail, verifyLength, verifyName } from "../../utils/Helper";
import { loginUser } from "../../features/auth/authAction";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const { loading, userInfo, userToken, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnLogIn = (e) => {
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
      dispatch(loginUser(data));
    } else {
      setErrorMsg("Please fill information correctly");
    }

    if (error === "Request failed with status code 404") {
      setErrorMsg("User Not Present Please Sign Up!");
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
      <h2>Log In</h2>
      <div className="signup-form">
        <div>
          <label>Email</label>
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
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </div>
        <p style={{ color: "rgb(236, 23, 23)" }}>{errorMsg}</p>
        <button onClick={handleOnLogIn} className="signup-button" type="submit">
          {loading ? <Loader /> : "Login"}
        </button>
      </div>
      <div>
        <p style={{ marginTop: "12px" }}>
          New to NeoG? Please <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
