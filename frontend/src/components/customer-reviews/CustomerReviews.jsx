import React, { useState } from 'react';
import { FaBars, FaSearch, FaUser, FaStar, FaShoppingCart, FaCalendarAlt } from 'react-icons/fa';

const reviewsData = [
  { id: 1, name: 'Nguyễn Thị Mai', date: '15/11/2024', rating: 5, content: 'Dịch vụ tuyệt vời! Bác sĩ rất tận tâm và chu đáo. Cún nhà mình rất khỏe mạnh sau khi khám ở đây.', avatar: 'https://via.placeholder.com/50?text=U1' },
  { id: 2, name: 'Trần Văn Hùng', date: '20/11/2024', rating: 5, content: 'Sản phẩm chất lượng, giá cả hợp lý. Mèo nhà mình rất thích thức ăn mua ở đây. Sẽ ủng hộ lâu dài!', avatar: 'https://via.placeholder.com/50?text=U2' },
  { id: 3, name: 'Lê Thu Hương', date: '22/11/2024', rating: 4, content: 'Dịch vụ tốt, nhân viên nhiệt tình. Tuy nhiên, thời gian chờ khám hơi lâu một chút.', avatar: 'https://via.placeholder.com/50?text=U3' },
  { id: 4, name: 'Phạm Văn Nam', date: '25/11/2024', rating: 5, content: 'Rất hài lòng với dịch vụ spa cho thú cưng. Bé cún nhà mình thơm tho và sạch sẽ hơn hẳn.', avatar: 'https://via.placeholder.com/50?text=U4' },
  { id: 5, name: 'Hoàng Thị Lan', date: '28/11/2024', rating: 4, content: 'Cửa hàng có nhiều đồ chơi độc lạ. Giá cả cũng phải chăng. Nhân viên tư vấn nhiệt tình.', avatar: 'https://via.placeholder.com/50?text=U5' },
];

const CustomerReviews = () => {
  return (
    <section className="section-container">
      <div className="section-heading" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Đánh giá từ khách hàng</h2>
        <p>Những chia sẻ chân thực từ khách hàng của PetCareX</p>
      </div>

      <div className="reviews-list">
        {reviewsData.map((review) => (
          <div key={review.id} className="review-item">
            <img src={review.avatar} alt={review.name} className="review-avatar" />
            <div className="review-content">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h4>{review.name}</h4>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color={i < review.rating ? '#fbbf24' : '#ddd'} />
                  ))}
                </div>
              </div>
              <span className="review-date">{review.date}</span>
              <p>"{review.content}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;