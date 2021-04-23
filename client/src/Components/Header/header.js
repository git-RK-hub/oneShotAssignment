import React from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";

import "./header.css";
function Header(props) {
  return (
    <section className="header" id="header">
      {props.options ? (
        <div className="header-nav">
          <a href="#byState">By State</a>
          <a href="#byCourse">By Course</a>
          <a href="#colleges">Colleges</a>
        </div>
      ) : (
        <div className="header-nav">
          <Link to="/">Home</Link>
        </div>
      )}
      <div className="header-info">
        <span className="custom-class blackHead">Hi there ; )</span>
        <Typist
          cursor={{
            show: false,
          }}
          className="custom-class whiteHead"
        >
          <span>
            {props.content[0]}
            <br /> {props.content[1] !== undefined ? props.content[1] : ""}
          </span>
        </Typist>
      </div>
    </section>
  );
}

export default Header;
