const express = require('express');
const cors = require('cors');
const app = express();
const port = 7200;

app.use(cors());

// Simulated data for charts
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
