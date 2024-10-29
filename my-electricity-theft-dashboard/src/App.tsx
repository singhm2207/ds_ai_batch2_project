import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideMenu from './components/SideMenu'; // Import SideMenu
import LineChart from './components/charts/LineChart';
import BarChart from './components/charts/BarChart';
import PieChart from './components/charts/PieChart';
import StackedBarChart from './components/charts/StackedBarChart';
import GroupedBarChart from './components/charts/GroupedBarChart';
import AreaChart from './components/charts/AreaChart';
import DoughnutChart from './components/charts/DoughnutChart';
import PolarAreaChart from './components/charts/PolarAreaChart';
import RadarChart from './components/charts/RadarChart';
import ScatterChart from './components/charts/ScatterChart';
import BubbleChart from './components/charts/BubbleChart';
import { Layout } from 'antd';
import HorizontalBarChart from './components/charts/HorizontalBarChart';
import Dashboard from './components/dashboards/dashboard1/Dashboard';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <SideMenu />
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <Routes>
              <Route path="/line-chart" element={<LineChart />} />
              <Route path="/bar-chart" element={<BarChart />} />
              <Route path="/pie-chart" element={<PieChart />} />
              <Route path="/horizontal-bar-chart" element={<HorizontalBarChart />} />
              <Route path="/stacked-bar-chart" element={<StackedBarChart />} />
              <Route path="/grouped-bar-chart" element={<GroupedBarChart />} />
              <Route path="/area-chart" element={<AreaChart />} />
              <Route path="/doughnut-chart" element={<DoughnutChart />} />
              <Route path="/polar-area-chart" element={<PolarAreaChart />} />
              <Route path="/radar-chart" element={<RadarChart />} />
              <Route path="/scatter-chart" element={<ScatterChart />} />
              <Route path="/bubble-chart" element={<BubbleChart />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
