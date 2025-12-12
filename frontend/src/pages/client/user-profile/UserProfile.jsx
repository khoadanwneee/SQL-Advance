import React from 'react';
import './UserProfile.css';
import { 
  FaArrowLeft, 
  FaEdit, 
  FaCamera, 
  FaMedal, 
  FaUser, 
  FaCalendarAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaRibbon 
} from 'react-icons/fa';

const UserProfile = () => {
  // Mock User Data based on screenshots
  const user = {
    username: 'petlover2024',
    fullName: 'Nguyễn Văn A',
    gender: 'Nam',
    dob: '15/03/1990',
    registrationDate: '10/01/2024',
    phone: '0912 345 678',
    email: 'nguyenvana@example.com',
    membershipLevel: 'Vàng',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' // Placeholder face image
  };

  const handleBack = () => {
    console.log("Go back");
  };

  return (
    <div className="user-profile-page">
      {/* 1. Header */}
      <div className="page-header">
        <div className="header-left">
          <button className="back-btn" onClick={handleBack}>
            <FaArrowLeft style={{ marginRight: '10px' }} />
          </button>
          <h1 className="page-title">Thông tin cá nhân</h1>
        </div>
        <button className="btn-edit">
          <FaEdit /> Chỉnh sửa
        </button>
      </div>

      <div className="profile-layout">
        
        {/* 2. Left Sidebar (Avatar Card) */}
        <div className="profile-sidebar">
          <div className="sidebar-header-bg">
            <div className="avatar-wrapper">
              <img src={user.avatar} alt="User Avatar" className="user-avatar" />
              <div className="camera-icon">
                <FaCamera size={14} />
              </div>
            </div>
          </div>
          
          <div className="user-main-info">
            <h2>{user.fullName}</h2>
            <p className="user-handle">@{user.username}</p>
          </div>

          <div className="membership-badge-large">
            <FaMedal className="badge-icon" />
            <div className="badge-text-group">
              <span className="badge-label">Hạng thành viên</span>
              <span className="badge-value">{user.membershipLevel}</span>
            </div>
          </div>
        </div>

        {/* 3. Right Content (Details) */}
        <div className="content-section">
          
          {/* Card 1: Personal Info */}
          <div className="info-card">
            <div className="card-header-row">
              <h3 className="section-title">Thông tin cá nhân</h3>
              <FaUser className="edit-icon" size={18} style={{opacity: 0}} /> {/* Spacer/Icon placeholder */}
            </div>

            <div className="info-grid">
              {/* Username */}
              <div className="info-group">
                <div className="field-label">
                  <FaUser className="icon-gray" /> Username
                </div>
                <div className="field-value-box">
                  {user.username}
                </div>
              </div>

              {/* DOB */}
              <div className="info-group">
                <div className="field-label">
                  <FaCalendarAlt className="icon-gray" /> Ngày sinh
                </div>
                <div className="field-value-box">
                  {user.dob}
                </div>
              </div>

              {/* Full Name */}
              <div className="info-group">
                <div className="field-label">
                  <FaUser className="icon-gray" /> Họ tên
                </div>
                <div className="field-value-box">
                  {user.fullName}
                </div>
              </div>

              {/* Reg Date */}
              <div className="info-group">
                <div className="field-label">
                  <FaCalendarAlt className="icon-gray" /> Ngày đăng ký
                </div>
                <div className="field-value-box">
                  {user.registrationDate}
                </div>
              </div>

              {/* Gender */}
              <div className="info-group">
                <div className="field-label">
                  Giới tính
                </div>
                <div className="field-value-box">
                  {user.gender}
                </div>
              </div>

              {/* Membership (Duplicate display for completeness) */}
              <div className="info-group">
                <div className="field-label">
                  <FaRibbon className="icon-gray" /> Hạng thành viên
                </div>
                <div className="field-value-box highlight-gold">
                  {user.membershipLevel}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Contact Info */}
          <div className="info-card">
            <div className="card-header-row">
              <h3 className="section-title">Thông tin liên hệ</h3>
              <FaEnvelope className="edit-icon" size={20} color="#9333ea" />
            </div>

            <div className="info-grid">
              {/* Phone */}
              <div className="info-group">
                <div className="field-label">
                  <FaPhoneAlt className="icon-gray" /> Số điện thoại
                </div>
                <div className="field-value-box">
                  {user.phone}
                </div>
              </div>

              {/* Email */}
              <div className="info-group">
                <div className="field-label">
                  <FaEnvelope className="icon-gray" /> Email
                </div>
                <div className="field-value-box">
                  {user.email}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserProfile;