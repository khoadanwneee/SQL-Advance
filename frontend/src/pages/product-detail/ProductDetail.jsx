import React, { useState } from 'react';
import './ProductDetail.css'; // Sử dụng chung file CSS
import { 
  FaArrowLeft, FaStar, FaShoppingCart, FaStore, FaBox, 
  FaCalendarAlt, FaCalendarTimes, FaMinus, FaPlus 
} from 'react-icons/fa';

const ProductDetailPage = ({ product, onBack }) => {
  // Dữ liệu mẫu (Fallback data) giống trong ảnh thiết kế
  const defaultProduct = {
    id: 1,
    name: 'Vòng cổ thời trang cho thú cưng',
    price: 120000,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Ảnh vòng cổ minh họa
    description: 'Vòng cổ cao cấp làm từ da tổng hợp bền đẹp, có thể điều chỉnh kích thước phù hợp với nhiều giống chó mèo. Thiết kế tinh tế, an toàn cho thú cưng.',
    supplier: 'Fashion Pet',
    unit: 'Chiếc',
    mfgDate: '01/11/2024',
    expDate: 'Không áp dụng',
    
    // Thông tin chi tiết bổ sung cho bảng bên dưới
    category: 'Phụ kiện thú cưng',
    brand: 'Fashion Pet',
    origin: 'Việt Nam',
    status: 'Còn hàng',
    preservation: 'Nơi khô ráo',
    delivery: 'Miễn phí > 500k'
  };

  // Sử dụng dữ liệu được truyền vào hoặc dữ liệu mẫu
  const data = product || defaultProduct;
  const [quantity, setQuantity] = useState(1);

  // Xử lý tăng giảm số lượng
  const handleQuantity = (type) => {
    if (type === 'decrease' && quantity > 1) setQuantity(quantity - 1);
    if (type === 'increase') setQuantity(quantity + 1);
  };

  return (
    <div className="product-detail-page">
      {/* 1. Header Bar: Nút quay lại */}
      <div className="detail-header-bar">
        <div className="back-link" onClick={onBack}>
          <FaArrowLeft />
        </div>
        <div className="detail-page-title">Chi tiết sản phẩm</div>
      </div>

      <div className="detail-content">
        
        {/* 2. Top Section: Ảnh & Thông tin chính */}
        <div className="detail-top-section">
          
          {/* Cột Trái: Hình ảnh */}
          <div className="detail-img-container">
            <img src={data.image} alt={data.name} />
          </div>

          {/* Cột Phải: Thông tin chi tiết */}
          <div className="detail-info-right">
            <h1>{data.name}</h1>
            <div className="detail-price-tag">{data.price.toLocaleString('vi-VN')}đ</div>

            <div className="detail-section-title">Mô tả sản phẩm</div>
            <p className="detail-desc-text">{data.description}</p>

            {/* Các trường thông tin (Icon + Label + Value) */}
            <div className="meta-list">
              <div className="meta-item">
                <FaStore className="meta-icon" />
                <div className="meta-content">
                  <div>Nhà cung cấp</div>
                  <div>{data.supplier}</div>
                </div>
              </div>
              <div className="meta-item">
                <FaBox className="meta-icon" />
                <div className="meta-content">
                  <div>Đơn vị sử dụng</div>
                  <div>{data.unit}</div>
                </div>
              </div>
              <div className="meta-item">
                <FaCalendarAlt className="meta-icon" />
                <div className="meta-content">
                  <div>Ngày sản xuất</div>
                  <div>{data.mfgDate}</div>
                </div>
              </div>
              <div className="meta-item">
                <FaCalendarTimes className="meta-icon" />
                <div className="meta-content">
                  <div>Hạn sử dụng</div>
                  <div>{data.expDate}</div>
                </div>
              </div>
            </div>

            {/* Đánh giá & Số lượng */}
            <div className="action-row">
              <div className="rating-box">
                <div style={{display: 'flex', color: '#fbbf24'}}>
                   {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                   ))}
                </div>
                <span>{data.rating} / 5.0</span>
              </div>

              <div className="quantity-control">
                <button className="qty-btn" onClick={() => handleQuantity('decrease')}><FaMinus size={10} /></button>
                <div className="qty-input">{quantity}</div>
                <button className="qty-btn" onClick={() => handleQuantity('increase')}><FaPlus size={10} /></button>
              </div>
            </div>

            {/* Nút bấm */}
            <div className="buy-actions">
              <button className="btn btn-primary btn-add-cart">
                <FaShoppingCart style={{marginRight: '8px'}}/> Thêm vào giỏ hàng
              </button>
              <button className="btn btn-outline btn-buy-now">
                Mua ngay
              </button>
            </div>
          </div>
        </div>

        {/* 3. Bottom Section: Thông số kỹ thuật chi tiết */}
        <div className="specs-section">
          <div className="detail-section-title" style={{fontSize: '1.2rem', marginBottom: '20px'}}>Thông tin chi tiết</div>
          <div className="specs-grid">
            <div className="spec-row">
              <span className="spec-label">Danh mục:</span>
              <span className="spec-val">{data.category || 'Thú cưng'}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Tình trạng:</span>
              <span className="spec-val status-green">{data.status || 'Còn hàng'}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Thương hiệu:</span>
              <span className="spec-val">{data.brand || data.supplier}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Bảo quản:</span>
              <span className="spec-val">{data.preservation || 'Nơi thoáng mát'}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Xuất xứ:</span>
              <span className="spec-val">{data.origin || 'Việt Nam'}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Giao hàng:</span>
              <span className="spec-val">{data.delivery || 'Toàn quốc'}</span>
            </div>
          </div>
        </div>

        {/* 4. Bottom Section: Đánh giá khách hàng */}
        <div className="reviews-section">
          <div className="detail-section-title" style={{fontSize: '1.2rem', marginBottom: '20px'}}>Đánh giá khách hàng</div>
          
          {/* Review 1 */}
          <div className="review-item-detail">
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
              <strong style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <div style={{width: '30px', height: '30px', background: '#ddd', borderRadius: '50%'}}></div>
                Nguyễn Văn A
              </strong>
              <span style={{color: '#999', fontSize: '0.9rem'}}>01/12/2024</span>
            </div>
            <div style={{color: '#fbbf24', marginBottom: '8px', fontSize: '0.9rem'}}>★★★★★</div>
            <p style={{color: '#555'}}>Sản phẩm chất lượng tốt, thú cưng rất thích!</p>
          </div>

          {/* Review 2 */}
          <div className="review-item-detail">
             <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '5px'}}>
              <strong style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <div style={{width: '30px', height: '30px', background: '#e5e7eb', borderRadius: '50%'}}></div>
                Trần Thị B
              </strong>
              <span style={{color: '#999', fontSize: '0.9rem'}}>28/11/2024</span>
            </div>
            <div style={{color: '#fbbf24', marginBottom: '8px', fontSize: '0.9rem'}}>★★★★☆</div>
            <p style={{color: '#555'}}>Giao hàng nhanh, đóng gói cẩn thận.</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;