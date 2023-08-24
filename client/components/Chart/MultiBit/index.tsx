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

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
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
      text: "Multi-bit evaluation",
    },
  },
};

export const data = {
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

export function MultiBit() {
  return <Scatter options={options} data={data} />;
}
