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
import { WaveFunctionPulseIVwaveform } from "./WaveFunctionPulseIVwaveform";

WaveFunctionPulseIVwaveform;

type PulseIVwaveformProps = {
  pulseIVwaveformValue: {
    positivePulseValue: number;
    negativePulseValue: number;
    pulseDuration: number;
    distanceBetweenPulse: number;
    stepsPerSegment: number;
    cycles: number;
  };
};

export function PulseIVwaveform({
  pulseIVwaveformValue,
}: PulseIVwaveformProps) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const waveformData = WaveFunctionPulseIVwaveform(pulseIVwaveformValue);

  let timeValues = waveformData.timeValues;
  let continuousWaveform = waveformData.continuousWaveform;

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

  const data = {
    labels: timeValues || [0],
    datasets: [
      {
        label: "Voltage",
        data: continuousWaveform || [0],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
