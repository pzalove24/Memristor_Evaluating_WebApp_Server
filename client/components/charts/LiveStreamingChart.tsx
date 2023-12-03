import ReactECharts from "echarts-for-react";
import React from "react";

interface DataItem {
  name: string;
  value: [string, number];
}

interface LiveStreamingChartProps {
  title: string;
  xTitle: string;
  yTitle: string;
}

function randomData(): DataItem {
  now = new Date(+now + oneDay);
  value = value + Math.random() * 21 - 10;
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"),
      Math.round(value),
    ],
  };
}

let data: DataItem[] = [];
let now = new Date(1997, 9, 3);
let oneDay = 24 * 3600 * 1000;
let value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
  data.push(randomData());
}

const LiveStreamingChart = ({
  title,
  xTitle,
  yTitle,
}: LiveStreamingChartProps) => {
  const opts: any = { renderer: "svg" };
  const style: any = { height: "100%", width: "100%" };
  const eChartsRef = React.useRef(null as any);

  const option = {
    title: {
      text: title,
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params: any) {
        params = params[0];
        var date = new Date(params.name);
        return (
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear() +
          " : " +
          params.value[1]
        );
      },
      axisPointer: {
        animation: false,
      },
    },
    xAxis: {
      name: xTitle,
      type: "time",
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      name: yTitle,
      type: "value",
      boundaryGap: [0, "100%"],
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "Fake Data",
        type: "line",
        showSymbol: false,
        data: data,
      },
    ],
  };

  setInterval(function () {
    for (var i = 0; i < 5; i++) {
      data.shift();
      data.push(randomData());
    }

    if (eChartsRef && eChartsRef.current) {
      eChartsRef.current?.getEchartsInstance().setOption({
        series: [
          {
            data: data,
          },
        ],
      });
    }
  }, 1000);

  return <ReactECharts option={option} opts={opts} style={style} ref={eChartsRef} />;
};

export default LiveStreamingChart;
