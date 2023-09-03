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
import { WaveFunctionSweepIVwaveform } from "./WaveFunctionSweepIVwaveform";

type SweepIVwaveformProps = {
  sweepIVwaveformValue: {
    positivePulseValue: number;
    negativePulseValue: number;
    pulseDuration: number;
    stepsPerSegment: number;
    cycles: number;
  };
};

export function SweepIVwaveform({
  sweepIVwaveformValue,
}: SweepIVwaveformProps) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const waveformData = WaveFunctionSweepIVwaveform(sweepIVwaveformValue);

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
        text: "SweepIVwaveform",
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
