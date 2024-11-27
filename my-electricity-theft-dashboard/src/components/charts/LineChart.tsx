import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
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
import { linerChartURL as apiUrl } from '../../common/constants'; // Ensure your API URL is correctly set

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart: React.FC = () => {
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
            borderColor: dataset.borderColor, // Line color
            backgroundColor: dataset.backgroundColor, // Fill color
            fill: dataset.fill, // Whether to fill the area under the line
            tension: dataset.tension, // Curve smoothness
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
      y: {
        beginAtZero: true, // Ensures the Y-axis starts at 0
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
      <h2>Line Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
