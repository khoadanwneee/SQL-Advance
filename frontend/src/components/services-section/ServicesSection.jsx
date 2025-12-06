import React, { useState } from 'react';
import { FaBars, FaSearch, FaUser, FaStar, FaShoppingCart, FaCalendarAlt } from 'react-icons/fa';

const servicesData = [
  { id: 1, name: 'Khám sức khỏe tổng quát', description: 'Kiểm tra toàn diện sức khỏe thú cưng', price: 200000, image: 'https://via.placeholder.com/300x200?text=Service+1' },
  { id: 2, name: 'Tiêm phòng định kỳ', description: 'Vaccine phòng bệnh cho chó mèo', price: 150000, image: 'https://via.placeholder.com/300x200?text=Service+2' },
  { id: 3, name: 'Khám răng miệng', description: 'Chăm sóc và vệ sinh răng miệng', price: 180000, image: 'https://via.placeholder.com/300x200?text=Service+3' },
  { id: 4, name: 'Tẩy giun sán', description: 'Phòng ngừa các loại ký sinh trùng', price: 120000, image: 'https://via.placeholder.com/300x200?text=Service+4' },
];

const ServicesSection = () => {
  return (
    <section className="section-container services-bg">
      <div className="section-heading">
        <h2 className="section-title">Dịch vụ thú y</h2>
        <p>Chăm sóc sức khỏe chuyên nghiệp</p>
      </div>

      <div className="services-list">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.name} className="service-img" />
            <div className="service-body">
              <h3 className="service-title">{service.name}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="product-meta">
                <span className="product-price">{service.price.toLocaleString()}đ</span>
                <button className="btn btn-primary" style={{ padding: '8px 15px', fontSize: '0.9rem' }}>
                  Đặt lịch
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;