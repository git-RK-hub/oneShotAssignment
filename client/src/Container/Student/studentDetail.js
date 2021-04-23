import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './student.css';

function StudentDetail(props) {
  let [stdDetail, setStdDetail] = useState({
    skills: []
  });

  async function findStudent(id) {
    const response = await axios(`/api/v1/student/${id}`);
    setStdDetail((stdDetail = { ...response.data.data.student }));
  }
  useEffect(() => {
    findStudent(props.stdId);
  }, []);

  return (
    <div className="stdFolder">
      <div className="stdImg">
        <img
          src="https://pic.onlinewebfonts.com/svg/img_150030.png"
          alt="college"
          width="300"
          height="300"
        />
      </div>
      <div className="stdDetails">
        <p>
          Name: <span>{stdDetail.name}</span>{' '}
        </p>
        <p>
          Batch Year : <span>{stdDetail.batchYear}</span>
        </p>
        <p>
          Skills: <span>{stdDetail.skills.join(', ')}</span>
        </p>
      </div>
    </div>
  );
}

export default StudentDetail;
