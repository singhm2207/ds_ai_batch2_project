import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components for Chart.js
ChartJS.register(RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RadarChart: React.FC = () => {
  const data = {
    labels: ['Running', 'Swimming', 'Eating', 'Cycling', 'Sleeping'],
    datasets: [
      {
        label: 'Person A',
        data: [20, 10, 4, 2, 5],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Fill color for the radar area
        borderColor: 'rgba(75, 192, 192, 1)', // Border color
        borderWidth: 2,
      },
      {
        label: 'Person B',
        data: [10, 30, 15, 25, 20],
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Fill color for the radar area
        borderColor: 'rgba(255, 99, 132, 1)', // Border color
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Radar Chart</h2>
      <Radar data={data} />
    </div>
  );
};

export default RadarChart;
