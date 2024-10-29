import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  PieChartOutlined,
  LineChartOutlined,
  RadarChartOutlined,
  DotChartOutlined,
  CiCircleOutlined,
  DashboardOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const SideMenu: React.FC = () => {
  const location = useLocation();
  const [openKeys, setOpenKeys] = React.useState<string[]>([]);

  const getMenuKeyFromPath = (pathname: string) => {
    switch (pathname) {
      case '/dashboard':
        return '1';
      case '/line-chart':
        return '2';
      case '/bar-chart':
        return '3';
      case '/pie-chart':
        return '4';
      case '/radar-chart':
        return '5';
      case '/scatter-chart':
        return '6';
      case '/bubble-chart':
        return '7';
      case '/doughnut-chart':
        return '8';
      case '/polar-area-chart':
        return '9';
      case '/stacked-bar-chart':
        return '10';
      case '/grouped-bar-chart':
        return '11';
      case '/area-chart':
        return '12';
      case '/horizontal-bar-chart':
        return '13';
      case '/multiaxis-line-chart':
        return '14';
      default:
        return '1';
    }
  };

  const getOpenKeysFromPath = (pathname: string) => {
    return pathname.includes('chart') ? ['sub1'] : ['sub2'];
  };

  React.useEffect(() => {
    setOpenKeys(getOpenKeysFromPath(location.pathname));
  }, [location.pathname]);

  const selectedKey = getMenuKeyFromPath(location.pathname);

  return (
    <Sider collapsible>
      <div className="logo-container">
        <div className="logo">
          <img src="/images/logo.png" alt="Brand 1 Logo" className="brand-logo" />
        </div>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        openKeys={openKeys}
        onOpenChange={(keys) => setOpenKeys(keys)}
      >
        <Menu.SubMenu key="sub2" icon={<DashboardOutlined />} title="Dashboards">
          <Menu.Item key="1">
            <Link to="/dashboard">Electricity Theft Dashboard</Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="sub1" icon={<BarChartOutlined />} title="Chart Demos">
          <Menu.Item key="2" icon={<LineChartOutlined />}>
            <Link to="/line-chart">Line Chart</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<BarChartOutlined />}>
            <Link to="/bar-chart">Bar Chart</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<PieChartOutlined />}>
            <Link to="/pie-chart">Pie Chart</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<RadarChartOutlined />}>
            <Link to="/radar-chart">Radar Chart</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<DotChartOutlined />}>
            <Link to="/scatter-chart">Scatter Chart</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<CiCircleOutlined />}>
            <Link to="/bubble-chart">Bubble Chart</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<PieChartOutlined />}>
            <Link to="/doughnut-chart">Doughnut Chart</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<PieChartOutlined />}>
            <Link to="/polar-area-chart">Polar Area Chart</Link>
          </Menu.Item>
          <Menu.Item key="10" icon={<BarChartOutlined />}>
            <Link to="/stacked-bar-chart">Stacked Bar Chart</Link>
          </Menu.Item>
          <Menu.Item key="11" icon={<BarChartOutlined />}>
            <Link to="/grouped-bar-chart">Grouped Bar Chart</Link>
          </Menu.Item>
          <Menu.Item key="12" icon={<BarChartOutlined />}>
            <Link to="/area-chart">Area Chart</Link>
          </Menu.Item>
          <Menu.Item key="13" icon={<BarChartOutlined />}>
            <Link to="/horizontal-bar-chart">Horizontal Bar Chart</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
