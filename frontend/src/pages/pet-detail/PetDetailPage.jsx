import React from 'react';
import './PetDetailPage.css';
import { 
  FaArrowLeft, 
  FaEdit, 
  FaHeart, 
  FaCalendarAlt, 
  FaStethoscope, 
  FaSyringe, 
  FaHeartbeat
} from 'react-icons/fa';
import { useNavigate } from 'react-router';

const PetDetailPage = () => {
  // Dữ liệu mẫu khớp với hình ảnh
  const pet = {
    name: 'Bobby',
    gender: 'Đực',
    age: '3 tuổi',
    dob: '15/03/2021',
    species: 'Chó',
    breed: 'Golden Retriever',
    weight: '28kg',
    color: 'Vàng gold',
    healthStatus: 'Khỏe mạnh',
    healthDesc: 'Thú cưng của bạn đang có sức khỏe tốt. Hãy tiếp tục duy trì chế độ chăm sóc đều đặn.',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
  };

  const navigate = useNavigate();

  const handleBack = () => {
    console.log("Quay lại");
  };

  return (
    <div className="pd-container">
      {/* Header */}
      <div className="pd-header">
        <div className="pd-header-left">
          <button className="pd-back-btn" onClick={handleBack}>
            <FaArrowLeft />
          </button>
          <h1 className="pd-page-title">Chi tiết thú cưng</h1>
        </div>
        <button className="pd-edit-btn">
          <FaEdit /> Chỉnh sửa
        </button>
      </div>

      <div className="pd-layout">
        
        {/* Left Sidebar: Profile & Summary */}
        <div className="pd-sidebar">
          <div className="pd-profile-card">
            <div className="pd-avatar-container">
              <img src={pet.image} alt={pet.name} className="pd-avatar-img" />
            </div>
            
            <div className="pd-profile-header">
              <h2 className="pd-pet-name">{pet.name}</h2>
              <span className={`pd-gender-badge ${pet.gender === 'Đực' ? 'pd-badge-male' : 'pd-badge-female'}`}>
                {pet.gender}
              </span>
            </div>

            <div className="pd-profile-meta">
              <div className="pd-meta-row">
                <FaHeart className="pd-icon-purple" /> {pet.age}
              </div>
              <div className="pd-meta-row">
                <FaCalendarAlt className="pd-icon-purple" /> {pet.dob}
              </div>
            </div>

            <div className="pd-status-mini-box">
              <span className="pd-status-label">Tình trạng sức khỏe</span>
              <span className="pd-status-value">{pet.healthStatus}</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="pd-content-col">
          
          {/* 1. Basic Info */}
          <div className="pd-card">
            <h3 className="pd-card-title">Thông tin cơ bản</h3>
            <div className="pd-info-grid">
              <div className="pd-info-item">
                <span className="pd-info-label">Tên thú cưng</span>
                <span className="pd-info-val">{pet.name}</span>
              </div>
              <div className="pd-info-item">
                <span className="pd-info-label">Ngày sinh</span>
                <span className="pd-info-val">{pet.dob}</span>
              </div>
              <div className="pd-info-item">
                <span className="pd-info-label">Loài</span>
                <span className="pd-info-val">{pet.species}</span>
              </div>
              <div className="pd-info-item">
                <span className="pd-info-label">Giới tính</span>
                <span className="pd-info-val">{pet.gender}</span>
              </div>
              <div className="pd-info-item">
                <span className="pd-info-label">Giống</span>
                <span className="pd-info-val">{pet.breed}</span>
              </div>
              <div className="pd-info-item">
                <span className="pd-info-label">Tuổi</span>
                <span className="pd-info-val">{pet.age}</span>
              </div>
              <div className="pd-info-item">
                <span className="pd-info-label">Cân nặng</span>
                <span className="pd-info-val">{pet.weight}</span>
              </div>
              <div className="pd-info-item">
                <span className="pd-info-label">Màu lông</span>
                <span className="pd-info-val">{pet.color}</span>
              </div>
            </div>
          </div>

          {/* 2. Health Status & History Buttons */}
          <div className="pd-card">
            <h3 className="pd-card-title">Tình trạng sức khỏe</h3>
            
            <div className="pd-health-box">
              <div className="pd-health-icon-wrap">
                <FaHeartbeat />
              </div>
              <div className="pd-health-text">
                <h4>Trạng thái hiện tại <span className="pd-health-highlight">{pet.healthStatus}</span></h4>
                <p className="pd-health-desc">{pet.healthDesc}</p>
              </div>
            </div>

            <div className="pd-health-actions">
              <button className="pd-btn-action pd-btn-outline" onClick={() => {navigate('/medicine-history')}}>
                <FaStethoscope /> Lịch sử khám bệnh
              </button>
              <button className="pd-btn-action pd-btn-fill" onClick={() => {navigate('/vaccination-history')}}>
                <FaSyringe /> Lịch sử tiêm phòng
              </button>
            </div>
          </div>

          {/* 3. Quick Actions (Removed Health Notes button) */}
          <div className="pd-card">
            <h3 className="pd-card-title">Thao tác nhanh</h3>
            <div className="pd-quick-grid">
              <div className="pd-quick-btn">
                <FaCalendarAlt className="pd-quick-icon" />
                <span className="pd-quick-label">Đặt lịch khám</span>
              </div>
              <div className="pd-quick-btn">
                <FaSyringe className="pd-quick-icon" />
                <span className="pd-quick-label">Đặt lịch tiêm</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PetDetailPage;