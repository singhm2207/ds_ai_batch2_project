```markdown
# Electricity Theft Analysis Dashboard

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Usage](#usage)
- [File Structure](#file-structure)
- [License](#license)

## Features

- Interactive charts for data visualization
- Dashboard layout displaying multiple analytics at a glance
- Responsive design for mobile and desktop views
- Left navigation menu for easy access to different charts

## Technologies Used

- React
- TypeScript
- Chart.js
- Ant Design
- React Router DOM
- Axios for API calls
- Node.js
- Express
- CORS for cross-origin requests

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/singhm2207/ds_ai_batch2_project.git
   cd ds_ai_batch2_project
   ```

2. **Navigate to the my-electricity-theft-dashboard directory:**
   ```bash
   cd my-electricity-theft-dashboard
   ```

3. **Install the necessary dependencies for the frontend:**
   ```bash
   npm install
   ```

4. **Start the development server for the frontend:**
   ```bash
   npm start
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install the necessary dependencies for the backend:**
   ```bash
   npm install express cors
   ```

3. **Start the backend server:**
   ```bash
   node server.js
   ```

4. **Ensure the server is running on port 7200. You can adjust this in the `server.js` file if needed.**

5. **The API endpoint for fetching data is:**
   ```
   http://localhost:7200/api/data
   ```

### Docker Setup 
Once you clone the repository, all the necessary Docker files (including `Dockerfile` for both frontend and backend, and `docker-compose.yml`) are already included. By following the Docker steps, you can:

1. **Build the Docker images** (for both the frontend and backend).
2. **Run the containers** (which will automatically install the dependencies, build the React app, and start the servers).
3. **Access the app** (both frontend and backend) without needing to configure anything manually.

### Steps for Cloners Using Docker

Here’s streamlined process for cloning the repo and running the Docker containers:

### 1. **Clone the repository:**

   ```bash
   git clone https://github.com/singhm2207/ds_ai_batch2_project.git
   cd ds_ai_batch2_project
   ```

### 2. **Build and Run the Docker Containers:**

From the project root (where the `docker-compose.yml` file is located), they only need to run the following command:

```bash
docker-compose up --build
```

This single command will:

- Build both the frontend and backend images using the `Dockerfile` for each service.
- Start both the frontend and backend containers as specified in the `docker-compose.yml` file.
- Expose the frontend on `http://localhost:3000` and the backend on `http://localhost:7200`.

### 3. **Stopping the Containers:**

To stop the running containers, they can run:

```bash
docker-compose down
```

This will stop and remove the containers, but it doesn't affect the images or other resources.

## Usage

- Once the application is running, you will see the dashboard with various charts and a left navigation menu.
- You can navigate between different chart demos using the sidebar.

## File Structure

```
ds_ai_batch2_project/
├── backend/
│   ├── package-lock.json
│   ├── package.json
│   ├── Dockerfile
│   └── server.js
├── my-electricity-theft-dashboard/
│   ├── package-lock.json
│   ├── package.json
│   ├── public/  (React app)
│   ├── src/     (React app)
│   ├── .gitignore
│   ├── tsconfig.json
│   └── README.md
├── docker-compose.yml
└── README.md
```

### **Comprehensive Guide: Using Prebuilt Chart Components**


### **1. Understanding the Folder Structure**

Check above

### **2. Setup Prerequisites**

#### **Install Dependencies**

Ensure the following dependencies are installed in your React project:

```bash
npm install react-chartjs-2 chart.js axios
```

#### **API Base URL**

Create a `constants.ts` file in the `common` folder to store the base URL for APIs:

```typescript
export const apiUrl = 'http://localhost:7200'; // Replace with your API base URL
```

---

### **3. How to Import and Use Prebuilt Chart Components**

Each chart component is preconfigured to fetch data dynamically from an API and render the corresponding chart. Follow these steps to use them:

---

#### **Step 1: Import the Chart**

```tsx
import AreaChart from '../components/charts/AreaChart';
```

Replace `AreaChart` with the desired chart component:
- `BarChart`
- `DoughnutChart`
- `LineChart`
- `PolarAreaChart`
- `RadarChart`
- `ScatterChart`
- `StackedBarChart`
- `HorizontalBarChart`

---

#### **Step 2: Include the Chart in Your JSX**

You can use the imported chart component in any JSX file:

```tsx
const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <AreaChart />
    </div>
  );
};
```

---

#### **Step 3: Ensure the Backend Provides the Required API**

Each chart expects specific data from its API endpoint. You can use the provided server code to set up these APIs or create your own backend following the formats given below.

---

### **4. API Requirements**

Each chart fetches its data from an API. Ensure the backend provides data in the expected format.

#### **Common API Response Structure**

Most charts expect a response with the following structure:

```json
{
  "labels": ["Label 1", "Label 2", "Label 3"],
  "datasets": [
    {
      "label": "Dataset 1",
      "data": [10, 20, 30],
      "backgroundColor": "rgba(75,192,192,0.4)",
      "borderColor": "rgba(75,192,192,1)",
      "fill": true
    }
  ]
}
```

Please check server.js to see the expected format of the data required by every chart.

---

#### **API Endpoints**

Below are the expected endpoints for each chart:

| Chart Component       | API Endpoint                  | Expected Fields                                                                                  |
|------------------------|-------------------------------|--------------------------------------------------------------------------------------------------|
| **AreaChart**          | `/api/area-chart-data`       | `labels`, `datasets` with `backgroundColor`, `borderColor`, `data`, and `fill`                  |
| **BarChart**           | `/api/bar-chart-data`        | `labels`, `datasets` with `backgroundColor` and `data`                                          |
| **DoughnutChart**      | `/api/doughnut-chart-data`   | `labels`, `datasets` with `values`, `backgroundColor`, and `hoverBackgroundColor`              |
| **LineChart**          | `/api/line-chart-data`       | `labels`, `datasets` with `backgroundColor`, `borderColor`, and `data`                         |
| **PolarAreaChart**     | `/api/polar-area-chart-data` | `labels`, `datasets` with `values`, `backgroundColor`, and `hoverBackgroundColor`              |
| **RadarChart**         | `/api/radar-chart-data`      | `labels`, `datasets` with `values`, `backgroundColor`, `borderColor`, and `borderWidth`        |
| **ScatterChart**       | `/api/scatter-chart-data`    | `datasets` with `values` as array of `{x, y}`, `backgroundColor`, `borderColor`, and `pointRadius` |
| **StackedBarChart**    | `/api/stacked-bar-chart-data`| `labels`, `datasets` with `backgroundColor` and `data`                                         |
| **HorizontalBarChart** | `/api/horizontal-bar-chart-data` | `labels`, `datasets` with `backgroundColor` and `data`                                       |

---

### **5. Example Usage in a Dashboard**

```tsx
import React from 'react';
import AreaChart from '../components/charts/AreaChart';
import BarChart from '../components/charts/BarChart';
import DoughnutChart from '../components/charts/DoughnutChart';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Area Chart</h2>
        <AreaChart />
      </div>
      <div>
        <h2>Bar Chart</h2>
        <BarChart />
      </div>
      <div>
        <h2>Doughnut Chart</h2>
        <DoughnutChart />
      </div>
    </div>
  );
};

export default Dashboard;
```

---

### **6. Troubleshooting**

#### **Chart Not Displaying Properly**
1. Verify the API endpoint is returning data in the expected format.
2. Ensure `Filler` plugin is registered for area charts.
3. Confirm the `backgroundColor` values use valid `rgba` format for transparency.

#### **API Errors**
1. Check if the backend is running at the correct port.
2. Use tools like `Postman` or `curl` to validate API responses.

#### **Styling Issues**
- Add CSS to the `.chart-container` class to adjust chart dimensions:
```css
.chart-container {
  width: 80%;
  margin: 0 auto;
}
```

---

### **7. Writing Custom APIs**

Developers can use the provided server examples as templates. Below is a basic template for creating a chart API:

```javascript
app.get('/api/sample-chart-data', (req, res) => {
  res.json({
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Sample Dataset',
        data: [10, 20, 30, 40],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        fill: true
      }
    ]
  });
});

```

---

### **8. Next Steps**

- **For API Developers**: Use the provided examples to implement required APIs.
- **For UI Developers**: Import the components and use them in JSX as shown in the guide.
