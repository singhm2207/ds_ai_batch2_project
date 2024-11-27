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
  Filler, // Import Filler for area fill
} from 'chart.js';
import { apiUrl } from '../../common/constants';

// Register required components for Chart.js, including Filler for area charts
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const AreaChart: React.FC = () => {
  const [chartData, setChartData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get(`${apiUrl}`) // Ensure the correct endpoint is being hit
      .then((response) => {
        const { data } = response;
        // Transform API response into the required chart.js format
        const formattedData = {
          labels: data.labels, // Array of labels
          datasets: data.datasets.map((dataset: any) => ({
            label: dataset.label, // Dataset label
            data: dataset.data, // Array of data points
            backgroundColor: dataset.backgroundColor, // Area fill color
            borderColor: dataset.borderColor || dataset.backgroundColor, // Line color
            fill: dataset.fill !== undefined ? dataset.fill : true, // Ensure the area is filled
            tension: dataset.tension || 0.4, // Smooth curves
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
      <h2>Area Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default AreaChart;
