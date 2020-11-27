import React from "react";
import Reading from "../../../images/reading.svg";
import { Link } from "react-router-dom";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="base-container">
      <img className="homescreen-img" src={Reading} />
      <div className="homescreen-container">
        <div className="left-container">
          <text>B.Tech</text>
          <div className="year-menu">
            <Link
              to={{
                pathname: "/courses",
                state: { degree: "btech", year: "first" },
              }}
            >
              <button className="homescreen-button">First Year</button>
            </Link>
            <Link
              to={{
                pathname: "/courses",
                state: { degree: "btech", year: "second" },
              }}
            >
              <button className="homescreen-button">Second Year</button>
            </Link>
          </div>
          <div className="year-menu">
            <Link
              to={{
                pathname: "/courses",
                state: { degree: "btech", year: "third" },
              }}
            >
              <button className="homescreen-button">Third Year</button>
            </Link>
            <Link
              to={{
                pathname: "/courses",
                state: { degree: "btech", year: "fourth" },
              }}
            >
              <button className="homescreen-button">Fourth Year</button>
            </Link>
          </div>
        </div>
        <div className="right-container">
          <text>M.Tech</text>
          <div className="year-menu">
            <Link
              to={{
                pathname: "/courses",
                state: { degree: "mtech", year: "first" },
              }}
            >
              <button className="homescreen-button">First Year</button>
            </Link>
            <Link
              to={{
                pathname: "/courses",
                state: { degree: "mtech", year: "second" },
              }}
            >
              <button className="homescreen-button">Second Year</button>
            </Link>
          </div>
          {/* <div className="year-menu">
            <button>First Year</button>
            <button>First Year</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export { HomeScreen };
