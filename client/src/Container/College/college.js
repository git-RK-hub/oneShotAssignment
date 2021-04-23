import React from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Section from "../Section/section";
import "./college.css";

function College(props) {
  const id = props.location.pathname.split("/")[1];
  const content = `You're Welcome here`;
  return (
    <React.Fragment>
      <Header content={[content]} />
      <Section name="College Detail" collegeId={id} />
      <Section name="Students List" collegeId={id} />
      <Section name="Similar Colleges" collegeId={id} />
      <Footer />
    </React.Fragment>
  );
}

export default College;
