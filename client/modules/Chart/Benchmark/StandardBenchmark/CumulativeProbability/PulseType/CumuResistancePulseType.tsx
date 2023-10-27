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

export function CumuResistancePulseType() {
  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 1,
        hoverRadius: 2,
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Pulse Cumulative probability of LRS HRS",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Resistance (Ohm)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Cumulative probability of resistance (%)",
        },
        beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "(Ohm, %)",
        data: Array.from({ length: 10 }, () => ({
          x: faker.number.float({ min: -10, max: 10 }),
          y: faker.number.float({ min: -10, max: 10 }),
        })),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  return <Scatter options={options} data={data} />;
}
