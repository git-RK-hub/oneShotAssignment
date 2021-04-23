import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Section from "../Section/section";
import querystring from "query-string";
import "./college.css";

function CollegeFind(props) {
  const queryObj = querystring.parse(props.location.search);
  const queryArray = [];
  for (let key in queryObj) {
    if (key === "state") queryArray.unshift(key);
    else if (key === "course") queryArray.unshift(key);
  }
  let x = "";
  let type = `by-${queryArray[0]}`;
  let value = "";
  if (queryArray[0] === "state") {
    x = `Find colleges in ${queryObj.state}`;
    value = queryObj.state;
  } else if (queryArray[0] === "course") {
    x = `Find college for ${queryObj.course}`;
    value = queryObj.state;
  }

  return (
    <React.Fragment>
      <Header content={[x]} />
      <Section name="College list" searchBy={type} query={value} />
      <Footer />
    </React.Fragment>
  );
}

export default CollegeFind;
