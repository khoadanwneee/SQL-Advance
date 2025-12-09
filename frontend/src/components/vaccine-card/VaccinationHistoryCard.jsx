import React from 'react';
import './VaccinationHistoryCard.css';
import { FaShieldAlt, FaCalendarPlus, FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const VaccinationHistoryCard = ({ record }) => {
  // Calculate progress percentage
  const [current, total] = record.shots.split('/').map(Number);
  const progressPercent = (current / total) * 100;
  
  const isCompleted = record.status === 'Hoàn tất';

  const navigate = useNavigate();

  return (
    <div className="vaccine-card">
      {/* Header Section */}
      <div className="vaccine-header">
        <div className="header-left">
          <div className={`icon-circle ${isCompleted ? 'icon-green' : 'icon-yellow'}`}>
            <FaShieldAlt />
          </div>
          <div className="vaccine-info">
            <h3 className="vaccine-title">
              {record.vaccineName}
            </h3>
            <p className="clinic-name">Phòng khám: {record.clinicName}</p>
            <div className="badge-row">
              <span className={`status-badge ${isCompleted ? 'badge-green' : 'badge-yellow'}`}>
                {record.status}
              </span>
              <span className="id-badge">#{record.id}</span>
            </div>
          </div>
        </div>
        <button className="btn-detail" onClick={() => {navigate('/vaccination/detail');}}>Chi tiết</button>
      </div>

      {/* Body Section */}
      <div className="vaccine-body">
        
        {/* Dates Row */}
        <div className="date-row">
          <div className="date-group">
            <div className="date-label">
              <FaCalendarPlus /> Ngày đăng ký
            </div>
            <div className="date-value">{record.registrationDate}</div>
          </div>
          
          <div className="date-group">
            <div className="date-label">
              <FaClock /> Ngày hẹn tiếp theo
            </div>
            <div className="date-value">{record.nextAppointment}</div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="progress-section">
          <div className="progress-label-row">
            <span className="progress-label">Số mũi đã tiêm</span>
            <span className="progress-value">{record.shots} mũi</span>
          </div>
          <div className="progress-track">
            <div 
              className={`progress-fill ${isCompleted ? 'fill-green' : 'fill-yellow'}`} 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VaccinationHistoryCard;