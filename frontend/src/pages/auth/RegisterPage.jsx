import React from 'react';
import { FiUser, FiLock, FiMail, FiCalendar, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/input/InputField';
import './Auth.css';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    HoTen: "",
    SDT: "",
    Email: "",
    GioiTinh: "",
    NgaySinh: "",
    NgayDangKy: new Date().toISOString().slice(0, 10),
    TenDangNhap: "",
    MatKhau: "",
    confirmMatKhau: "",
  });

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Vui lòng chấp nhận điều khoản.");
      return;
    }

    if (!formData.HoTen || !formData.TenDangNhap || !formData.Email || !formData.MatKhau || !formData.confirmMatKhau || !formData.NgaySinh || !formData.GioiTinh || !formData.SDT) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    if (!/^\d{10,11}$/.test(formData.SDT)) {
      alert("Số điện thoại không hợp lệ.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      alert("Email không hợp lệ.");
      return;
    }

    if (formData.NgaySinh >= new Date().toISOString().slice(0, 10)) {
      alert("Ngày sinh không hợp lệ.");
      return;
    }

    if (formData.MatKhau.length < 6) {
      alert("Mật khẩu phải >= 6 ký tự.");
      return;
    }

    if (formData.MatKhau !== formData.confirmMatKhau) {
      alert("Mật khẩu không khớp.");
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        alert("Đăng ký thành công!");
        navigate('/login');
      } else {
        alert("Đăng ký thất bại: " + data.message);
      }
    } catch (error) {
      alert("Đăng ký thất bại: " + error.message);
    }
  };

  return (
    <div className="auth-container">
      <h1 className="main-title">PetCareX</h1>
      <p className="sub-title">Tạo tài khoản mới</p>
      <div className="auth-card">
        <h2 className="form-title">Đăng ký</h2>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Họ tên"
            value={formData.HoTen}
            required
            icon={<FiUser />}
            onChange={(e) => handleChange("HoTen", e.target.value)}
          />

          <InputField
            label="Tên đăng nhập"
            value={formData.TenDangNhap}
            required
            icon={<FiUser />}
            onChange={(e) => handleChange("TenDangNhap", e.target.value)}
          />

          <InputField
            label="Email"
            type="email"
            value={formData.Email}
            required
            icon={<FiMail />}
            onChange={(e) => handleChange("Email", e.target.value)}
          />

          <InputField
            label="Số điện thoại"
            value={formData.SDT}
            required
            onChange={(e) => handleChange("SDT", e.target.value)}
          />

          <div className="form-row">
            <InputField
              label="Mật khẩu"
              type="password"
              value={formData.MatKhau}
              required
              icon={<FiLock />}
              onChange={(e) => handleChange("MatKhau", e.target.value)}
            />

            <InputField
              label="Xác nhận mật khẩu"
              type="password"
              value={formData.confirmMatKhau}
              required
              icon={<FiLock />}
              onChange={(e) => handleChange("confirmMatKhau", e.target.value)}
            />
          </div>

          <div className="form-row">
            <InputField
              label="Ngày sinh"
              type="date"
              value={formData.NgaySinh}
              required
              icon={<FiCalendar />}
              onChange={(e) => handleChange("NgaySinh", e.target.value)}
            />

            <InputField
              label="Giới tính"
              isSelect
              value={formData.GioiTinh}
              required
              options={[
                { value: "Nam", label: "Nam" },
                { value: "Nu", label: "Nữ" },
                { value: "Khac", label: "Khác" },
              ]}
              onChange={(e) => handleChange("GioiTinh", e.target.value)}
            />
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={formData.agree}
              onChange={(e) => handleChange("agree", e.target.checked)}
            />
            <label>Tôi đồng ý điều khoản dịch vụ</label>
          </div>

          <button type="submit" className="submit-button">Đăng ký</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;