import React, { useState } from 'react';
import { Card, Button, InputNumber, Typography } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function MenuItemCard({ item, onAdd }) {
  const [qty, setQty] = useState(1);

  return (
    <Card size="small" className="menu-item" bodyStyle={{ padding: 12 }}>
      <div className="thumb">{item.name.charAt(0)}</div>
      <div className="meta">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: 700 }}>{item.name}</div>
            <Text type="secondary">₱ {item.price}</Text>
          </div>
        </div>
        <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
          <InputNumber min={1} value={qty} onChange={v => setQty(v || 1)} />
          <Button type="primary" block icon={<ShoppingCartOutlined />} onClick={() => onAdd(item, qty)}>
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
}
