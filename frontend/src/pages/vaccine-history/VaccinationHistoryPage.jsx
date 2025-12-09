import React from 'react';
import VaccinationHistoryCard from '../../components/vaccine-card/VaccinationHistoryCard';
import './VaccinationHistoryPage.css';
import { FaArrowLeft } from 'react-icons/fa';

const VaccinationHistoryPage = ({ petName = "Bobby", onBack }) => {
  // Mock Data
  const historyData = [
    {
      id: 2,
      vaccineName: 'Vắc-xin dại (Rabies)',
      clinicName: 'PetCareX Chi nhánh 1',
      status: 'Hoàn tất',
      registrationDate: '15/09/2024',
      nextAppointment: '15/09/2025',
      shots: '1/1'
    },
    {
      id: 1,
      vaccineName: 'Gói tiêm phòng 5 bệnh (DHPPL)',
      clinicName: 'PetCareX Chi nhánh 1',
      status: 'Chưa hoàn tất',
      registrationDate: '05/11/2024',
      nextAppointment: '05/12/2024',
      shots: '2/3'
    }
  ];

  return (
    <div className="vaccine-page-wrapper">
      <div className="page-header">
        <div className="header-left-group">
          <button className="back-button" onClick={onBack}>
            <FaArrowLeft />
          </button>
          <div className="header-titles">
            <h1 className="main-title">Hồ sơ tiêm phòng</h1>
            <p className="sub-title">{petName}</p>
          </div>
        </div>
        
        <button className="btn-new-vaccine">
          Đăng ký tiêm chủng mới
        </button>
      </div>

      <div className="vaccine-list-container">
        {historyData.map((record) => (
          <VaccinationHistoryCard key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
};

export default VaccinationHistoryPage;