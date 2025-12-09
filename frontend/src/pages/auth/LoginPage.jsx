import React from 'react';
import { FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router';
import InputField from '../../components/input/InputField';
import './Auth.css';

const LoginPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="auth-container">
      <h1 className="main-title">PetCareX</h1>
      <p className="sub-title">Đăng nhập để tiếp tục</p>
      <div className="auth-card">
        <h2 className="form-title">Đăng nhập</h2>
        <form>
          <InputField
            label="Tên đăng nhập"
            type="text"
            placeholder="Nhập tên đăng nhập"
            icon={<FiUser />}
          />
          <InputField
            label="Mật khẩu"
            type="password"
            placeholder="Nhập mật khẩu"
            icon={<FiLock />}
          />
          <div className="forgot-password">
            <span className="link-text">Quên mật khẩu?</span>
          </div>
          <button type="submit" className="submit-button">Đăng nhập</button>
        </form>
        <div className="separator">hoặc</div>
        <div className="auth-switch">
          Chưa có tài khoản? <span className="link-text" onClick={() => {navigate('/register');}}>Đăng ký ngay</span>
        </div>
      </div>
      <div className="back-to-home" onClick={() => {navigate('/');}}>
        <FiArrowLeft className="back-icon" size={20} /> Quay lại trang chủ
      </div>
    </div>
  );
};

export default LoginPage;