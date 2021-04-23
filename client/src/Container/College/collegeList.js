import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "../../Components/List/list";
import "../../Components/List/list.css";

function CollegeList(props) {
  let [colleges, setColleges] = useState([]);

  async function fetchAllCollege() {
    const response = await axios("/api/v1/college");
    setColleges((colleges = [...response.data.data.colleges]));
  }
  async function fetchSimilarCollege(id) {
    const response = await axios(
      `/api/v1/college/${id}/getSimilarColleges`
    );
    setColleges((colleges = [...response.data.data.colleges]));
  }
  async function fetchCollegeByState(value) {
    const response = await axios(
      `/api/v1/college?state=${value}`
    );

    setColleges((colleges = [...response.data.data.colleges]));
  }
  async function fetchCollegeByCourse(value) {
    const response = await axios(
      `/api/v1/college?course=${value}`
    );

    setColleges((colleges = [...response.data.data.colleges]));
  }
  useEffect(() => {
    if (props.fetch === "by-state") {
      fetchCollegeByState(props.query);
    } else if (props.fetch === "allColleges") {
      fetchAllCollege();
    } else if (props.fetch === "similarColleges") {
      fetchSimilarCollege(props.cllgId);
    } else if (props.fetch === "by-course") {
      fetchCollegeByCourse(props.query);
    }
  }, []);

  const lists = colleges.map((el) => {
    return (
      <List
        type="college"
        key={el._id}
        id={el._id}
        name={el.name}
        year={el.yearFounded}
        city={el.city}
      />
    );
  });
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="table">
          <div className="tableHeader">
            <div className="tableCell">#Name</div>
            <div className="tableCell">#Foundation</div>
            <div className="tableCell">#City</div>
          </div>
          {lists}
        </div>
      </div>
    </React.Fragment>
  );
}

export default CollegeList;
