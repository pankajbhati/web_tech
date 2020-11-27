import React, { useState, useEffect } from "react";
import "./PaymentDues.css";
import { Sidebar } from "../../Navbar/Sidebar";

const PaymentDues = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    fetch(BaseUrl + "/payment", {
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 40,
            }}
          >
            Payment And Dues Screen
          </div>
        </div>
      </div>
    </div>
  );
};

export { PaymentDues };
