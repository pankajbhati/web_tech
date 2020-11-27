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
      name: "Pankaj",
      rollNo: "2K17/CO/216",
      branch: "Computer Engineering",
      dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Bhati",
      rollNo: "2K17/CO/216",
      branch: "Computer Engineering",
      dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Tushaar",
      rollNo: "2K17/CO/216",
      branch: "Computer Engineering",
      dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Charvi",
      rollNo: "2K17/CO/216",
      branch: "Computer Engineering",
      dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Charvi",
      rollNo: "2K17/CO/216",
      branch: "Computer Engineering",
      dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Charvi",
      rollNo: "2K17/CO/216",
      branch: "Computer Engineering",
      dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Charvi",
      rollNo: "2K17/CO/216",
      branch: "Computer Engineering",
      dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Prince",
      rollNo: "2K17/CO/216",
      branch: "Computer Engineering",
      dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Prince",
      rollNo: "2K17/CO/216",
      branch: "Computer Engineering",
      dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Prince",
      rollNo: "2K17/CO/216",
      branch: "Computer Engineering",
      dob: "01/07/1999",
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
          title="List Screen Table"
          data={Data}
          columns={Columns}
          options={{ search: false, paging: false }}
          onRowClick={(index, rowData) => {
            console.log("Row pressed on number " + rowData.name);
          }}
          actions={Actions}
        />
      </div>
    </div>
  );
};

export { ListScreen };
