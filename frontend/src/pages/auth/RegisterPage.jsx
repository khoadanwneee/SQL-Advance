import React from 'react';
import { FiUser, FiLock, FiMail, FiCalendar, FiArrowLeft } from 'react-icons/fi';
import InputField from '../../components/input/InputField';
import './Auth.css';

const RegisterPage = ({ onNavigateToLogin, onBackToHome }) => {
  return (
    <div className="auth-container">
      <h1 className="main-title">PetCareX</h1>
      <p className="sub-title">Tạo tài khoản mới</p>
      <div className="auth-card">
        <h2 className="form-title">Đăng ký</h2>
        <form>
          <InputField
            label="Họ tên"
            type="text"
            placeholder="Nhập họ và tên"
            icon={<FiUser />}
            required
          />
          <InputField
            label="Tên đăng nhập"
            type="text"
            placeholder="Nhập tên đăng nhập"
            icon={<FiUser />}
            required
          />
          <InputField
            label="Email"
            type="email"
            placeholder="Nhập email"
            icon={<FiMail />}
            required
          />
          <div className="form-row">
            <InputField
              label="Mật khẩu"
              type="password"
              placeholder="Nhập mật khẩu"
              icon={<FiLock />}
              required
            />
            <InputField
              label="Xác nhận mật khẩu"
              type="password"
              placeholder="Nhập lại mật khẩu"
              icon={<FiLock />}
              required
            />
          </div>
          <div className="form-row">
             <InputField
              label="Ngày sinh"
              type="date"
              placeholder="mm/dd/yyyy"
              icon={<FiCalendar />}
              required
            />
            <InputField
              label="Giới tính"
              isSelect
              placeholder="Chọn giới tính"
              options={[
                { value: 'nam', label: 'Nam' },
                { value: 'nu', label: 'Nữ' },
                { value: 'khac', label: 'Khác' },
              ]}
              required
            />
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="terms" className="checkbox" />
            <label htmlFor="terms" className="checkbox-label">
              Tôi đồng ý với <span className="link-text">Điều khoản dịch vụ</span> và <span className="link-text">Chính sách bảo mật</span>
            </label>
          </div>
          <button type="submit" className="submit-button">Đăng ký</button>
        </form>
        <div className="separator">hoặc</div>
        <div className="auth-switch">
          Đã có tài khoản? <span className="link-text" onClick={onNavigateToLogin}>Đăng nhập ngay</span>
        </div>
      </div>
      <div className="back-to-home" onClick={onBackToHome}>
        <FiArrowLeft className="back-icon" size={20} /> Quay lại trang chủ
      </div>
    </div>
  );
};

export default RegisterPage;