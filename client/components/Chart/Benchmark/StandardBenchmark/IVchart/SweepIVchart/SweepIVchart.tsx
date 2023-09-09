"use client";

import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const series: any = [
  {
    name: "Basketball",
    id: "basketball",
    marker: {
      symbol: "circle",
    },
  },
  {
    name: "Triathlon",
    id: "triathlon",
    marker: {
      symbol: "triangle",
    },
  },
  {
    name: "Volleyball",
    id: "volleyball",
    marker: {
      symbol: "square",
    },
  },
];

async function getData() {
  const response = await fetch(
    "https://cdn.jsdelivr.net/gh/highcharts/highcharts@24912efc85/samples/data/olympic2012.json"
  );
  return response.json();
}

getData().then((data) => {
  const getDataChart = (sportName: any) => {
    const temp: any = [];
    data.forEach((elm: any) => {
      if (elm.sport === sportName && elm.weight > 0 && elm.height > 0) {
        temp.push([elm.height, elm.weight]);
      }
    });
    return temp;
  };
  series.forEach((s: any) => {
    s.data = getDataChart(s.id);
  });
});

const options = {
  chart: {
    type: "scatter",
    zoomType: "xy",
    backgroundColor: "white",
  },
  boost: {
    useGPUTranslations: true,
    usePreAllocated: true,
  },
  title: {
    text: "SweepIVchart",
    align: "left",
  },
  subtitle: {
    text: 'Source: <a href="https://www.theguardian.com/sport/datablog/2012/aug/07/olympics-2012-athletes-age-weight-height">The Guardian</a>',
    align: "left",
  },
  credits: {
    enabled: true,
  },
  xAxis: {
    title: {
      text: "Height",
    },
    labels: {
      format: "{value} m",
    },
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true,
  },
  yAxis: {
    title: {
      text: "Weight",
    },
    labels: {
      format: "{value} kg",
    },
  },
  colors: ["rgba(5,141,199,0.5)", "rgba(80,180,50,0.5)", "rgba(237,86,27,0.5)"],
  legend: {
    enabled: true,
  },
  plotOptions: {
    scatter: {
      marker: {
        radius: 2.5,
        symbol: "circle",
        states: {
          hover: {
            enabled: true,
            lineColor: "rgb(100,100,100)",
          },
        },
      },
      states: {
        hover: {
          marker: {
            enabled: false,
          },
        },
      },
      jitter: {
        x: 0.005,
      },
    },
  },
  tooltip: {
    pointFormat: "Height: {point.x} m <br/> Weight: {point.y} kg",
  },
  series,
};

export const SweepIVchart = () => {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{ style: { width: "100%", height: "100%" } }}
    />
  );
};
