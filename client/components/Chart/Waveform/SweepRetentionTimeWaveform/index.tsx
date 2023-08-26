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
      text: "SweepRetentionTimeWaveform",
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

const positivePulseValue: number = 3;
const intermediatePulseValue: number = 2;
const negativePulseValue: number = -3;
const positivePulseDuration: number = 10; // Duration of each pulse
const intermediatePulseDuration: number = 300; // Duration of each pulse
const negativePulseDuration: number = 10; // Duration of each pulse
const distanceBetweenPulse: number = 20; // Distance between pulses
const cycles: number = 1; // Number of times to repeat the waveform
const pulseLength: number =
  positivePulseDuration +
  distanceBetweenPulse +
  intermediatePulseDuration +
  distanceBetweenPulse +
  negativePulseDuration +
  distanceBetweenPulse +
  intermediatePulseDuration +
  distanceBetweenPulse;

// Generate the positive and negative pulse segments
const positivePulseSegment: PulseSegment = {
  value: positivePulseValue,
  start: 0,
  end: positivePulseDuration - 1,
};

const intermediatePulseSegment1: PulseSegment = {
  value: intermediatePulseValue,
  start: positivePulseDuration + distanceBetweenPulse,
  end:
    positivePulseDuration +
    distanceBetweenPulse +
    intermediatePulseDuration -
    1,
};

const negativePulseSegment: PulseSegment = {
  value: negativePulseValue,
  start:
    positivePulseDuration +
    distanceBetweenPulse +
    intermediatePulseDuration +
    distanceBetweenPulse,
  end:
    positivePulseDuration +
    distanceBetweenPulse +
    intermediatePulseDuration +
    distanceBetweenPulse +
    negativePulseDuration -
    1,
};

const intermediatePulseSegment2: PulseSegment = {
  value: intermediatePulseValue,
  start:
    positivePulseDuration +
    distanceBetweenPulse +
    intermediatePulseDuration +
    distanceBetweenPulse +
    negativePulseDuration +
    distanceBetweenPulse,
  end:
    positivePulseDuration +
    distanceBetweenPulse +
    intermediatePulseDuration +
    distanceBetweenPulse +
    negativePulseDuration +
    distanceBetweenPulse +
    intermediatePulseDuration -
    1,
};

const betweenCyclePulseSegment: PulseSegment = {
  value: intermediatePulseValue,
  start:
    positivePulseDuration +
    distanceBetweenPulse +
    intermediatePulseDuration +
    distanceBetweenPulse +
    negativePulseDuration +
    distanceBetweenPulse +
    intermediatePulseDuration +
    distanceBetweenPulse,
  end:
    positivePulseDuration +
    distanceBetweenPulse +
    intermediatePulseDuration +
    distanceBetweenPulse +
    negativePulseDuration +
    distanceBetweenPulse +
    intermediatePulseDuration +
    distanceBetweenPulse -
    1,
};

// Create an array with the positive and negative pulse segments
const pulseSegments: PulseSegment[] = [
  positivePulseSegment,
  intermediatePulseSegment1,
  negativePulseSegment,
  intermediatePulseSegment2,
  betweenCyclePulseSegment,
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

const timeValues = Array.from({ length: pulseLength }, (_, index) => index);

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

export function SweepRetentionTimeWaveform() {
  return <Line options={options} data={data} />;
}
