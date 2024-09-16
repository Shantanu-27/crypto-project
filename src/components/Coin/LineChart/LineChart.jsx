import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import { Chart as ChartJS } from 'chart.js'

function LineChart({chartData}) {
    const options={
        responsive:true,
    };
  return (
    <Line data={chartData} options={options} />
  )
}

export default LineChart;
