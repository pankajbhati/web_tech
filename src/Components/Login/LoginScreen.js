import React, { useState, useEffect } from "react";
import loginImg from "../../images/login-img.jpg";
import Mobile_login from "../../images/mobile_login.svg";
import Avatar from "../../images/avatar.svg";
import { BaseUrl } from "../constants";
import { Link, useLocation } from "react-router-dom";
import "./login.css";

const LoginScreen = () => {
  let location = useLocation();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = async () => {
    const data = {
      username: username,
      password: password,
    };

    fetch(BaseUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: data,
      }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        if (res.status == 200) {
          try {
            await localStorage.setItem("token", res.data.token);
            await localStorage.setItem("userId", res.data.id);
            window.location = "/profile";
          } catch (err) {
            console.log("login error " + err);
          }
        }
      })
      .catch((err) => {
        console.log("login error " + err);
      });

    // console.log("data in login function!!");
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
          {/* {location.state.admin === true ? ( */}
          <text>{location.state.admin}</text>
          {/* ) : ( */}
          <text>Student Login</text>
          {/* )} */}
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(text) => setUsername(text.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(text) => setPassword(text.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={() => {
              window.location = "/home";
            }}
          >
            Login
          </button>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <text className="login-text">Don't have an account, Signup</text>
          </Link>
          <a href="#">Forgot Password</a>
        </div>
      </div>
    </div>
  );
};

export { LoginScreen };
