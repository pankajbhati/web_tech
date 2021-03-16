import React, { useEffect, useState } from "react";
import "./CourseScreen.css";
import MaterialTable from "material-table";
import Reading from "../../../images/reading.svg";
import { BaseUrl } from "../../constants";

const CourseScreen = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    fetch(BaseUrl + "/courses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "TOKEN " + localStorage.getItem("token"),
      },
      body: {},
    })
      .then((res) => res.json())
      .then(async (response) => {
        if (response.status === 200) {
          try {
            const courses = await response.data;
            console.log(courses);
            setData(courses);
          } catch (err) {
            console.log("courses error " + err);
          }
        }
      })
      .catch((err) => {
        console.log("courses error " + err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Data = [
    {
      name: "Web Technology",
      rollNo: "CO 301",
      branch: "Computer Engineering",
      // dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Distributed Networks",
      rollNo: "CO 302",
      branch: "Computer Engineering",
      // dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Cryptography",
      rollNo: "CO 303",
      branch: "Computer Engineering",
      // dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Algorithm And DataStructures",
      rollNo: "CO 304",
      branch: "Computer Engineering",
      // dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Microwave Engineering",
      rollNo: "EC 403",
      branch: "Electronics Engineering",
      // dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Optical COmmunication",
      rollNo: "EC 407",
      branch: "Electronics Engineering",
      dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Digital Electronics",
      rollNo: "EC 201",
      branch: "Computer Engineering",
      // dob: "01/07/1999",
      currentSem: "Fourth",
    },
    {
      name: "Swarm Analysis",
      rollNo: "CO 305",
      branch: "Computer Engineering",
      // dob: "01/07/1999",
      currentSem: "Seventh",
    },
    {
      name: "Computer Vision",
      rollNo: "CO 207",
      branch: "Computer Engineering",
      // dob: "01/07/1999",
      currentSem: "Fourth",
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
    // {
    //   title: "Date of Birth",
    //   field: "dob",
    // },
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
        window.location = "/list";
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
          title="Course Screen Table"
          data={Data}
          columns={Columns}
          options={{ search: false, paging: false }}
          onRowClick={(index, rowData) => {
            console.log("Row pressed on number " + rowData.name);
            window.location = "/list";
          }}
          // actions={Actions}
        />
      </div>
    </div>
  );
};

export { CourseScreen };
