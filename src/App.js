import React, { useState } from "react";
import "./App.css";
// import AuthScreen from "./Components/Login/AuthScreen";
import {
  SignupScreen,
  ProfileScreen,
  Sidebar,
  LoginScreen,
  Academics,
  PaymentDues,
  AuthScreen,
  HomeScreen,
  CourseScreen,
  ListScreen,
} from "./Components/index";
import Admin from "./Components/Admin";
import Auth from "./Components/Login";
import Student from "./Components/Student";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <ProfileScreen /> */}
      <Switch>
        <Route path="/" exact component={AuthScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/signup" component={SignupScreen} />
        <Route path="/courses" component={CourseScreen} />
        <Route path="/list" component={ListScreen} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/academics" component={Academics} />
        <Route path="/payment" component={PaymentDues} />
      </Switch>
      {/* <BrowserRouter>
        <Switch>
          <Route path="/admin" exact component={Auth} />
          {localStorage.getItem("token") !== null ? (
            <Route path="/admin" component={Admin} />
          ) : (
            <Redirect to="/auth/login" />
          )}
          <Route path="/admin" component={Admin} />
          <Route path="/student" component={Student} />
        </Switch>
      </BrowserRouter> */}
      {/* <div className="wrapper">
        <div className="content-wrapper">
          <div className="main-content">
            <Sidebar />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
