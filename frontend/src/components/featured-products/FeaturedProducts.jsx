import React, { useState } from 'react';
import { FaBars, FaSearch, FaUser, FaStar, FaShoppingCart, FaCalendarAlt } from 'react-icons/fa';

const productsData = [
  { id: 1, name: 'Thức ăn cho chó Royal Canin', price: 450000, rating: 4.8, image: 'https://via.placeholder.com/150x150?text=Product+1' },
  { id: 2, name: 'Đồ chơi bóng cao su cho chó', price: 85000, rating: 4.6, image: 'https://via.placeholder.com/150x150?text=Product+2' },
  { id: 3, name: 'Cát vệ sinh cho mèo', price: 120000, rating: 4.7, image: 'https://via.placeholder.com/150x150?text=Product+3' },
  { id: 4, name: 'Vòng cổ chống ve rận', price: 210000, rating: 4.5, image: 'https://via.placeholder.com/150x150?text=Product+4' },
  { id: 5, name: 'Sữa tắm mượt lông', price: 150000, rating: 4.8, image: 'https://via.placeholder.com/150x150?text=Product+5' },
  // Thêm sản phẩm khác ở đây...
];

const FeaturedProducts = () => {
  return (
    <section className="section-container products-section">
      <div className="section-heading">
        <h2 className="section-title">Sản phẩm nổi bật</h2>
        <p>Khám phá những sản phẩm chất lượng cho thú cưng</p>
      </div>

      <div className="product-list">
        {productsData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-thumb" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="rating">
                <FaStar style={{ marginRight: '5px' }} /> {product.rating}
              </div>
              <div className="product-meta">
                <span className="product-price">{product.price.toLocaleString()}đ</span>
                <button className="btn btn-primary" style={{ padding: '5px 15px', fontSize: '0.9rem' }}>
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;