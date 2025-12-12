import React from 'react';
import MedicalHistoryCard from '../../../components/med-history-card/MedicalHistoryCard';
import './MedicalHistoryPage.css';
import { FaArrowLeft, FaCalendarPlus } from 'react-icons/fa';

const MedicalHistoryPage = ({ petName = "Bobby", onBack }) => {
  // Mock Data based on your requirements
  const historyData = [
    {
      id: 1,
      date: '15/11/2024',
      doctor: 'BS. Nguyễn Văn A',
      followUpDate: '22/11/2024',
      symptoms: 'Sốt nhẹ, chán ăn, ít vận động hơn bình thường',
      diagnosis: 'Viêm đường hô hấp nhẹ'
    },
    {
      id: 2,
      date: '20/08/2024',
      doctor: 'BS. Trần Thị B',
      followUpDate: 'Không',
      symptoms: 'Ngứa nhiều vùng tai, hay lắc đầu',
      diagnosis: 'Viêm tai ngoài do nấm'
    },
    {
      id: 3,
      date: '10/05/2024',
      doctor: 'BS. Lê Văn C',
      followUpDate: '10/11/2024',
      symptoms: 'Khám sức khỏe định kỳ',
      diagnosis: 'Sức khỏe tốt, không có dấu hiệu bất thường'
    }
  ];

  return (
    <div className="history-page-wrapper">
      <div className="page-header">
        <div className="header-left-group">
          <button className="back-button" onClick={onBack}>
            <FaArrowLeft />
          </button>
          <div className="header-titles">
            <h1 className="main-title">Lịch sử khám bệnh</h1>
            <p className="sub-title">{petName}</p>
          </div>
        </div>
        
        <button className="btn-new-appointment">
          Đặt lịch khám mới
        </button>
      </div>

      <div className="history-list-container">
        {historyData.map((record) => (
          <MedicalHistoryCard key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
};

export default MedicalHistoryPage;