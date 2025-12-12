import React from 'react';
import './vdp.css'; // Import file CSS ở trên

const VaccinationDetail = () => {
  // Dữ liệu giả lập theo hình ảnh
  const packageData = {
    name: "Gói tiêm phòng 5 bệnh (DHPPL)",
    status: "Đang thực hiện",
    totalShots: 3,
    completedShots: 2,
  };

  const shots = [
    {
      id: 1,
      order: 1,
      doctor: "BS. Nguyễn Văn A",
      status: "done", // done | pending
      date: "05/11/2024",
      nextDate: "05/12/2024",
      health: "Tốt",
      reaction: "Không có phản ứng bất thường, thú cưng ăn uống bình thường",
      canRate: true,
    },
    {
      id: 2,
      order: 2,
      doctor: "BS. Trần Thị B",
      status: "done",
      date: "05/12/2024",
      nextDate: "05/01/2025",
      health: "Tốt",
      reaction: "Hơi mệt mỏi trong 24h đầu, sau đó hoạt động bình thường",
      canRate: true,
    },
    {
      id: 3,
      order: 3,
      doctor: "",
      status: "pending",
      date: "05/01/2025", // Dự kiến
      nextDate: "05/02/2025", // Dự kiến
      health: "Chưa tiêm",
      reaction: "Chưa có thông tin",
      canRate: false,
    }
  ];

  // Icons (SVG Component nhỏ gọn để không cần thư viện)
  const IconBack = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>;
  const IconClock = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
  const IconSyringe = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"></path><path d="M21 3L18 6"></path><path d="M3 21L6 18"></path><path d="M15 9L9 15"></path><path d="M14 4L20 10"></path></svg>;
  const IconEdit = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>;
  const IconCalendar = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
  const IconTime = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
  const IconHeart = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;
  const IconInfo = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
  const IconCheck = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
  const IconStar = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;

  return (
    <div className="vdp-wrapper">
      {/* Header */}
      <header className="vdp-header">
        <button className="vdp-back-btn"><IconBack /></button>
        <div className="vdp-title">
          <h1>Chi tiết lần tiêm phòng</h1>
          <span>Luna</span>
        </div>
      </header>

      {/* Package Overview Card */}
      <div className="vdp-card">
        <div className="vdp-overview-header">
          <div className="vdp-icon-circle vdp-icon-yellow">
            <IconClock />
          </div>
          <div className="vdp-overview-info">
            <label className="vdp-label">Tên gói tiêm</label>
            <div className="vdp-value-large">{packageData.name}</div>
            <span className="vdp-badge vdp-badge-yellow">{packageData.status}</span>
          </div>
        </div>
        
        <div className="vdp-progress-section">
          <div className="vdp-progress-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <IconEdit /> Số mũi đã tiêm
            </div>
            <span>{packageData.completedShots}/{packageData.totalShots} mũi</span>
          </div>
          <div className="vdp-progress-bar-bg">
            <div 
              className="vdp-progress-bar-fill" 
              style={{ width: `${(packageData.completedShots / packageData.totalShots) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <h2 className="vdp-section-title">Chi tiết từng mũi tiêm</h2>

      {/* Shot Lists */}
      {shots.map((shot) => (
        <div key={shot.id} className="vdp-card">
          {/* Card Header */}
          <div className="vdp-shot-header">
            <div className="vdp-shot-left">
              <div className={`vdp-icon-circle ${shot.status === 'done' ? 'vdp-icon-purple' : 'vdp-icon-gray'}`}>
                <IconSyringe />
              </div>
              <div>
                <div className="vdp-value-large">Số thứ tự mũi tiêm: #{shot.order}</div>
                {shot.doctor && <div className="vdp-doctor-name">Bác sĩ: {shot.doctor}</div>}
                <span className={`vdp-badge ${shot.status === 'done' ? 'vdp-badge-green' : 'vdp-badge-gray'}`}>
                  {shot.status === 'done' ? 'Đã tiêm' : 'Chưa tiêm'}
                </span>
              </div>
            </div>
            
            {shot.canRate && (
              <button className="vdp-rate-btn">
                <IconStar /> Đánh giá
              </button>
            )}
          </div>

          {/* Dates Row */}
          <div className="vdp-grid-row">
            <div className="vdp-input-group">
              <label><IconCalendar /> Ngày tiêm</label>
              <div className="vdp-input-display">{shot.date}</div>
            </div>
            <div className="vdp-input-group">
              <label><IconTime /> Ngày tái hẹn</label>
              <div className="vdp-input-display">{shot.nextDate}</div>
            </div>
          </div>

          {/* Health Status */}
          <div className="vdp-input-group" style={{ marginBottom: '20px' }}>
            <label><IconHeart /> Tình trạng sức khỏe</label>
            <div className={`vdp-health-box ${shot.status !== 'done' ? 'pending' : ''}`}>
              {shot.status === 'done' ? (
                <div className="vdp-health-text">
                  <IconCheck /> {shot.health}
                </div>
              ) : (
                <div className="vdp-health-text" style={{ color: '#9ca3af' }}>
                  <IconTime /> {shot.health}
                </div>
              )}
            </div>
          </div>

          {/* Reaction */}
          <div className="vdp-input-group">
            <label><IconInfo /> Phản ứng sau tiêm</label>
            <div className="vdp-reaction-box">
              {shot.status === 'done' ? (
                <span>{shot.reaction}</span>
              ) : (
                <span className="vdp-italic">{shot.reaction}</span>
              )}
            </div>
          </div>
        </div>
      ))}
      
      {/* Footer Note Example (from image 4) */}
      <div className="vdp-upcoming-note">
        <IconTime /> 
        <div>
          <strong>Lịch hẹn sắp tới</strong>
          <div style={{marginTop: '4px'}}>Mũi tiêm này dự kiến được thực hiện vào ngày 05/01/2025. Vui lòng đến đúng giờ để đảm bảo hiệu quả tiêm phòng.</div>
        </div>
      </div>

    </div>
  );
};

export default VaccinationDetail;