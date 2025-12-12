import React from 'react';
import './PetCard.css';
import { FaPaw } from 'react-icons/fa'; // Cần cài: npm install react-icons
import { useNavigate } from 'react-router';

const PetCard = ({ pet }) => {
  // Xử lý hiển thị giới tính
  const isMale = pet.gender === 'Đực';
  const genderClass = isMale ? 'gender-male' : 'gender-female';
  const navigate = useNavigate();

  const calculateAge = (dateString) => {
    const birthDate = new Date(dateString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }


  return (
    <div className="pet-card">
      <div className="pet-image-container">
        <img src={'https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'} alt={pet.TenThuCung} className="pet-image" />
      </div>

      <div className="pet-content">
        <div className="pet-header">
          <div>
            <h3 className="pet-name">{pet.TenThuCung}</h3>
            <p className="pet-age">{calculateAge(pet.NgaySinh)} tuổi</p>
          </div>
          <div className="pet-icon-wrapper">
            <FaPaw size={18} />
          </div>
        </div>

        <div className="pet-info-row">
          <span className="info-label">Loài:</span>
          <span className="info-value">{pet.Loai}</span>
        </div>

        <div className="pet-info-row">
          <span className="info-label">Giống:</span>
          <span className="info-value">{pet.Giong}</span>
        </div>

        <div className="pet-info-row">
          <span className="info-label">Giới tính:</span>
          <span className={`gender-badge ${genderClass}`}>{pet.GioiTinh}</span>
        </div>

        <div className="pet-actions">
          <button className="btn btn-outline" onClick={() => { navigate(`/my-pets/detail?id=${pet.MaThuCung}`); }}>Chi tiết</button>
          <button className="btn btn-primary">Đặt lịch khám</button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;