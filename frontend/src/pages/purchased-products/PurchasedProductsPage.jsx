import React, { useState, useEffect } from 'react';
import PurchasedProductCard from '../../components/product-card/PurchasedProductCard';
import './PurchasedProductsPage.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PurchasedProductsPage = () => {
  const navigate = useNavigate();
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchPurchasedProducts = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          window.atob(base64)
            .split('')
            .map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
        );

        const payload = JSON.parse(jsonPayload);
        const userId = payload.MaKhachHang; 

        const response = await axios.get(`http://localhost:3000/orders/history?clientid=${userId}`);

        const formattedData = response.data.map((item) => ({
          id: item.MaHoaDon, 
          orderId: item.MaHoaDon,
          name: item.TenSanPham, 
          category: item.LoaiSanPham || "Khác",
          quantity: item.SoLuong,
          totalPrice: item.TongTien ? `${item.TongTien.toLocaleString()}đ` : '0đ',
          status: item.TrangThai || 'Đang xử lý',
          orderDate: item.NgayLap ? new Date(item.NgayDat).toLocaleDateString('vi-VN') : 'N/A',
          image: item.URLAnhMinhHoa || 'https://via.placeholder.com/150'
        }));

        setPurchasedItems(formattedData);
      } catch (error) {
        console.error("Lỗi khi tải lịch sử mua hàng:", error);
        // Có thể set state lỗi để hiển thị thông báo cho user
      } finally {
        setLoading(false);
      }
    };

    fetchPurchasedProducts();
  }, [navigate]);

  return (
    <div className="purchased-page-container">
      {/* Header */}
      <div className="page-header">
        <div className="header-left-group">
          {/* Sửa onClick={onBack} thành handleBack */}
          <button className="back-button" onClick={handleBack}>
            <FaArrowLeft />
          </button>
          <div className="header-titles">
            <h1 className="main-title">Sản phẩm đã mua</h1>
            <p className="sub-title">
              {loading ? "Đang tải..." : `${purchasedItems.length} đơn hàng`}
            </p>
          </div>
        </div>
      </div>

      {/* List Container */}
      <div className="purchased-list">
        {loading ? (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>Đang tải dữ liệu...</p>
        ) : purchasedItems.length > 0 ? (
          purchasedItems.map((item) => (
            <PurchasedProductCard key={item.id} product={item} />
          ))
        ) : (
          <p style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
            Bạn chưa mua sản phẩm nào.
          </p>
        )}
      </div>
    </div>
  );
};

export default PurchasedProductsPage;