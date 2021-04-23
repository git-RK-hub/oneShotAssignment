import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Container/Home";
import College from "./Container/College/college";
import CollegeFind from "./Container/College/collegeFind";
import Student from "./Container/Student/student";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/student/:id" component={Student} exact />
        <Route path="/search" component={CollegeFind} exact />
        <Route path="/:id" component={College} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </React.Fragment>
  );
}

export default App;
