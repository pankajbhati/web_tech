import React from "react";
import Student from "../../images/student.jpg";
import "./login.css";
import { Link } from "react-router-dom";

const AuthScreen = () => {
  return (
    <div className="base-container">
      <div className="container">
        <div className="image">
          <img src={Student} />
        </div>
        <div className="login-container">
          <text className="auth-text">Choose your mode of login</text>
          <div className="auth-button">
            <Link to={{ pathname: "/login", state: { admin: true } }}>
              <button className="auth-btn">I'm an Admin</button>
            </Link>
            <Link to={{ pathname: "/login", state: { admin: false } }}>
              <button className="auth-btn">I'm a Student</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AuthScreen };
