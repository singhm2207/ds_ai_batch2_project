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

const AreaChart: React.FC = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [33, 53, 85, 41, 44, 65],
        backgroundColor: 'rgba(75,192,192,0.5)',  // Area color with transparency
        borderColor: 'rgba(75,192,192,1)',
        fill: true,  // Ensures the area under the line is filled
        tension: 0.4,  // Adds smooth curves
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Area Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default AreaChart;
