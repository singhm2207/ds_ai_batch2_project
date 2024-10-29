import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart: React.FC = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.4)',
        fill: true,  // Ensures the area under the line is filled
        tension: 0.4,  // Adds smooth curves to the line
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,  // Ensures the Y-axis starts at 0
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
