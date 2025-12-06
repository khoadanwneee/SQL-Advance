import React, { useState } from 'react';
import { FaBars, FaSearch, FaUser, FaStar, FaShoppingCart, FaCalendarAlt } from 'react-icons/fa';

const HeaderBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Giả lập trạng thái đăng nhập

  return (
    <header className="header">
        <div className="logo">
          <FaBars size={24} style={{ marginRight: '10px', cursor: 'pointer' }} />
          <h1>PetCareX</h1>
        </div>

        <div className="search-container">
          <input type="text" className="search-input" placeholder="Tìm kiếm sản phẩm, dịch vụ..." />
          <FaSearch className="search-icon-pos" />
        </div>

        <div className="user-actions">
          {isLoggedIn ? (
            <FaUser size={24} className="text-primary" />
          ) : (
            <div className="auth-buttons">
              <button className="btn btn-outline">Đăng nhập</button>
              <button className="btn btn-primary">Đăng ký</button>
            </div>
          )}
        </div>
      </header>
  );
};

export default HeaderBar;