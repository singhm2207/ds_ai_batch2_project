import React from 'react';
import { Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BubbleController,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components for Chart.js
ChartJS.register(BubbleController, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BubbleChart: React.FC = () => {
  const data = {
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          { x: 10, y: 20, r: 15 }, // Each point has x, y, and radius (r)
          { x: 15, y: 10, r: 10 },
          { x: 5, y: 5, r: 20 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Dataset 2',
        data: [
          { x: 10, y: 10, r: 20 },
          { x: 15, y: 5, r: 15 },
          { x: 20, y: 10, r: 10 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
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
      <h2>Bubble Chart</h2>
      <Bubble data={data} options={options} />
    </div>
  );
};

export default BubbleChart;
