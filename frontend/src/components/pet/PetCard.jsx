import React from 'react';
import './PetCard.css';
import { FaPaw } from 'react-icons/fa'; // Cần cài: npm install react-icons
import { useNavigate } from 'react-router';

const PetCard = ({ pet }) => {
  // Xử lý hiển thị giới tính
  const isMale = pet.gender === 'Đực';
  const genderClass = isMale ? 'gender-male' : 'gender-female';
  const navigate  = useNavigate();

  return (
    <div className="pet-card">
      <div className="pet-image-container">
        <img src={pet.image} alt={pet.name} className="pet-image" />
      </div>

      <div className="pet-content">
        <div className="pet-header">
          <div>
            <h3 className="pet-name">{pet.name}</h3>
            <p className="pet-age">{pet.age} tuổi</p>
          </div>
          <div className="pet-icon-wrapper">
            <FaPaw size={18} />
          </div>
        </div>

        <div className="pet-info-row">
          <span className="info-label">Loài:</span>
          <span className="info-value">{pet.species}</span>
        </div>

        <div className="pet-info-row">
          <span className="info-label">Giống:</span>
          <span className="info-value">{pet.breed}</span>
        </div>

        <div className="pet-info-row">
          <span className="info-label">Giới tính:</span>
          <span className={`gender-badge ${genderClass}`}>{pet.gender}</span>
        </div>

        <div className="pet-actions">
          <button className="btn btn-outline" onClick={() => {navigate('/my-pets/detail');}}>Chi tiết</button>
          <button className="btn btn-primary">Đặt lịch khám</button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;