import React, { useState, useEffect } from "react";
import "./profile.css";
import { Sidebar } from "../../Navbar/Sidebar";
import { BaseUrl } from "../../constants";

const ProfileScreen = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    fetch("http://127.0.0.1:8000/students/profile", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        user_id: localStorage.getItem("userId"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          try {
            console.log(res);
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
              <h2>Kushagra Yadav</h2>
              <h6>COE</h6>
              <h6>kushagra123@gmail.com</h6>
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
                    value="Kushagra"
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
                    value="Kulveer Singh"
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
                    value="15-05-1998"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">Gender :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Male"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">Address :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="akjdsbchdbdc"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">District :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="bareilly"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">State :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="U.P"
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
                    value="Yadav"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    Family's Income :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="0"
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
                    value="Indian"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">Category :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="OBC"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">City :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Bairelly"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">Country :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="India"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    Phone Number :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="9634018669"
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
