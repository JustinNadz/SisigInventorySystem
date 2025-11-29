import React from 'react';
import { Tag } from 'antd';

export default function InventoryRow({ item }) {
  return (
    <div className="inventory-row">
      <div>{item.name}</div>
      <div>{item.quantity} {item.unit}</div>
      <div>{item.quantity <= item.threshold ? <Tag color="orange">Low</Tag> : <Tag color="green">OK</Tag>}</div>
    </div>
  );
}
