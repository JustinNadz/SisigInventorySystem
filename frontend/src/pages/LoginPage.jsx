import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Input, Button, message } from 'antd';

export default function LoginPage() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    // For now: fake login — in future connect to backend
    if (values.username && values.password) {
      localStorage.setItem('token', 'dev-token');
      message.success('Logged in (dev)');
      navigate('/pos');
    }
  };

  return (
    <div className="page-center">
      <Card title="SISIG POS — Login" style={{ width: 360 }}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="username" label="Username" rules={[{ required: true }]}> 
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true }]}> 
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
