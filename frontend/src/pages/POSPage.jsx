import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Input, Typography, Modal } from 'antd';
import MenuItemCard from '../components/MenuItemCard';
import Cart from '../components/Cart';

const { Title } = Typography;
const { Search } = Input;

export default function POSPage() {
  const [menu, setMenu] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('/api/menu/').then(r => setMenu(r.data)).catch(() => {
      setMenu([
        { id: 1, name: 'Pork Sisig Plate', price: 120.0 },
        { id: 2, name: 'Spicy Sisig', price: 130.0 },
        { id: 3, name: 'Sisig Rice', price: 85.0 },
      ]);
    });
  }, []);

  const addToCart = (item, qty = 1) => {
    setCartItems(prev => {
      const found = prev.find(p => p.id === item.id);
      if (found) return prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity + qty } : p);
      return [{ ...item, quantity: qty }, ...prev];
    });
  };

  const removeFromCart = (id) => setCartItems(prev => prev.filter(p => p.id !== id));

  const updateQuantity = (id, quantity) => {
    setCartItems(prev => prev.map(p => p.id === id ? { ...p, quantity } : p));
  };

  const checkout = async (paymentMethod = 'cash') => {
    const payload = {
      items: cartItems.map(i => ({ menu_item: i.id, quantity: i.quantity })),
      total: cartItems.reduce((s, i) => s + i.price * i.quantity, 0),
      payment_method: paymentMethod
    };
    try {
      await axios.post('/api/orders/create', payload);
      Modal.success({ title: 'Order placed', content: 'Order created successfully (dev).' });
      setCartItems([]);
    } catch (err) {
      Modal.info({ title: 'Dev mode', content: 'Order simulated — backend not connected.' });
      setCartItems([]);
    }
  };

  const filtered = menu.filter(m => m.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <Row gutter={16} style={{ marginBottom: 12 }}>
        <Col span={16}>
          <Title level={3}>Menu</Title>
        </Col>
        <Col span={8} style={{ textAlign: 'right' }}>
          <Search placeholder="Search menu" onSearch={v => setFilter(v)} enterButton />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col xs={24} md={16}>
          <Row gutter={[16, 16]}>
            {filtered.map(item => (
              <Col xs={24} sm={12} md={8} lg={8} key={item.id}>
                <MenuItemCard item={item} onAdd={addToCart} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={24} md={8}>
          <Title level={3}>Cart</Title>
          <Cart items={cartItems} onRemove={removeFromCart} onCheckout={checkout} onUpdate={updateQuantity} />
        </Col>
      </Row>
    </div>
  );
}
