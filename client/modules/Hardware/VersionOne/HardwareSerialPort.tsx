"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export default function HardwareSerialPort() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 1,
        hoverRadius: 1,
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "SerialPort Visualization",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (ms)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Data (point)",
        },
      },
    },
  };

  const data = {
    labels: [0],
    datasets: [
      {
        label: "T, V",
        data: [0],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
