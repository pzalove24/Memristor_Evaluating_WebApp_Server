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
import { faker } from "@faker-js/faker";

export const MultiVoltageLevelPulseLogLog = () => {
  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "IV curve",
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "A dataset",
        data: Array.from({ length: 100 }, () => ({
          x: faker.number.float({ min: -100, max: 100 }),
          y: faker.number.float({ min: -100, max: 100 }),
        })),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  return <Scatter options={options} data={data} />;
};
