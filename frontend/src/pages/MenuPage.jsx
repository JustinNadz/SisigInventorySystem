import React from 'react';
import { Card, Button, Table, Modal } from 'antd';

export default function MenuPage() {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Actions', key: 'actions', render: () => <Button type="link">Edit</Button> }
  ];

  const data = [
    { key: 1, name: 'Pork Sisig Plate', price: 120 },
  ];

  return (
    <Card title="Menu Management" extra={<Button type="primary">Add Item</Button>}>
      <Table columns={columns} dataSource={data} />
    </Card>
  );
}
