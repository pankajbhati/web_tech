import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Reading from "../../../images/reading.svg";
import { BaseUrl } from "../../constants";
import "./ListScreen.css";

const ListScreen = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const token = await localStorage.getItem("token");
    fetch(BaseUrl + "/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        token: token,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status === 200) {
          try {
            console.log(response.data);
            setData(response.data);
          } catch (err) {
            console.log("students list error " + err);
          }
        }
      })
      .catch((err) => {
        console.log("student list error " + err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Data = [
    {
      name: "Pankaj Bhati",
      rollNo: "2K17/CO/216",
      branch: "Computer Engineering",
      dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Kushagra Yadav",
      rollNo: "2K17/CO/166",
      branch: "Computer Engineering",
      dob: "15/10/1998",
      currentSem: "Seventh",
    },
    {
      name: "Mrigank Singh",
      rollNo: "2K17/CO/206",
      branch: "Computer Engineering",
      dob: "11/03/1999",
      currentSem: "Seventh",
    },
    {
      name: "Tushaar Salhotra",
      rollNo: "2K17/CO/360",
      branch: "Computer Engineering",
      dob: "11/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Kushagra Aggarwal",
      rollNo: "2K17/CO/165",
      branch: "Computer Engineering",
      dob: "26/05/1999",
      currentSem: "Seventh",
    },
    {
      name: "Saurabh Singh",
      rollNo: "2K17/CO/345",
      branch: "Computer Engineering",
      dob: "06/02/1999",
      currentSem: "Seventh",
    },
    {
      name: "Abhiraj Tulsyan",
      rollNo: "2K17/CO/006",
      branch: "Computer Engineering",
      dob: "10/04/1998",
      currentSem: "Seventh",
    },
    {
      name: "Arjun Rana",
      rollNo: "2K17/EP/12",
      branch: "Engineering Physics",
      dob: "03/10/1999",
      currentSem: "Seventh",
    },
    {
      name: "Prince CHoudhary",
      rollNo: "2K17/EC/67",
      branch: "Electronics Engineering",
      dob: "06/12/1997",
      currentSem: "Seventh",
    },
    {
      name: "Aviral Aggarwal",
      rollNo: "2K17/CO/114",
      branch: "Computer Engineering",
      dob: "12/06/1998",
      currentSem: "Seventh",
    },
    {
      name: "Kumar Abhishek",
      rollNo: "2K17/CO/189",
      branch: "Computer Engineering",
      dob: "21/08/1998",
      currentSem: "Seventh",
    },
  ];

  const Columns = [
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Roll No",
      field: "rollNo",
    },
    {
      title: "Branch",
      field: "branch",
    },
    {
      title: "Date of Birth",
      field: "dob",
    },
    {
      title: "Semester",
      field: "currentSem",
    },
  ];

  const Actions = [
    {
      icon: "delete",
      tooltip: "Delete Index",
      onClick: (index, rowData) => {
        console.log("Delete button pressed " + rowData.name);
      },
    },
  ];

  return (
    <div className="course-base-container">
      <img className="coursescreen-img" src={Reading} />
      <div className="course-container">
        <MaterialTable
          // style={{ width: "100%" }}
          title="Students List"
          data={Data}
          columns={Columns}
          options={{ search: false, paging: false }}
          onRowClick={(index, rowData) => {
            console.log("Row pressed on number " + rowData.name);
            window.location = "/Profile";
          }}
          // actions={Actions}
        />
      </div>
    </div>
  );
};

export { ListScreen };
