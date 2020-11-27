import React, { useState, useEffect } from "react";
import "./profile.css";
import { Sidebar } from "../../Navbar/Sidebar";
import { BaseUrl } from "../../constants";

const ProfileScreen = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    fetch(BaseUrl + "/profile", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
        userId: localStorage.getItem("userId"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          try {
            setData(res.data);
          } catch (err) {
            console.log("profile screen error " + err);
          }
        }
      })
      .catch((err) => {
        console.log("profile screen error " + err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <div className="main-content">
          <Sidebar />
          <div className="profile">
            <div className="header">
              <h2>Full Name</h2>
              <h6>Computer Engineering</h6>
              <h6>example@gmail.com</h6>
            </div>
            <div className="content">
              <div className="split left">
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    First Name :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Pankaj Bhati"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    Father's Name :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Pankaj Bhati"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    Date of Birth :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Pankaj Bhati"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">Gender :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Pankaj Bhati"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">Address :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Pankaj Bhati"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">District :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Pankaj Bhati"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">State :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Pankaj Bhati"
                  />
                </div>
              </div>
              <div className="split right">
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">Last Name :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Pankaj Bhati"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    Mother's Name :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Pankaj Bhati"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    Nationality :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Pankaj Bhati"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">Category :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Pankaj Bhati"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">City :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Pankaj Bhati"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">Country :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Pankaj Bhati"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    Phone Number 2 :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Pankaj Bhati"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfileScreen };
