import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu, Avatar, Space, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import LoginPage from './pages/LoginPage';
import POSPage from './pages/POSPage';
import MenuPage from './pages/MenuPage';
import InventoryPage from './pages/InventoryPage';

const { Header, Content } = Layout;

export default function App() {
  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="logo">SISIG POS</div>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key="pos"><Link to="/pos">POS</Link></Menu.Item>
          <Menu.Item key="menu"><Link to="/menu">Menu</Link></Menu.Item>
          <Menu.Item key="inventory"><Link to="/inventory">Inventory</Link></Menu.Item>
        </Menu>
        <div className="header-actions">
          <Space>
            <Avatar icon={<UserOutlined />} />
            <div className="username">Cashier</div>
            <Button type="ghost" icon={<LogoutOutlined />}>Logout</Button>
          </Space>
        </div>
      </Header>
      <Content className="app-content">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/pos" element={<POSPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
        </Routes>
      </Content>
    </Layout>
  );
}
