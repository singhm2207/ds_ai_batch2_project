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

const StackedBarChart: React.FC = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.6)', // Color for Dataset 1
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27],
        backgroundColor: 'rgba(255,99,132,0.6)', // Color for Dataset 2
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true, // Enable stacking for x-axis
      },
      y: {
        stacked: true, // Enable stacking for y-axis
        beginAtZero: true, // Ensure y-axis starts at 0
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Stacked Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;
