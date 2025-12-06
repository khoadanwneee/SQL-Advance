import React, { useState } from 'react';
import { FaBars, FaSearch, FaUser, FaStar, FaShoppingCart, FaCalendarAlt } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-title">Chào mừng đến với PetCareX</h2>
        <p className="hero-desc">
          Nơi chăm sóc toàn diện cho thú cưng yêu quý của bạn - Từ thức ăn, phụ kiện đến dịch vụ thú y chuyên nghiệp.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Mua sắm ngay</button>
          <button className="btn btn-outline">
            <FaCalendarAlt /> Đặt lịch khám
          </button>
        </div>
      </div>
      <div className="hero-image">
        {/* Thay ảnh thật vào src bên dưới */}
        <img src="https://via.placeholder.com/600x400?text=Pet+Image" alt="Pet Care" />
      </div>
    </section>
  );
};

export default HeroSection;