const chart = require("chart.js");

const config = {
    type: 'scatter',
    data: data,
    options: {
      scales: {
        x: {
            type: 'linear',
            position: 'center'
        },
        y: {
            type: 'linear',
            position: 'center'
        }
      }
    }
  };

  const data = {
    datasets: [{
      label: 'Scatter Dataset',
      data: [{
        x: -10,
        y: 0
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
      }, {
        x: 0.5,
        y: 5.5
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
  };