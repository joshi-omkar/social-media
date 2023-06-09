import React, { useEffect, useState } from "react";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/authAction";
import Loader from "../../assets/loader";
import { getUserName, verifyEmail, verifyLength, verifyName, getRandomAvatar } from "../../utils/Helper";
import { Link, useNavigate } from "react-router-dom";
import { CloseEye, OpenEye } from "../../assets/Eyes";

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
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const userAvatars = [
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571526/9_ydm5xq.jpg",
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571526/8_hentfh.jpg",
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/7_psig48.jpg",
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/6_yhlawt.jpg",
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/5_qh2nlv.jpg",
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/4_fxsd5d.jpg",
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/3_gepnpf.jpg",
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/2_pbse3s.jpg",
    "https://res.cloudinary.com/diudzga1m/image/upload/v1688571527/1_xy03cy.jpg",
  ];

  const handleOnSignUp = (e) => {
    e.preventDefault();
    const data = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      username: getUserName(user.email),
      profileAvatar: getRandomAvatar(userAvatars)
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
        <div style={{ marginTop: "12px" }}>
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
        <div style={{ marginTop: "12px" }}>
          <label>First Name</label>
          <input
            type="text"
            placeholder="John"
            value={user.firstName}
            onChange={(e) => {
              setUser({ ...user, firstName: e.target.value });
            }}
          />
        </div>
        <div style={{ marginTop: "12px" }}>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Maxwell"
            value={user.lastName}
            onChange={(e) => {
              setUser({ ...user, lastName: e.target.value });
            }}
          />
        </div>
        <div style={{ marginTop: "12px" }}>
          <label>Password</label>
          <span style={{ display: "flex" }}>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={user.password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
                style={{
                  width: "460px",
                  borderTop: "none",
                  borderBottom: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              />
            </div>
            <div
              style={{
                backgroundColor: "#fff",
                marginTop: "2px",
                display: "flex",
                width: "40px",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                borderRadius: "0px 2px 2px 0px",
              }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <CloseEye /> : <OpenEye />}
            </div>
          </span>
        </div>

        <p style={{ color: "rgb(236, 23, 23)" }}>{errorMsg}</p>
        <button
          onClick={handleOnSignUp}
          className="signup-button"
          type="submit"
        >
          {loading ? (
            <Loader width={"20px"} height={"20px"} strokeWidth={8} />
          ) : (
            "Sign Up"
          )}
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
