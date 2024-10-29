import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const ScatterChart: React.FC = () => {
  const data = {
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          { x: -10, y: 0 },
          { x: 0, y: 10 },
          { x: 10, y: 5 },
          { x: 5, y: 15 },
          { x: 0, y: 5 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        pointRadius: 5,
      },
      {
        label: 'Dataset 2',
        data: [
          { x: -5, y: 5 },
          { x: 5, y: -5 },
          { x: 15, y: 10 },
          { x: 10, y: -10 },
          { x: 0, y: -5 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true, // Ensure x-axis starts at 0
      },
      y: {
        beginAtZero: true, // Ensure y-axis starts at 0
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Scatter Chart</h2>
      <Scatter data={data} options={options} />
    </div>
  );
};

export default ScatterChart;
