const express = require('express');
const cors = require('cors');
const app = express();
const port = 7200;

app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.4)',
      },
      {
        label: 'Expenses',
        data: [28, 48, 40, 19, 86, 27],
        backgroundColor: 'rgba(255,99,132,0.4)',
      },
    ],
  });
});

app.get('/api/bubble-chart-data', (req, res) => {
  res.json({
    labels: ['Point 1', 'Point 2', 'Point 3'], // Optional; not used in Bubble Chart but included for consistency
    datasets: [
      {
        label: 'Dataset 1',
        values: [
          { x: 10, y: 20, r: 15 }, // Bubble coordinates and radius
          { x: 15, y: 10, r: 10 },
          { x: 5, y: 5, r: 20 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Dataset 2',
        values: [
          { x: 10, y: 10, r: 20 },
          { x: 15, y: 5, r: 15 },
          { x: 20, y: 10, r: 10 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  });
});
app.get('/api/doughnut-chart-data', (req, res) => {
  res.json({
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        values: [300, 50, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
      },
    ],
  });
});
app.get('/api/grouped-bar-chart-data', (req, res) => {
  res.json({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Dataset 1',
        values: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
      {
        label: 'Dataset 2',
        values: [28, 48, 40, 19, 86, 27],
        backgroundColor: 'rgba(255,99,132,0.6)',
      },
    ],
  });
});
app.get('/api/horizontal-bar-chart-data', (req, res) => {
  res.json({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        values: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  });
});

app.get('/api/line-chart-data', (req, res) => {
  res.json({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        values: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.4)',
        fill: true,
        tension: 0.4,
      },
    ],
  });
});

app.get('/api/pie-chart-data', (req, res) => {
  res.json({
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        values: [300, 50, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
        ],
      },
    ],
  });
});

app.get('/api/polar-area-chart-data', (req, res) => {
  res.json({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        values: [11, 16, 7, 3, 14, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
        ],
      },
    ],
  });
});

app.get('/api/radar-chart-data', (req, res) => {
  res.json({
    labels: ['Running', 'Swimming', 'Eating', 'Cycling', 'Sleeping'],
    datasets: [
      {
        label: 'Person A',
        values: [20, 10, 4, 2, 5],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
      {
        label: 'Person B',
        values: [10, 30, 15, 25, 20],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
    ],
  });
});

app.get('/api/scatter-chart-data', (req, res) => {
  res.json({
    datasets: [
      {
        label: 'Dataset 1',
        values: [
          { x: -10, y: 0 },
          { x: 0, y: 10 },
          { x: 10, y: 5 },
          { x: 5, y: 15 },
          { x: 0, y: 5 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        pointRadius: 5,
      },
      {
        label: 'Dataset 2',
        values: [
          { x: -5, y: 5 },
          { x: 5, y: -5 },
          { x: 15, y: 10 },
          { x: 10, y: -10 },
          { x: 0, y: -5 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        pointRadius: 5,
      },
    ],
  });
});

app.get('/api/stacked-bar-chart-data', (req, res) => {
  res.json({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Dataset 1',
        values: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
      {
        label: 'Dataset 2',
        values: [28, 48, 40, 19, 86, 27],
        backgroundColor: 'rgba(255,99,132,0.6)',
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
