import React from 'react';
import PurchasedProductCard from '../../components/product-card/PurchasedProductCard';
import './PurchasedProductsPage.css';
import { FaArrowLeft } from 'react-icons/fa';

const PurchasedProductsPage = ({ onBack }) => {
  // Mock Data
  const purchasedItems = [
    {
      id: 1,
      orderId: 'DH001',
      name: 'Royal Canin Dry Food for Dogs',
      category: 'Food',
      quantity: 2,
      totalPrice: '850.000đ',
      status: 'Delivered',
      orderDate: '25/11/2024',
      image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      orderId: 'DH002',
      name: 'Premium Leather Collar',
      category: 'Accessories',
      quantity: 1,
      totalPrice: '150.000đ',
      status: 'Delivered',
      orderDate: '20/11/2024',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      orderId: 'DH003',
      name: 'SOS Smooth Coat Shampoo',
      category: 'Hygiene',
      quantity: 3,
      totalPrice: '450.000đ',
      status: 'Delivered',
      orderDate: '10/11/2024',
      image: 'https://images.unsplash.com/photo-1585837575652-267c041d77d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <div className="purchased-page-container">
      {/* Header */}
      <div className="page-header">
        <div className="header-left-group">
          <button className="back-button" onClick={onBack}>
            <FaArrowLeft />
          </button>
          <div className="header-titles">
            <h1 className="main-title">Sản phẩm đã mua</h1>
            <p className="sub-title">{purchasedItems.length} orders</p>
          </div>
        </div>
      </div>

      {/* List Container */}
      <div className="purchased-list">
        {purchasedItems.map((item) => (
          <PurchasedProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default PurchasedProductsPage;