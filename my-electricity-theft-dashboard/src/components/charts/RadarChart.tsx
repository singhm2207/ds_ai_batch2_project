import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { radarChartURL as apiUrl } from '../../common/constants'; // Ensure your API URL is correctly set

// Register required components for Chart.js
ChartJS.register(RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RadarChart: React.FC = () => {
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
            label: dataset.label, // Dataset label
            data: dataset.values, // Data points for the radar chart
            backgroundColor: dataset.backgroundColor, // Fill color for the radar area
            borderColor: dataset.borderColor, // Border color
            borderWidth: dataset.borderWidth, // Border width
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
      <h2>Radar Chart</h2>
      <Radar data={chartData} />
    </div>
  );
};

export default RadarChart;
