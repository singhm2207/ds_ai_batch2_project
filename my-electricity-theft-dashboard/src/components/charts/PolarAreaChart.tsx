import React, { useEffect, useState } from 'react';
import { PolarArea } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { polarAreaChartURL as apiUrl } from '../../common/constants'; // Ensure your API URL is correctly set

// Register required components for Chart.js
ChartJS.register(ArcElement, Title, Tooltip, Legend);

const PolarAreaChart: React.FC = () => {
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
          labels: data.labels, // Array of labels
          datasets: data.datasets.map((dataset: any) => ({
            data: dataset.values, // Data points for the chart
            backgroundColor: dataset.backgroundColor, // Colors for each segment
            hoverBackgroundColor: dataset.hoverBackgroundColor, // Hover colors
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

  if (loading) {
    return <div>Loading chart...</div>;
  }

  if (!chartData) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div className="chart-container">
      <h2>Polar Area Chart</h2>
      <PolarArea data={chartData} />
    </div>
  );
};

export default PolarAreaChart;
