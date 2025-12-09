import React from 'react';
import { FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/input/InputField';
import './Auth.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    TenDangNhap: "",
    MatKhau: "",
  });

  const handleChange =  (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        alert("Đăng nhập thành công!");
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        navigate('/');
      } else {
        alert("Đăng nhập thất bại: " + data.message);
      }
    } catch (error) {
      alert("Đăng nhập thất bại: " + error.message);
    }
  }

  return (
    <div className="auth-container">
      <h1 className="main-title">PetCareX</h1>
      <p className="sub-title">Đăng nhập để tiếp tục</p>
      <div className="auth-card">
        <h2 className="form-title">Đăng nhập</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <InputField
            label="Tên đăng nhập"
            type="text"
            placeholder="Nhập tên đăng nhập"
            icon={<FiUser />}
            onChange={(e) => handleChange("TenDangNhap", e.target.value)}
            value={formData.TenDangNhap}
          />
          <InputField
            label="Mật khẩu"
            type="password"
            placeholder="Nhập mật khẩu"
            icon={<FiLock />}
            onChange={(e) => handleChange("MatKhau", e.target.value)}
            value={formData.MatKhau}
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