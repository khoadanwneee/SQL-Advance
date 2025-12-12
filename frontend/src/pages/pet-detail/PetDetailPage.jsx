import React, { useState, useEffect } from 'react';
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
import { useNavigate, useSearchParams } from 'react-router-dom'; 
import axios from 'axios';

const PetDetailPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const petId = searchParams.get('id'); 

  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  const calculateAge = (dobString) => {
    if (!dobString) return "Không rõ";
    const birthDate = new Date(dobString);
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months += 12;
    }
    
    if (years < 1) return `${months} tháng`;
    return `${years} tuổi`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString('vi-VN');
  };

  const handleBack = () => {
    navigate(-1); 
  };

  useEffect(() => {
    const fetchPetDetail = async () => {
      if (!petId) {
        alert("Không tìm thấy ID thú cưng!");
        navigate(-1);
        return;
      }

      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:3000/pets/detail?id=${petId}`);

        const data = response.data; 

        const mappedPet = {
          id: data.MaThuCung,
          name: data.TenThuCung,
          gender: data.GioiTinh, 
          dob: formatDate(data.NgaySinh),
          age: calculateAge(data.NgaySinh), 
          species: data.Loai || 'Khác',
          breed: data.Giong || 'Không rõ',
          healthStatus: data.TrangThaiSucKhoe || 'Bình thường',
          healthDesc: data.MoTaSucKhoe || `Hiện tại ${data.TenThuCung} đang có tình trạng sức khỏe ${data.TrangThaiSucKhoe || 'bình thường'}.`,
          image: data.HinhAnh || 'https://via.placeholder.com/600x400?text=No+Image'
        };

        setPet(mappedPet);
      } catch (error) {
        console.error("Lỗi khi tải thông tin thú cưng:", error);
        alert("Không thể tải thông tin thú cưng.");
      } finally {
        setLoading(false);
      }
    };

    fetchPetDetail();
  }, [petId, navigate]);

  if (loading) {
    return (
      <div className="pd-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h2>Đang tải thông tin...</h2>
      </div>
    );
  }

  if (!pet) {
    return (
      <div className="pd-container">
        <button className="pd-back-btn" onClick={handleBack}><FaArrowLeft /> Quay lại</button>
        <h2 style={{textAlign: 'center', marginTop: '20px'}}>Không tìm thấy dữ liệu thú cưng.</h2>
      </div>
    );
  }

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
        {/* <button className="pd-edit-btn" onClick={() => alert("Tính năng đang phát triển")}>
          <FaEdit /> Chỉnh sửa
        </button> */}
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
              <button className="pd-btn-action pd-btn-outline" onClick={() => {navigate(`/medicine-history?id=${petId}`)}}>
                <FaStethoscope /> Lịch sử khám bệnh
              </button>
              <button className="pd-btn-action pd-btn-fill" onClick={() => {navigate(`/vaccination-history?id=${petId}`)}}>
                <FaSyringe /> Lịch sử tiêm phòng
              </button>
            </div>
          </div>

          <div className="pd-card">
            <h3 className="pd-card-title">Thao tác nhanh</h3>
            <div className="pd-quick-grid">
              <div className="pd-quick-btn" style={{cursor: 'pointer'}} onClick={() => navigate('/booking')}>
                <FaCalendarAlt className="pd-quick-icon" />
                <span className="pd-quick-label">Đặt lịch khám</span>
              </div>
              <div className="pd-quick-btn" style={{cursor: 'pointer'}} onClick={() => navigate('/booking-vaccine')}>
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