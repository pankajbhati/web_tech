import React, { useState } from "react";
import loginImg from "../../images/login-img.jpg";
import Mobile_login from "../../images/mobile_login.svg";
import Avatar from "../../images/avatar.svg";
import { BaseUrl } from "../constants";
import { Link } from "react-router-dom";
import "./login.css";

const SignupScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    fetch(BaseUrl + "/signup", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then(async (response) => {
        if (response.status === 200) {
          try {
            window.location = "/login";
          } catch (err) {
            console.log("signup error " + err);
          }
        }
      })
      .catch((err) => {
        console.log("signup error " + err);
      });

    // console.log(data);
  };

  return (
    <div className="base-container">
      <div className="container">
        <div className="image">
          <img src={Mobile_login} />
        </div>
        <div className="login-container">
          <div className="avatar">
            <img src={Avatar} />
          </div>
          <text>User SignUp</text>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(u) => setUsername(u.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="email-signup">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(p) => setPassword(p.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={() => {
              // handleSubmit();
              window.location = "/home";
            }}
          >
            Register
          </button>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <text className="login-text">Already Have an Account, Log In</text>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { SignupScreen };
