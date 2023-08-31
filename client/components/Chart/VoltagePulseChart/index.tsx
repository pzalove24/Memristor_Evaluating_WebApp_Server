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
import { faker } from "@faker-js/faker";

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
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Applied Voltage Pulse",
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
      title: {
        display: true,
        text: "Voltage (V)",
      },
    },
  },
};

const timeValues = Array.from({ length: 500 }, (_, index) => index); // Time values from 0 to 99

interface PulseSegment {
  value: number;
  start: number;
  end: number;
}

function generateMultiPulseVoltageArray(
  length: number,
  pulseSegments: PulseSegment[]
): number[] {
  const voltageArray: number[] = Array.from({ length }, (_, index) => {
    let voltage = 0;
    pulseSegments.forEach((segment) => {
      const { value, start, end } = segment;
      if (index >= start && index <= end) {
        voltage = value;
      }
    });
    return voltage;
  });

  return voltageArray;
}

const pulseLength: number = 100;
const positivePulseValue: number = 10;
const intermediatePulseValue: number = 0;
const negativePulseValue: number = -10;
const positivePulseDuration: number = 20; // Duration of each pulse
const intermediatePulseDuration: number = 30; // Duration of each pulse
const negativePulseDuration: number = 20; // Duration of each pulse
const cycles: number = 5; // Number of times to repeat the waveform

// Generate the positive and negative pulse segments
const positivePulseSegment: PulseSegment = {
  value: positivePulseValue,
  start: 0,
  end: positivePulseDuration - 1,
};

const intermediatePulseSegment: PulseSegment = {
  value: intermediatePulseValue,
  start: positivePulseDuration,
  end: positivePulseDuration + intermediatePulseDuration - 1,
};

const negativePulseSegment: PulseSegment = {
  value: negativePulseValue,
  start: positivePulseDuration + intermediatePulseDuration,
  end:
    positivePulseDuration +
    intermediatePulseDuration +
    negativePulseDuration -
    1,
};

// Create an array with the positive and negative pulse segments
const pulseSegments: PulseSegment[] = [
  positivePulseSegment,
  intermediatePulseSegment,
  negativePulseSegment,
];

// Generate the multi-pulse voltage array with the alternating pulses
const voltageArray: number[] = generateMultiPulseVoltageArray(
  pulseLength,
  pulseSegments
);

// Calculate the number of voltageArray cycles required to achieve the desired number of total cycles
const totalCycles = cycles;
const totalSamples = totalCycles * voltageArray.length;

// Generate the continuous waveform by cycling through voltageArray values
const continuousWaveform: number[] = Array.from(
  { length: totalSamples },
  (_, index) => {
    const voltageArrayIndex = index % voltageArray.length;
    return voltageArray[voltageArrayIndex];
  }
);

const data = {
  labels: timeValues,
  datasets: [
    {
      label: "Voltage",
      data: continuousWaveform,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function VoltagePulseChart() {
  return <Line options={options} data={data} />;
}