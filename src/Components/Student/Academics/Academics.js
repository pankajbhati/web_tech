import React, { useState, useEffect } from "react";
import "./academics.css";
import poster from "../../../images/poster.jpg";
import { BaseUrl } from "../../constants";
import { Sidebar } from "../../Navbar/Sidebar";

const Academics = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    fetch(BaseUrl + "/academics", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
        Authorization: "TOKEN " + localStorage.getItem("token"),
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
          <div className="academics">
            <div className="academics-header">
              <img src={poster} />
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
                    College Id :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="12345"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">Roll No :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="12345"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    Current Semester :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="Seventh"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    12th Percentage :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="96%"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    JEE Mains Rank :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="8341"
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
                    Admission No :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="12345"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    Graduation Year:
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="2021"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">Branch :</label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="COE"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    10th Percentage :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="10.0"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    JEE Advanced Rank :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="8341"
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

export { Academics };
