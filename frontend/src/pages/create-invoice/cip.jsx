import React, { useState, useEffect } from 'react';
import './cip.css'; // Import file CSS

const CreateInvoicePage = () => {
  // State Management
  const [customerName, setCustomerName] = useState('');
  const [products, setProducts] = useState([]); // Array of {id, name, price, qty}
  const [paymentMethod, setPaymentMethod] = useState('Tiền mặt');
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [invoiceType, setInvoiceType] = useState('Bán hàng');
  const [status, setStatus] = useState('Chưa thanh toán');
  const [address, setAddress] = useState('');

  // Tính toán
  const subtotal = products.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const finalTotal = subtotal * (1 - discount / 100); // Đơn giản hóa logic giảm giá

  // Handlers
  const handleAddProduct = () => {
    // Giả lập thêm sản phẩm như trong ảnh
    const newProduct = {
      id: Date.now(),
      name: "Thức ăn hạt Royal Canin cho chó",
      price: 425000,
      qty: 1
    };
    setProducts([...products, newProduct]);
  };

  const updateQty = (id, delta) => {
    setProducts(products.map(p => {
      if (p.id === id) {
        const newQty = Math.max(1, p.qty + delta);
        return { ...p, qty: newQty };
      }
      return p;
    }));
  };

  const removeProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // Format tiền tệ
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
  };

  // SVGs Icons
  const Icons = {
    Back: () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
    User: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    Cart: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>,
    Plus: () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>,
    CreditCard: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><path d="M1 10h22"/></svg>,
    Gift: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
    Tag: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
    File: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
    MapPin: () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    Trash: () => <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>,
    Money: () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
    Document: () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
  };

  return (
    <div className="cni-container">
      {/* Header */}
      <div className="cni-header">
        <button className="cni-back-btn">
          <Icons.Back />
        </button>
        <div className="cni-page-title">
          <h1>Tạo hóa đơn mới</h1>
          <p>Điền thông tin hóa đơn</p>
        </div>
      </div>

      <div className="cni-grid">
        {/* Left Column: Form Inputs */}
        <div className="cni-main-content">
          
          {/* Section 1: Thông tin khách hàng */}
          <div className="cni-card">
            <div className="cni-card-header">
              <div className="cni-icon-circle">
                <Icons.User />
              </div>
              <span className="cni-card-title">Thông tin khách hàng</span>
            </div>
            <div className="cni-form-group">
              <label className="cni-label">Khách hàng <span className="cni-required">*</span></label>
              <input 
                type="text" 
                className="cni-input" 
                placeholder="Nhập tên khách hàng"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
          </div>

          {/* Section 2: Danh sách sản phẩm */}
          <div className="cni-card">
            <div className="cni-product-header">
              <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                <div className="cni-icon-circle">
                  <Icons.Cart />
                </div>
                <span className="cni-card-title">Danh sách các sản phẩm đã mua</span>
              </div>
              <button className="cni-add-btn" onClick={handleAddProduct}>
                <Icons.Plus /> Thêm sản phẩm
              </button>
            </div>

            {products.length === 0 ? (
              <div className="cni-empty-state">
                <div className="cni-empty-icon">
                  <Icons.Cart style={{width: 60, height: 60, opacity: 0.3}} />
                </div>
                Chưa có sản phẩm nào được chọn
              </div>
            ) : (
              <div>
                {products.map(product => (
                  <div key={product.id} className="cni-product-item">
                    <div className="cni-prod-info">
                      <div className="cni-prod-name">{product.name}</div>
                      <div className="cni-prod-price">{formatCurrency(product.price)}</div>
                    </div>
                    <div className="cni-qty-control">
                      <button className="cni-qty-btn" onClick={() => updateQty(product.id, -1)}>-</button>
                      <input type="text" className="cni-qty-input" value={product.qty} readOnly />
                      <button className="cni-qty-btn" onClick={() => updateQty(product.id, 1)}>+</button>
                    </div>
                    <div style={{minWidth: '100px', textAlign: 'right', fontWeight: 500, marginRight: '16px'}}>
                      {formatCurrency(product.price * product.qty)}
                    </div>
                    <button className="cni-delete-btn" onClick={() => removeProduct(product.id)}>
                      <Icons.Trash />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 3: Thanh toán & Ưu đãi */}
          <div className="cni-card">
            <div className="cni-card-header">
              <div className="cni-icon-circle">
                <Icons.CreditCard />
              </div>
              <span className="cni-card-title">Thanh toán & Ưu đãi</span>
            </div>
            
            <div className="cni-row-2">
              <div className="cni-col">
                <div className="cni-form-group">
                  <label className="cni-label">Hình thức thanh toán <span className="cni-required">*</span></label>
                  <select 
                    className="cni-select"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <option value="Tiền mặt">Tiền mặt</option>
                    <option value="Chuyển khoản">Chuyển khoản</option>
                    <option value="Thẻ">Thẻ</option>
                  </select>
                </div>
              </div>
              <div className="cni-col">
                <div className="cni-form-group">
                  <label className="cni-label">Điểm loyalty sử dụng (Có 1000 điểm)</label>
                  <div className="cni-input-icon-wrapper">
                    <input 
                      type="number" 
                      className="cni-input" 
                      value={loyaltyPoints}
                      onChange={(e) => setLoyaltyPoints(e.target.value)}
                    />
                    <div className="cni-input-icon"><Icons.Gift /></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cni-form-group">
              <label className="cni-label">Ưu đãi giảm giá (%)</label>
              <div className="cni-input-icon-wrapper">
                <input 
                  type="number" 
                  className="cni-input" 
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <div className="cni-input-icon"><Icons.Tag /></div>
              </div>
            </div>
          </div>

          {/* Section 4: Chi tiết hóa đơn */}
          <div className="cni-card">
            <div className="cni-card-header">
              <div className="cni-icon-circle">
                <Icons.File />
              </div>
              <span className="cni-card-title">Chi tiết hóa đơn</span>
            </div>

            <div className="cni-row-2">
              <div className="cni-col">
                <div className="cni-form-group">
                  <label className="cni-label">Loại hóa đơn <span className="cni-required">*</span></label>
                  <select 
                    className="cni-select"
                    value={invoiceType}
                    onChange={(e) => setInvoiceType(e.target.value)}
                  >
                    <option value="Bán hàng">Bán hàng</option>
                    <option value="Đổi trả">Đổi trả</option>
                  </select>
                </div>
              </div>
              <div className="cni-col">
                <div className="cni-form-group">
                  <label className="cni-label">Trạng thái <span className="cni-required">*</span></label>
                  <select 
                    className="cni-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Chưa thanh toán">Chưa thanh toán</option>
                    <option value="Đã thanh toán">Đã thanh toán</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="cni-form-group">
              <label className="cni-label">Địa chỉ giao</label>
              <div className="cni-input-icon-wrapper">
                <input 
                  type="text" 
                  className="cni-input" 
                  placeholder="Nhập địa chỉ giao hàng (nếu có)"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div className="cni-input-icon" style={{left: '12px', right: 'auto', color: '#9333ea'}}><Icons.MapPin /></div>
                {/* Adjust padding for left icon */}
                <style>{`.cni-input[placeholder*="địa chỉ"] { padding-left: 36px; }`}</style>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Summary */}
        <div className="cni-sidebar">
          <div className="cni-card">
            <div className="cni-summary-title">Tổng quan hóa đơn</div>
            
            <div className="cni-summary-row">
              <span>Tạm tính</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            
            {discount > 0 && (
              <div className="cni-summary-row" style={{color: '#22c55e'}}>
                <span>Giảm giá</span>
                <span>-{discount}%</span>
              </div>
            )}

            <div className="cni-summary-row cni-summary-total">
              <span>Tổng cộng</span>
              <span className="cni-total-price">{formatCurrency(finalTotal)}</span>
            </div>

            <div className="cni-info-list">
              <div className="cni-info-item">
                <Icons.User style={{width: 16}}/>
                <span>{customerName || 'Chưa nhập khách hàng'}</span>
              </div>
              <div className="cni-info-item">
                <Icons.Cart style={{width: 16}}/>
                <span>{products.length} sản phẩm</span>
              </div>
              <div className="cni-info-item">
                <Icons.Money style={{width: 16}}/>
                <span>{paymentMethod}</span>
              </div>
              <div className="cni-info-item">
                <Icons.Document style={{width: 16}}/>
                <span>{invoiceType}</span>
              </div>
            </div>

            <div className="cni-action-btns">
              <button className={`cni-btn-confirm ${products.length > 0 ? 'active' : ''}`}>
                Xác nhận
              </button>
              <button className="cni-btn-cancel">
                Hủy
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreateInvoicePage;