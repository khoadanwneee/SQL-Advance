import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import * as authService from '../../services/auth.service.js';

export const login = async (req, res) => {
  const { TenDangNhap, MatKhau } = req.body;

  try {
    // 1. Tìm nhân viên theo username
    const user = await authService.findNHAN_VIEN_ByUsername(TenDangNhap);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Tên đăng nhập hoặc mật khẩu không đúng'
      });
    }

    // 2. Kiểm tra mật khẩu
    const isValidPassword = await bcrypt.compare(MatKhau, user.MatKhau);

    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: 'Tên đăng nhập hoặc mật khẩu không đúng'
      });
    }

    // 3. Lấy chức vụ từ DB và map thành role
    const rawRole = user.ChucVu; 
    let role;

    switch (rawRole) {
      case 'ADMIN':
      case 'Admin':
      case 'QUAN_TRI':
        role = 'admin';
        break;
      case 'BAC_SI':
      case 'BacSi':
      case 'BS':
        role = 'bac_si';
        break;
      default:
        role = 'nhan_vien';
        break;
    }

    // 4. Tạo JWT token
    const token = jwt.sign(
      {
        MaNhanVien: user.MaNhanVien,
        TenDangNhap: user.TenDangNhap,
        Email: user.Email,
        role: role
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // 5. Trả về cho frontend
    return res.json({
      success: true,
      message: 'Đăng nhập thành công',
      token,
      role
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Đăng nhập thất bại',
      error: error.message
    });
  }
};
