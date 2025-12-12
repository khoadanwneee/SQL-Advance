import React, { useState } from 'react';
import './apm.css'; // Import file CSS

const AppointmentManagement = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Dữ liệu giả lập
  const appointments = [
    {
      id: "LH001",
      service: "Khám sức khỏe tổng quát",
      status: "pending", // pending | confirmed | completed
      createdTime: "12/12/2024 14:30",
      customer: {
        name: "Nguyễn Văn An",
        phone: "0901234567"
      },
      branch: "Chi nhánh Quận 1",
      date: "15/12/2024",
      time: "09:00"
    },
    {
      id: "LH002",
      service: "Tiêm phòng dại (Mũi 1)",
      status: "confirmed",
      createdTime: "12/12/2024 10:15",
      customer: {
        name: "Trần Thị B",
        phone: "0987654321"
      },
      branch: "Chi nhánh Quận 2",
      date: "16/12/2024",
      time: "14:30"
    }
  ];

  // SVG Icons
  const Icons = {
    Back: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
    CalendarCheck: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/></svg>,
    User: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    MapPin: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    Calendar: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    Clock: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    CheckCircle: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    AlertCircle: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
    Check: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
  };

  return (
    <div className="apm-container">
      {/* Header */}
      <div className="apm-header-section">
        <button className="apm-nav-back">
          <Icons.Back /> Quay lại
        </button>
        <div className="apm-title-row">
          <Icons.CalendarCheck />
          <h1 className="apm-page-title">Xử lý lịch hẹn</h1>
        </div>
        <p className="apm-page-subtitle">Quản lý và xác nhận các lịch hẹn từ khách hàng</p>
      </div>

      <div className="apm-content-wrapper">
        
        {/* Summary Stats */}
        <div className="apm-summary-grid">
          <div className="apm-stat-card">
            <div>
              <span className="apm-stat-label">Chờ xác nhận</span>
              <div className="apm-stat-number apm-text-yellow">6 lịch hẹn</div>
            </div>
            <div className="apm-icon-box apm-bg-yellow"><Icons.AlertCircle /></div>
          </div>
          <div className="apm-stat-card">
            <div>
              <span className="apm-stat-label">Đã xác nhận</span>
              <div className="apm-stat-number apm-text-green">2 lịch hẹn</div>
            </div>
            <div className="apm-icon-box apm-bg-green"><Icons.CheckCircle /></div>
          </div>
          <div className="apm-stat-card">
            <div>
              <span className="apm-stat-label">Hoàn thành</span>
              <div className="apm-stat-number apm-text-blue">1 lịch hẹn</div>
            </div>
            <div className="apm-icon-box apm-bg-blue"><Icons.CheckCircle /></div>
          </div>
        </div>

        {/* Filters */}
        <div className="apm-tabs-row">
          {['Tất cả (10)', 'Chờ xác nhận (6)', 'Đã xác nhận (2)', 'Hoàn thành (1)', 'Đã hủy'].map((tab, idx) => (
            <button 
              key={idx}
              className={`apm-tab-btn ${activeTab === (idx === 0 ? 'all' : tab) ? 'active' : ''}`}
              onClick={() => setActiveTab(idx === 0 ? 'all' : tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Appointment Lists */}
        <div className="apm-list">
          {appointments.map((apt) => (
            <div key={apt.id} className="apm-card">
              
              {/* Card Header: ID, Status, Time */}
              <div className="apm-card-header">
                <div>
                  <span className="apm-id-badge">#{apt.id}</span>
                  {apt.status === 'pending' ? (
                    <span className="apm-status-badge apm-status-pending">
                      <Icons.AlertCircle style={{width: 14}}/> Chờ xác nhận
                    </span>
                  ) : (
                    <span className="apm-status-badge apm-status-confirmed">
                      <Icons.CheckCircle style={{width: 14}}/> Đã xác nhận
                    </span>
                  )}
                </div>
                <div className="apm-created-time">
                  Giờ tạo<br/>{apt.createdTime}
                </div>
              </div>

              <h3 className="apm-service-name">{apt.service}</h3>

              {/* Grid Info */}
              <div className="apm-details-grid">
                
                {/* Khách hàng */}
                <div className="apm-detail-item">
                  <div className="apm-detail-icon"><Icons.User /></div>
                  <div className="apm-detail-text">
                    <label>Khách hàng</label>
                    <div>{apt.customer.name}</div>
                    <div className="apm-detail-sub">{apt.customer.phone}</div>
                  </div>
                </div>

                {/* Chi nhánh */}
                <div className="apm-detail-item">
                  <div className="apm-detail-icon"><Icons.MapPin /></div>
                  <div className="apm-detail-text">
                    <label>Chi nhánh</label>
                    <div>{apt.branch}</div>
                  </div>
                </div>

                {/* Ngày hẹn */}
                <div className="apm-detail-item">
                  <div className="apm-detail-icon"><Icons.Calendar /></div>
                  <div className="apm-detail-text">
                    <label>Ngày hẹn</label>
                    <div>{apt.date}</div>
                  </div>
                </div>

                {/* Giờ hẹn */}
                <div className="apm-detail-item">
                  <div className="apm-detail-icon"><Icons.Clock /></div>
                  <div className="apm-detail-text">
                    <label>Giờ hẹn</label>
                    <div>{apt.time}</div>
                  </div>
                </div>

              </div>

              {/* Action Button */}
              {apt.status === 'pending' && (
                <div className="apm-action-row">
                  <button className="apm-btn-confirm">
                    <Icons.Check /> Xác nhận
                  </button>
                </div>
              )}
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentManagement;