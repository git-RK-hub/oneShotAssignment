import React from "react";
import { Link } from "react-router-dom";
import "./list.css";

function List(props) {
  const cllgTable = (
    <div className="tableRow" key={props.id}>
      <div className="tableCell" data-title="Name">
        {props.name}
      </div>
      <div className="tableCell" data-title="Foundation">
        {props.year}
      </div>
      <div className="tableCell" data-title="City">
        {props.city}
      </div>
    </div>
  );
  const stdTable = (
    <div className="tableRow hoverRow">
      <div className="tableCell" data-title="Name">
        {props.name}
      </div>
      <div className="tableCell" data-title="Foundation">
        {props.year}
      </div>
      <div className="tableCell" data-title="City">
        {props.city}
      </div>
    </div>
  );
  if (props.type === "college") {
    return (
      <Link to={`/${props.id}`} key={props.id}>
        {cllgTable}
      </Link>
    );
  } else if (props.type === "student") {
    return (
      <Link
        to={{
          pathname: `student/${props.id}`,
          state: { name: props.name },
        }}
        key={props.id}
      >
        {stdTable}
      </Link>
    );
  } else {
    return <div>Nothing here :/</div>;
  }
}

export default List;
