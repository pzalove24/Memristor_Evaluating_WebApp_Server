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
      text: "PulseIVwaveform",
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

const timeValues = Array.from({ length: 2000 }, (_, index) => index); // Time values from 0 to 99

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
const negativePulseValue: number = -3;
const pulseDuration: number = 50; // Duration of each pulse
const distanceBetweenPulse: number = 50; // Distance between pulses
const stepsPerSegment: number = 10; // cycle of intermediate pulse
const cycles: number = 1; // Number of times to repeat the waveform
const pulseLength: number =
  4 * stepsPerSegment * (pulseDuration + distanceBetweenPulse);

// Generate the positive and negative pulse segments

function generateIntermediatePositivePulseSegmentConsecutive(
  stepsPerSegment: number,
  positivePulseValue: number,
  negativePulseValue: number
) {
  const singlePulseSegment = [];
  const positiveSegment: number[] = [];
  const negativeSegment: number[] = [];

  for (let j = 1; j <= stepsPerSegment; j++) {
    const positiveValue = j * (positivePulseValue / stepsPerSegment);
    const negativeValue = j * (negativePulseValue / stepsPerSegment);
    positiveSegment.push(Number(positiveValue.toFixed(2))); // Round to two decimal places
    negativeSegment.push(Number(negativeValue.toFixed(2))); // Round to two decimal places
  }

  for (let i = 0; i <= 4 * stepsPerSegment; i++) {
    const segment = {
      value: 0,
      start: i * (pulseDuration + distanceBetweenPulse),
      end: i * (pulseDuration + distanceBetweenPulse) + pulseDuration - 1,
    };
    singlePulseSegment.push(segment);
  }

  const pulseVoltage = [
    ...positiveSegment,
    ...positiveSegment.reverse(),
    ...negativeSegment,
    ...negativeSegment.reverse(),
  ];

  const consecutivePulseSegment = singlePulseSegment.map((item, index) => {
    return { ...item, value: pulseVoltage[index] };
  });

  const waveform = [...consecutivePulseSegment];
  return waveform;
}
const intermediatePositivePulseSegmentConsecutive =
  generateIntermediatePositivePulseSegmentConsecutive(
    stepsPerSegment,
    positivePulseValue,
    negativePulseValue
  );

// Create an array with the positive and negative pulse segments
const pulseSegments: PulseSegment[] = [
  ...intermediatePositivePulseSegmentConsecutive,
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

export function PulseIVwaveform() {
  return <Line options={options} data={data} />;
}
