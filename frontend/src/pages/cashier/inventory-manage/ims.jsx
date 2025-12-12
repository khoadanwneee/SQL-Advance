import React, { useState } from 'react';
import './ims.css'; // Import file CSS

const InventoryManagement = () => {
  // State quản lý input
  const [branch, setBranch] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // SVG Icons (Khai báo trực tiếp để không cần thư viện)
  const Icons = {
    Back: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
    Box: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
    Warning: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
    TrendUp: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
    Search: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
    SmallTrend: () => <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> // Simplified for badge
  };

  return (
    <div className="ims-container">
      {/* 1. Header Section */}
      <div className="ims-header-section">
        <button className="ims-nav-back">
          <Icons.Back /> Quay lại
        </button>
        
        <div className="ims-page-title-row">
          <Icons.Box /> 
          <h1 className="ims-page-title">Quản lý hàng tồn kho</h1>
        </div>
        <p className="ims-page-subtitle">Theo dõi và quản lý số lượng sản phẩm tại các chi nhánh</p>
      </div>

      {/* 2. Main Content (Floats up) */}
      <div className="ims-content-wrapper">
        
        {/* Summary Statistics Cards */}
        <div className="ims-summary-row">
          {/* Card 1 */}
          <div className="ims-stat-card">
            <div className="ims-stat-info">
              <label>Tổng sản phẩm</label>
              <div className="ims-stat-value purple">12</div>
            </div>
            <div className="ims-stat-icon ims-bg-purple-light">
              <Icons.Box />
            </div>
          </div>

          {/* Card 2 */}
          <div className="ims-stat-card">
            <div className="ims-stat-info">
              <label>Sản phẩm sắp hết</label>
              <div className="ims-stat-value red">3</div>
            </div>
            <div className="ims-stat-icon ims-bg-red-light">
              <Icons.Warning />
            </div>
          </div>

          {/* Card 3 */}
          <div className="ims-stat-card">
            <div className="ims-stat-info">
              <label>Tổng giá trị hàng tồn</label>
              <div className="ims-stat-value green">76.635.000đ</div>
            </div>
            <div className="ims-stat-icon ims-bg-green-light">
              <Icons.TrendUp />
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="ims-filter-box">
          <div className="ims-filter-row">
            <div className="ims-input-group">
              <label>Nhập chi nhánh</label>
              <select 
                className="ims-select"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              >
                <option value="all">Tất cả chi nhánh</option>
                <option value="q1">Chi nhánh Quận 1</option>
                <option value="q2">Chi nhánh Quận 2</option>
              </select>
            </div>

            <div className="ims-input-group" style={{ flex: 2 }}>
              <label>Nhập sản phẩm</label>
              <input 
                type="text" 
                className="ims-input"
                placeholder="Tìm theo tên hoặc loại sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button className="ims-search-btn">
              <Icons.Search /> Tìm kiếm
            </button>
          </div>
        </div>

        {/* Product List Section */}
        <div className="ims-product-list">
          
          {/* Product Card Example */}
          <div className="ims-product-card">
            {/* Image Placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
              alt="Cat" 
              className="ims-prod-img" 
            />
            
            <div className="ims-prod-content">
              <div className="ims-prod-header">
                <div className="ims-prod-title">
                  <h3>Thức ăn cho chó Royal Canin</h3>
                  <span className="ims-prod-cat">Thức ăn</span>
                </div>
                <div className="ims-status-badge">
                  <span style={{fontSize: '14px'}}>↗</span> Đủ hàng
                </div>
              </div>

              <div className="ims-prod-grid">
                <div className="ims-data-point">
                  <span>Chi nhánh</span>
                  <span>Chi nhánh Quận 1</span>
                </div>
                <div className="ims-data-point">
                  <span>Số lượng tồn</span>
                  <span className="ims-text-purple">45 sản phẩm</span>
                </div>
                <div className="ims-data-point">
                  <span>Mức tồn tối thiểu</span>
                  <span>20 sản phẩm</span>
                </div>
                <div className="ims-data-point">
                  <span>Giá bán</span>
                  <span>450.000đ</span>
                </div>
              </div>
            </div>
          </div>
          {/* End Product Card */}

        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;