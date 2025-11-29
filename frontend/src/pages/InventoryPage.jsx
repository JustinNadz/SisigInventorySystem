import React from 'react';
import { Card, Table, Tag } from 'antd';

export default function InventoryPage() {
  const columns = [
    { title: 'Ingredient', dataIndex: 'name', key: 'name' },
    { title: 'Qty', dataIndex: 'quantity', key: 'quantity' },
    { title: 'Unit', dataIndex: 'unit', key: 'unit' },
    { title: 'Status', dataIndex: 'threshold', key: 'threshold', render: (t, r) => (
      r.quantity <= r.threshold ? <Tag color="orange">Low</Tag> : <Tag color="green">OK</Tag>
    ) }
  ];

  const data = [
    { key: 1, name: 'Pork', quantity: 5000, unit: 'g', threshold: 500 },
    { key: 2, name: 'Onion', quantity: 2000, unit: 'g', threshold: 200 },
  ];

  return (
    <Card title="Inventory">
      <Table columns={columns} dataSource={data} />
    </Card>
  );
}
