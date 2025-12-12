import React, { useState } from 'react';
import './vpb.css';

const VaccinationBooking = () => {
  // State quản lý dữ liệu form
  const [formData, setFormData] = useState({
    package: '',
    shot: '',
    branch: '',
    date: '',
    time: '',
    petName: '',
    petType: '',
    note: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // SVG Icons (Vẽ trực tiếp để không phụ thuộc thư viện)
  const Icons = {
    Back: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
    Syringe: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"/><path d="M21 3L18 6"/><path d="M3 21L6 18"/><path d="M15 9L9 15"/><path d="M14 4L20 10"/></svg>, // Icon kim tiêm
    Shield: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, // Icon bảo vệ
    MapPin: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    Calendar: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    Clock: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    SmallSyringe: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"/><path d="M21 3L18 6"/><path d="M3 21L6 18"/><path d="M15 9L9 15"/><path d="M14 4L20 10"/></svg>
  };

  return (
    <div className="vbp-container">
      {/* Header */}
      <div className="vbp-header-section">
        <button className="vbp-nav-back">
          <Icons.Back /> Quay lại
        </button>
        <div className="vbp-title-row">
          <Icons.Syringe />
          <h1 className="vbp-page-title">Đặt lịch tiêm phòng</h1>
        </div>
        <p className="vbp-page-subtitle">Đặt lịch tiêm vắc-xin bảo vệ sức khỏe cho thú cưng của bạn</p>
      </div>

      {/* Main Form */}
      <div className="vbp-content-wrapper">
        <div className="vbp-card">
          
          {/* Gói tiêm */}
          <div className="vbp-form-group">
            <label className="vbp-label">
              <span className="vbp-label-icon"><Icons.Shield /></span>
              Gói tiêm <span className="vbp-required">*</span>
            </label>
            <select 
              className="vbp-select"
              name="package"
              value={formData.package}
              onChange={handleChange}
            >
              <option value="">-- Chọn gói tiêm --</option>
              <option value="pkg-cat-5">Gói tiêm phòng 5 bệnh cho mèo</option>
              <option value="pkg-dog-7">Gói tiêm phòng 7 bệnh cho chó</option>
              <option value="pkg-rabies">Tiêm phòng dại lẻ</option>
            </select>
          </div>

          {/* Mũi tiêm */}
          <div className="vbp-form-group">
            <label className="vbp-label">
              <span className="vbp-label-icon"><Icons.SmallSyringe /></span>
              Mũi tiêm <span className="vbp-required">*</span>
            </label>
            <select 
              className="vbp-select"
              name="shot"
              value={formData.shot}
              onChange={handleChange}
              disabled={!formData.package} // Disable nếu chưa chọn gói
            >
              <option value="">-- Chọn mũi tiêm --</option>
              <option value="1">Mũi 1</option>
              <option value="2">Mũi 2</option>
              <option value="3">Mũi 3</option>
              <option value="nhac-lai">Mũi nhắc lại hàng năm</option>
            </select>
            <div className="vbp-helper-text">Vui lòng chọn gói tiêm trước</div>
          </div>

          {/* Chi nhánh */}
          <div className="vbp-form-group">
            <label className="vbp-label">
              <span className="vbp-label-icon"><Icons.MapPin /></span>
              Chi nhánh <span className="vbp-required">*</span>
            </label>
            <select 
              className="vbp-select"
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

          {/* Ngày & Giờ (2 cột) */}
          <div className="vbp-row-2">
            <div className="vbp-form-group">
              <label className="vbp-label">
                <span className="vbp-label-icon"><Icons.Calendar /></span>
                Ngày hẹn <span className="vbp-required">*</span>
              </label>
              <input 
                type="date" 
                className="vbp-input"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="vbp-form-group">
              <label className="vbp-label">
                <span className="vbp-label-icon"><Icons.Clock /></span>
                Giờ hẹn <span className="vbp-required">*</span>
              </label>
              <select 
                className="vbp-select"
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

          {/* Phần Thông tin thú cưng */}
          <div className="vbp-section-header">Thông tin thú cưng</div>

          <div className="vbp-row-2">
            <div className="vbp-form-group">
              <label className="vbp-label">
                Tên thú cưng <span className="vbp-required">*</span>
              </label>
              <input 
                type="text" 
                className="vbp-input"
                placeholder="Nhập tên thú cưng"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
              />
            </div>
            <div className="vbp-form-group">
              <label className="vbp-label">
                Loại thú cưng <span className="vbp-required">*</span>
              </label>
              <select 
                className="vbp-select"
                name="petType"
                value={formData.petType}
                onChange={handleChange}
              >
                <option value="">-- Chọn loại --</option>
                <option value="dog">Chó</option>
                <option value="cat">Mèo</option>
                <option value="other">Khác</option>
              </select>
            </div>
          </div>

          <div className="vbp-form-group">
            <label className="vbp-label">Ghi chú</label>
            <textarea 
              className="vbp-textarea"
              placeholder="Nhập ghi chú về tình trạng sức khỏe hoặc lịch sử tiêm chủng (không bắt buộc)"
              name="note"
              value={formData.note}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Important Notice (Lưu ý quan trọng) */}
          <div className="vbp-notice-box">
            <span className="vbp-notice-title">Lưu ý quan trọng:</span>
            <ul className="vbp-notice-list">
              <li>Thú cưng cần khỏe mạnh trước khi tiêm phòng</li>
              <li>Mang theo sổ tiêm chủng (nếu đã tiêm mũi trước)</li>
              <li>Cần đúng lịch giữa các mũi tiêm (thường 21-30 ngày)</li>
              <li>Thú cưng cần tẩy giun trước tiêm phòng 7-10 ngày</li>
              <li>Sau tiêm, theo dõi thú cưng trong 24-48 giờ</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="vbp-actions">
            <button className="vbp-btn vbp-btn-cancel">
              Hủy
            </button>
            <button className="vbp-btn vbp-btn-submit">
              Xác nhận
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VaccinationBooking;