"use client";

import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

export const MultiCurrentLevelPulseIVchart = () => {
  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 1,
        hoverRadius: 1,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (us)",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Voltage (V)",
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Multi-Level Compliance Current Pulse IV chart",
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "IV",
        data: Array.from({ length: 100 }, () => ({
          x: [0],
          y: [0],
        })),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  return <Scatter options={options} data={data} />;
};
