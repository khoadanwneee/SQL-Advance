import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { FaBars, FaSearch, FaUser, FaShoppingCart, FaCalendarAlt, FaUserCircle, FaClipboardList, FaShoppingBag, FaFileInvoice, FaSignOutAlt } from 'react-icons/fa';

const HeaderBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // set true to test the dropdown
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
          <div className="user-dropdown" ref={menuRef} style={{ position: 'relative' }}>
            <button
              className="user-icon-btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-haspopup="true"
              type="button"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              <FaUser size={26} />
            </button>

            {menuOpen && (
              <div className="dropdown-card" role="menu">
                <div className="dropdown-profile">
                  <div className="profile-name">Nguyễn Văn A</div>
                  <div className="profile-email">user@example.com</div>
                </div>

                <ul className="dropdown-list">
                  <li onClick={() => { setMenuOpen(false); navigate('/profile'); }}>
                    <FaUserCircle className="dropdown-icon" /> Thông tin cá nhân
                  </li>
                  <li onClick={() => { setMenuOpen(false); navigate('/my-pets'); }}>
                    <FaClipboardList className="dropdown-icon" /> Thú cưng của tôi
                  </li>
                  <li onClick={() => { setMenuOpen(false); navigate('/purchased-products'); }}>
                    <FaShoppingBag className="dropdown-icon" /> Đơn hàng
                  </li>
                  <li onClick={() => { setMenuOpen(false); navigate('cashier/create-invoice'); }}>
                    <FaFileInvoice className="dropdown-icon" /> Tạo hóa đơn
                  </li>
                </ul>

                <button
                  className="btn btn-logout"
                  onClick={() => {
                    setMenuOpen(false);
                    // add your logout flow here
                    setIsLoggedIn(false);
                    navigate('/');
                  }}
                >
                  <FaSignOutAlt className="logout-icon" /> Đăng xuất
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-buttons">
            <button className="btn btn-outline" onClick={() => { navigate('/login'); }}>Đăng nhập</button>
            <button className="btn btn-primary" onClick={() => { navigate('/register'); }}>Đăng ký</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderBar;