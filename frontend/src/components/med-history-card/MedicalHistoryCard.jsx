import React from 'react';
import './MedicalHistoryCard.css';
import { 
  FaStethoscope, 
  FaCalendarAlt, 
  FaCalendarCheck, 
  FaStar, 
  FaTag, 
  FaMoneyBillWave,
  FaNotesMedical 
} from 'react-icons/fa';

const MedicalHistoryCard = ({ record }) => {
  return (
    <div className="medical-history-card">
      {/* Header Section */}
      <div className="card-header">
        <div className="header-left">
          <div className="icon-circle">
            <FaStethoscope />
          </div>
          <div className="visit-info">
            <h3 className="visit-title">
              Khám ngày {record.date} <span className="visit-number">#{record.id}</span>
            </h3>
            <p className="doctor-name">Bác sĩ: {record.doctor}</p>
          </div>
        </div>
        
        {/* Action Buttons Group */}
        <div className="header-actions">
          <button className="btn-review">
            <FaStar className="star-icon" /> Đánh giá
          </button>
          <button className="btn-detail">Chi tiết</button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="card-body">
        
        {/* Info Grid: Dates, Service & Price */}
        <div className="info-grid-4">
          {/* Ngày khám */}
          <div className="info-group">
            <div className="info-label">
              <FaCalendarAlt className="info-icon" /> Ngày khám
            </div>
            <div className="info-value">{record.date}</div>
          </div>
          
          {/* Ngày tái khám */}
          <div className="info-group">
            <div className="info-label">
              <FaCalendarCheck className="info-icon" /> Ngày tái khám
            </div>
            <div className="info-value highlight-text">{record.followUpDate}</div>
          </div>

          {/* Dịch vụ */}
          <div className="info-group">
            <div className="info-label">
              <FaTag className="info-icon" /> Dịch vụ
            </div>
            <div className="info-value">{record.service}</div>
          </div>

          {/* Chi phí */}
          <div className="info-group">
            <div className="info-label">
              <FaMoneyBillWave className="info-icon" /> Chi phí
            </div>
            <div className="info-value price-text">{record.price}</div>
          </div>
        </div>

        {/* Symptoms */}
        <div className="info-full-width">
          <div className="info-label">Triệu chứng</div>
          <div className="info-box gray-bg">
            {record.symptoms}
          </div>
        </div>

        {/* Diagnosis */}
        <div className="info-full-width">
          <div className="info-label">Chẩn đoán</div>
          <div className="info-box purple-bg">
            {record.diagnosis}
          </div>
        </div>

        {/* Doctor Advice (New) */}
        <div className="info-full-width">
          <div className="info-label">
            <FaNotesMedical className="info-icon" /> Lời dặn bác sĩ
          </div>
          <div className="info-box advice-bg">
            {record.doctorAdvice}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MedicalHistoryCard;