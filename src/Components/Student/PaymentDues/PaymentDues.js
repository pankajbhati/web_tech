import React, { useState, useEffect } from "react";
import "./PaymentDues.css";
import { Sidebar } from "../../Navbar/Sidebar";
import { BaseUrl } from "../../constants";
import poster from "../../../images/poster.jpg";

const PaymentDues = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    fetch(BaseUrl + "/payment", {
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
                    Tution Fees :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="114500"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    Service Fee :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="35000"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    Extra-Curicular Fee :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="5500"
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
                    Student Fee :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="20000"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    Examination fees:
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="15000"
                  />
                </div>
                <div className="form-group row">
                  <label className="col-sm-5 col-form-label">
                    Fee Receipt :
                  </label>

                  <input
                    disabled
                    type="text"
                    className="form-control col-sm-7"
                    id="inputEmail3"
                    value="2K17CO1660002"
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

export { PaymentDues };
