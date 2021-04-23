import axios from 'axios';
import React, { useEffect, useState } from 'react';
import List from '../../Components/List/list';
import '../../Components/List/list.css';

function StudentList(props) {
  let [students, setStudents] = useState([]);
  async function findStudent(id) {
    const response = await axios({
      method: 'POST',
      url: `/api/v1/student`,
      data: {
        cllgId: id
      }
    });

    setStudents((students = [...response.data.data.students]));
  }

  useEffect(() => {
    findStudent(props.cllgId);
  }, []);
  const lists = students.map((el) => {
    return (
      <List
        type="student"
        key={el._id}
        id={el._id}
        name={el.name}
        year={el.batchYear}
        city="Unknown"
      />
    );
  });
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="table">
          <div className="tableHeader">
            <div className="tableCell">#Name</div>
            <div className="tableCell">#Batch</div>
            <div className="tableCell">#City</div>
          </div>
          {lists}
        </div>
      </div>
    </React.Fragment>
  );
}

export default StudentList;
