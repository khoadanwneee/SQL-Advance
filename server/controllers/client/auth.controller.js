import brypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import * as authService from '../../services/auth.service.js';

export const register = async (req, res) => {
    const {
        HoTen,
        SDT,
        Email,
        GioiTinh,
        NgaySinh,
        NgayDangKy,
        TenDangNhap,
        MatKhau,
    } = req.body; 
    try {
        const hashedPassword = await brypt.hash(MatKhau, 10);
        const newUser = {
            HoTen,
            SDT,
            Email,
            GioiTinh,
            NgaySinh,
            NgayDangKy,
            TenDangNhap,
            MatKhau: hashedPassword,
            Loyalty: 0,
            TrangThai: "active",
        }; 
        
        const result = await authService.addKHACH_HANG(newUser);

        res.json({
            success: true,
            message: 'Đăng ký thành công',
        });
    } catch (error) {
        res.json({
            success: false,
            message: 'Đăng ký thất bại',
            error: error.message
        })
    }
}

export const login = async (req, res) => {
    const { TenDangNhap, MatKhau } = req.body;

    try {
        // Tìm user theo username
        const user = await authService.findKHACH_HANG_ByUsername(TenDangNhap);
        
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Tên đăng nhập hoặc mật khẩu không đúng'
            });
        }

        // Kiểm tra mật khẩu
        const isValidPassword = await brypt.compare(MatKhau, user.MatKhau);
        
        if (!isValidPassword) {
            return res.status(401).json({
                success: false,
                message: 'Tên đăng nhập hoặc mật khẩu không đúng'
            });
        }

        // Tạo JWT token
        const token = jwt.sign(
            { 
                MaKhachHang: user.MaKhachHang,
                TenDangNhap: user.TenDangNhap,
                Email: user.Email,
                role: 'customer'
            },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        // Trả về token và thông tin user (không bao gồm password)
        res.json({
            success: true,
            message: 'Đăng nhập thành công',
            token,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Đăng nhập thất bại',
            error: error.message
        });
    }
}