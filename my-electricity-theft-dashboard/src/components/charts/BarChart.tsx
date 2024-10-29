import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: React.FC = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.6)',  // Bar color
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,  // Ensure the Y-axis starts at 0
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
