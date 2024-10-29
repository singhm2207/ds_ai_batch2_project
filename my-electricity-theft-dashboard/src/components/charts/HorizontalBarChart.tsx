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
  ChartOptions, // Import ChartOptions for typing
} from 'chart.js';

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HorizontalBarChart: React.FC = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.6)', // Color for the bars
      },
    ],
  };

  // Define options with the correct type
  const options: ChartOptions<'bar'> = {
    indexAxis: 'y', // Set the index axis to 'y' for horizontal bars
    scales: {
      x: {
        beginAtZero: true, // Ensure x-axis starts at 0
      },
      y: {
        stacked: false, // Disable stacking for y-axis
      },
    },
  };

  return (
    <div className="chart-container">
      <h2>Horizontal Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
