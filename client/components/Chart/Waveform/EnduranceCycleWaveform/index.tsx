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
import { WaveFunctionEnduranceCycleWaveform } from "./WaveFunctionEnduranceCycleWaveform";

type EnduranceCycleWaveformProps = {
  enduranceCycleWaveformValue: {
    positivePulseValue: number;
    intermediatePulseValue: number;
    negativePulseValue: number;
    positivePulseDuration: number;
    intermediatePulseDuration: number;
    negativePulseDuration: number;
    distanceBetweenPulse: number;
    cycles: number;
  };
};

export function EnduranceCycleWaveform({
  enduranceCycleWaveformValue,
}: EnduranceCycleWaveformProps) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const waveformData = WaveFunctionEnduranceCycleWaveform(
    enduranceCycleWaveformValue
  );

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
        text: "EnduranceCycleWaveform",
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
