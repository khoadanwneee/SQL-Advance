import React from 'react';
import './PurchasedProductCard.css';
import { FaCalendarAlt, FaStar } from 'react-icons/fa'; // Đã thêm FaStar
import { useNavigate } from 'react-router';

const PurchasedProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="purchased-card">
      {/* Product Image */}
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      {/* Product Details */}
      <div className="product-details">

        {/* Badges Row */}
        <div className="badge-row">
          <span className="order-id-badge">#{product.orderId}</span>
          <span className="status-badge-green">{product.status}</span>
        </div>

        {/* Info Grid */}
        <div className="info-grid-row">
          <div className="info-col main-col">
            <span className="label">Tên sản phẩm</span>
            <h3 className="value-highlight">{product.name}</h3>
          </div>
          <div className="info-col">
            <span className="label">Loại sản phẩm</span>
            <span className="value-text">{product.category}</span>
          </div>
          <div className="info-col">
            <span className="label">Số lượng</span>
            <span className="value-text">{product.quantity}</span>
          </div>
          <div className="info-col">
            <span className="label">Tổng tiền</span>
            <span className="value-price">{product.totalPrice}</span>
          </div>
        </div>

        {/* Date Row */}
        <div className="date-row">
          <FaCalendarAlt className="icon-gray" />
          <span>Ngày đặt: {product.orderDate}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="card-actions">
        <button className="btn-details" onClick={(e) => {
          e.stopPropagation();
          navigate('/product/detail');
        }}>
          Xem chi tiết
        </button>

        {/* Nút Đánh giá mới */}
        <button className="btn-review">
          <FaStar style={{ marginRight: '5px' }} /> Đánh giá
        </button>

        <button className="btn-buy-again">
          Mua lại
        </button>
      </div>
    </div>
  );
};

export default PurchasedProductCard;