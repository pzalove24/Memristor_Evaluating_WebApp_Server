import React, { useState } from "react";
import { MockIVchart } from "./MockIVchart";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


const IVchart = ({chartData}) => {
  const [userData, setUserData] = useState({
    labels: MockIVchart.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: MockIVchart.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return <div><Line data={chartData} /></div>;
};

export default IVchart;
