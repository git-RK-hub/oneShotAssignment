import React from "react";

import Header from "../Components/Header/header";
import Section from "../Container/Section/section";
import Footer from "../Components/Footer/footer";

function Home() {
  return (
    <React.Fragment>
      <Header
        content={[
          "Find your favourite college here,",
          "with your favourite courses",
        ]}
        options
      />
      <Section id="byCourse" name="Find by course" />
      <Section id="byState" name="Find by state" />
      <Section id="colleges" name="All Colleges" />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
