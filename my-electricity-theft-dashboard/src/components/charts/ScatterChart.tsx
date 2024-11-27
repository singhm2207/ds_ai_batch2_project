import React, { useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { scatterChartURL as apiUrl } from '../../common/constants'; // Ensure your API URL is correctly set

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const ScatterChart: React.FC = () => {
  const [chartData, setChartData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get(`${apiUrl}`) // Append specific endpoint
      .then((response) => {
        const { data } = response;
        // Transform API response into the required chart.js format
        const formattedData = {
          datasets: data.datasets.map((dataset: any) => ({
            label: dataset.label, // Dataset label
            data: dataset.values, // Scatter data points
            backgroundColor: dataset.backgroundColor, // Point background color
            borderColor: dataset.borderColor, // Point border color
            borderWidth: dataset.borderWidth, // Border width
            pointRadius: dataset.pointRadius, // Point radius
          })),
        };
        setChartData(formattedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching chart data:', error);
        setLoading(false);
      });
  }, []);

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

  if (loading) {
    return <div>Loading chart...</div>;
  }

  if (!chartData) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div className="chart-container">
      <h2>Scatter Chart</h2>
      <Scatter data={chartData} options={options} />
    </div>
  );
};

export default ScatterChart;
