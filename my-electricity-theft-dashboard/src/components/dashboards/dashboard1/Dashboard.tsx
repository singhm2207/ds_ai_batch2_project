import React from 'react';
import BarChart from '../../charts/BarChart';
import StackedBarChart from '../../charts/StackedBarChart';
import LineChart from '../../charts/LineChart';
import PieChart from '../../charts/PieChart';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h3>Monthly Power Loss</h3>
        <BarChart />
      </div>
      <div className="dashboard-card">
        <h3>High-Risk Regions Power Loss</h3>
        <StackedBarChart />
      </div>
      <div className="dashboard-card">
        <h3>Overall Power Consumption Trends</h3>
        <LineChart />
      </div>
      <div className="dashboard-card">
        <h3>Revenue Loss Breakdown</h3>
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
