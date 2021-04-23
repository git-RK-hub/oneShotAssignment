import React from 'react';
import MyChart from '../../Components/MyChart/myChart';
import CollegeList from '../College/collegeList';
import StudentList from '../Student/studentList';
import CollegeDetails from '../College/collegeDetail';
import StudentDetails from '../Student/studentDetail';

import './section.css';
function Section(props) {
  let display = null;
  if (props.name === 'All Colleges') {
    display = <CollegeList fetch="allColleges" />;
  } else if (props.name === 'Similar Colleges') {
    display = <CollegeList fetch="similarColleges" cllgId={props.collegeId} />;
  } else if (props.name === 'Students List') {
    display = <StudentList cllgId={props.collegeId} />;
  } else if (props.name === 'College list') {
    display = <CollegeList fetch={props.searchBy} query={props.query} />;
  } else if (props.name === 'College Detail') {
    display = <CollegeDetails cllgId={props.collegeId} />;
  } else if (props.name === 'Student Detail') {
    display = <StudentDetails stdId={props.stdId} />;
  } else if (props.name === 'Find by course') {
    display = (
      <div className="chartHolder">
        <MyChart type="course" />
      </div>
    );
  } else if (props.name === 'Find by state') {
    display = (
      <div className="chartHolder">
        <MyChart type="state" />
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="sectionHeading">{props.name}</div>
      <section className="section" id={props.id}>
        {display}
      </section>
    </React.Fragment>
  );
}

export default Section;
