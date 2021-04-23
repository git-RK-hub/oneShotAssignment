import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import './myChart.css';

function MyChart(props) {
  const bgColor = [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)',
    'rgb(76, 175, 80)',
    'rgb(255, 87, 34)',
    'rgb(152 34 255)',
    'rgb(34 255 166)'
  ];
  let [labels, setLabels] = useState([]);
  let [data, setData] = useState([]);
  async function fecthCollegeStats() {
    const response = await axios('/api/v1/college/collegeStats');
    const resultObj = response.data.data.collegeStats;
    const statsArray = [];
    const statsValue = [];
    for (let key in resultObj) {
      statsArray.push(resultObj[key]._id);
      statsValue.push(resultObj[key].numOfCllgs);
    }
    setLabels((labels = [...statsArray]));
    setData((data = [...statsValue]));
  }

  async function fecthCollegeCoursesStats() {
    const response = await axios('/api/v1/college/collegeCoursesStats');
    const resultObj = response.data.data.coursesStats;
    const statsArray = [];
    const statsValue = [];
    for (let key in resultObj) {
      statsArray.push(resultObj[key].courses);
      statsValue.push(resultObj[key].numOfCllgs);
    }
    setLabels((labels = [...statsArray]));
    setData((data = [...statsValue]));
  }

  useEffect(() => {
    if (props.type === 'state') {
      fecthCollegeStats();
    } else if (props.type === 'course') {
      fecthCollegeCoursesStats();
    }
  }, []);

  const labelsDiv = labels.map((el, index) => {
    const path = `/search?${props.type}=${el}`;
    return (
      <Link to={path} key={el}>
        <div key={el} className="chartElements">
          <div
            className="colorBlock"
            style={{
              backgroundColor: bgColor[index]
            }}
          ></div>
          {el}
        </div>
      </Link>
    );
  });
  return (
    <React.Fragment>
      <div className="chart-container">
        <Doughnut
          className="doughnut"
          data={{
            datasets: [
              {
                label: 'My First Dataset',
                data: data,
                backgroundColor: bgColor,
                hoverOffset: 4
              }
            ],
            options: {
              onClick: (evt, item) => {},
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  display: false
                }
              }
            }
          }}
        />
      </div>
      <div className="chartDetail">{labelsDiv}</div>
    </React.Fragment>
  );
}

export default MyChart;
