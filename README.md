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

2. **Navigate to the client directory:**
   ```bash
   cd client
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

## Usage

- Once the application is running, you will see the dashboard with various charts and a left navigation menu.
- You can navigate between different chart demos using the sidebar.

## File Structure

```
ds_ai_batch2_project/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── charts/
│   │   │   ├── dashboards/
│   │   │   └── App.tsx
│   │   ├── App.css
│   │   └── index.tsx
│   ├── public/
│   └── package.json
├── backend/
│   ├── server.js
└── README.md
```
