import React from 'react';
import { List, Button, Typography, Divider, Space } from 'antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';

export default function Cart({ items = [], onRemove = () => {}, onCheckout = () => {}, onUpdate = () => {} }) {
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <div className="cart-sticky">
      <List
        bordered
        dataSource={items}
        locale={{ emptyText: 'Cart is empty' }}
        renderItem={item => (
          <List.Item>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700 }}>{item.name}</div>
              <div style={{ color: '#666', marginTop: 6 }}>₱ {item.price} x {item.quantity}</div>
            </div>
            <Space direction="vertical" align="end">
              <div>
                <Button size="small" icon={<MinusOutlined />} onClick={() => onUpdate(item.id, Math.max(1, item.quantity - 1))} />
                <Button size="small" icon={<PlusOutlined />} onClick={() => onUpdate(item.id, item.quantity + 1)} style={{ marginLeft: 6 }} />
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 700 }}>₱ {item.price * item.quantity}</div>
                <Button type="link" icon={<DeleteOutlined />} onClick={() => onRemove(item.id)}>Remove</Button>
              </div>
            </Space>
          </List.Item>
        )}
      />
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Typography.Text type="secondary">Subtotal</Typography.Text>
          <div style={{ fontWeight: 700, fontSize: 18 }}>₱ {total.toFixed(2)}</div>
        </div>
        <div style={{ width: 220 }}>
          <Button block style={{ marginBottom: 8 }} onClick={() => onCheckout('cash')}>Pay Cash</Button>
          <Button type="primary" block onClick={() => onCheckout('card')}>Pay Card</Button>
        </div>
      </div>
    </div>
  );
}
