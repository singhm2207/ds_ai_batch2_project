import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { stackedBarChartURL as apiUrl } from '../../common/constants'; // Ensure your API URL is correctly set

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StackedBarChart: React.FC = () => {
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
          labels: data.labels, // Array of labels for the x-axis
          datasets: data.datasets.map((dataset: any) => ({
            label: dataset.label, // Dataset label
            data: dataset.values, // Data points for the dataset
            backgroundColor: dataset.backgroundColor, // Color for the dataset
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
        stacked: true, // Enable stacking for x-axis
      },
      y: {
        stacked: true, // Enable stacking for y-axis
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
      <h2>Stacked Bar Chart</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default StackedBarChart;
