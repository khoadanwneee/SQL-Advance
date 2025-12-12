import React, { useState } from 'react';
import './book-apm.css'; 
const BookingAppointment = () => {
  // State quản lý dữ liệu form
  const [formData, setFormData] = useState({
    service: '',
    branch: '',
    date: '',
    time: '',
    petName: '',
    note: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // SVG Icons
  const Icons = {
    Back: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
    CalendarPlus: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="10" y1="16" x2="14" y2="16"/><line x1="12" y1="14" x2="12" y2="18"/></svg>,
    Stethoscope: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 0 1 5 2h14a.3.3 0 0 1 .3.3v4a.3.3 0 0 1-.3.3H5a.3.3 0 0 1-.3-.3V2.3zM6 14a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-4"/><path d="M11 2v9a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4V2"/><path d="M13 13v4a4 4 0 0 0-4 4"/></svg>, // Icon tượng trưng dịch vụ
    MapPin: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    Calendar: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    Clock: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  };

  return (
    <div className="bap-container">
      {/* Header */}
      <div className="bap-header-section">
        <button className="bap-nav-back">
          <Icons.Back /> Quay lại
        </button>
        <div className="bap-title-row">
          <Icons.CalendarPlus />
          <h1 className="bap-page-title">Đặt lịch hẹn</h1>
        </div>
        <p className="bap-page-subtitle">Đặt lịch khám và chăm sóc cho thú cưng của bạn</p>
      </div>

      {/* Main Form Content */}
      <div className="bap-content-wrapper">
        <div className="bap-card">
          
          {/* Service Selection */}
          <div className="bap-form-group">
            <label className="bap-label">
              <span className="bap-label-icon"><Icons.Stethoscope /></span>
              Dịch vụ khám <span className="bap-required">*</span>
            </label>
            <select 
              className="bap-select"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">-- Chọn dịch vụ --</option>
              <option value="kham-tong-quat">Khám sức khỏe tổng quát</option>
              <option value="tiem-phong">Tiêm phòng</option>
              <option value="spa">Spa & Cắt tỉa lông</option>
            </select>
          </div>

          {/* Branch Selection */}
          <div className="bap-form-group">
            <label className="bap-label">
              <span className="bap-label-icon"><Icons.MapPin /></span>
              Chi nhánh <span className="bap-required">*</span>
            </label>
            <select 
              className="bap-select"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
            >
              <option value="">-- Chọn chi nhánh --</option>
              <option value="qn1">Chi nhánh Quận 1</option>
              <option value="qn2">Chi nhánh Quận 2</option>
              <option value="qn7">Chi nhánh Quận 7</option>
            </select>
          </div>

          {/* Date & Time Row */}
          <div className="bap-row-2">
            <div className="bap-form-group">
              <label className="bap-label">
                <span className="bap-label-icon"><Icons.Calendar /></span>
                Ngày hẹn <span className="bap-required">*</span>
              </label>
              <input 
                type="date" 
                className="bap-input"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="bap-form-group">
              <label className="bap-label">
                <span className="bap-label-icon"><Icons.Clock /></span>
                Giờ hẹn <span className="bap-required">*</span>
              </label>
              <select 
                className="bap-select"
                name="time"
                value={formData.time}
                onChange={handleChange}
              >
                <option value="">-- Chọn giờ --</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="14:00">14:00</option>
                <option value="15:30">15:30</option>
              </select>
            </div>
          </div>

          {/* Pet Information Section */}
          <div className="bap-section-header">Thông tin thú cưng</div>

          <div className="bap-form-group">
            <label className="bap-label">
              Tên thú cưng <span className="bap-required">*</span>
            </label>
            <input 
              type="text" 
              className="bap-input" 
              placeholder="Nhập tên thú cưng"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
            />
          </div>

          <div className="bap-form-group">
            <label className="bap-label">Ghi chú</label>
            <textarea 
              className="bap-textarea"
              placeholder="Nhập ghi chú về triệu chứng hoặc yêu cầu đặc biệt (không bắt buộc)"
              name="note"
              value={formData.note}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Notice Box */}
          <div className="bap-note-box">
            <span className="bap-note-title">Lưu ý:</span>
            Sau khi đặt lịch, chúng tôi sẽ liên hệ xác nhận qua số điện thoại trong vòng 24 giờ. Vui lòng đến đúng giờ và mang theo sổ tiêm chủng (nếu có).
          </div>

          {/* Action Buttons */}
          <div className="bap-actions">
            <button className="bap-btn bap-btn-cancel">
              Hủy
            </button>
            <button className="bap-btn bap-btn-submit">
              Xác nhận
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingAppointment;