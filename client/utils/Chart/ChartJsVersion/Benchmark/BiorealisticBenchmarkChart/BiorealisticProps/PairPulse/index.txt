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

export function PairPulse() {
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
        text: "Pair Pulse Facilitation",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "interval (ms)",
        },
      },
      y: {
        title: {
          display: true,
          text: "PPF (%)",
        },
        beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "(ms, %)",
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
