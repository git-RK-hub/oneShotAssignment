import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './college.css';

function CollegeDetail(props) {
  let [cllgDetail, setCllgDetail] = useState({ courses: [] });
  async function findCollege(id) {
    const response = await axios(`/api/v1/college/${id}`);
    setCllgDetail((cllgDetail = { ...response.data.data.college }));
  }

  useEffect(() => {
    findCollege(props.cllgId);
  }, []);

  return (
    <div className="cllgFolder">
      <div className="cllgImg">
        <img
          src="https://pic.onlinewebfonts.com/svg/img_355665.png"
          alt="college"
          width="300"
          height="300"
        />
      </div>
      <div className="cllgDetails">
        <p>
          Name: <span>{cllgDetail.name}</span>{' '}
        </p>
        <p>
          Year of foundation : <span>{cllgDetail.yearFounded}</span>
        </p>
        <p>
          No. of students: <span>{cllgDetail.students}</span>
        </p>
        <p>
          No. of students: <span>{cllgDetail.city}</span>
        </p>
        <p>
          No. of students: <span>{cllgDetail.state}</span>
        </p>
        <p>
          Course Provided: <span>{cllgDetail.courses.join(', ')}</span>
        </p>
      </div>
    </div>
  );
}

export default CollegeDetail;
