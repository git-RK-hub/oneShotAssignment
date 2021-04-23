import React from "react";
import { withRouter, useLocation } from "react-router-dom";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import Section from "../Section/section";

function College(props) {
  let location = useLocation();
  const studentId = location.pathname.split("/")[2];
  const content = `Welcome ${location.state.name}`;
  return (
    <React.Fragment>
      <Header content={[content]} />
      <Section name="Student Detail" stdId={studentId} />
      <Footer />
    </React.Fragment>
  );
}

export default withRouter(College);
