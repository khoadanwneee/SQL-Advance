import { db } from '../config/db.config.js';

export const addKHACH_HANG = async (user) => {
    try {
        // Kiểm tra SDT đã tồn tại chưa
        const existingCustomer = await db('KHACH_HANG')
            .where('SDT', user.SDT)
            .orWhere('Email', user.Email)
            .orWhere('TenDangNhap', user.TenDangNhap)
            .first();

        if (existingCustomer) {
            if (existingCustomer.SDT === user.SDT) {
                throw new Error('Số điện thoại đã được đăng ký');
            }
            if (existingCustomer.Email === user.Email) {
                throw new Error('Email đã được đăng ký');
            }
            if (existingCustomer.TenDangNhap === user.TenDangNhap) {
                throw new Error('Tên đăng nhập đã tồn tại');
            }
        }

        const result = await db.raw(`SELECT nextval('kh_sq') AS seq`);
        const seq = result.rows[0].seq;
        const MaKhachHang = "KH" + String(seq).padStart(3, '0');

        const [newCustomer] = await db('KHACH_HANG')
            .insert({
                MaKhachHang,
                HoTen: user.HoTen,
                SDT: user.SDT,
                Email: user.Email,
                GioiTinh: user.GioiTinh,
                NgaySinh: user.NgaySinh,
                NgayDangKy: user.NgayDangKy,
                TenDangNhap: user.TenDangNhap,
                MatKhau: user.MatKhau,
                Loyalty: user.Loyalty,
                TrangThai: user.TrangThai,
            })
            .returning('*');
        
        return newCustomer;
    } catch (error) {
        console.error('Error adding customer:', error);
        throw error;
    }
}

export const findKHACH_HANG_ByUsername = async (username) => {
    try {
        const customer = await db('KHACH_HANG')
            .where('TenDangNhap', username)
            .first();
        
        return customer;
    } catch (error) {
        console.error('Error finding customer:', error);
        throw error;
    }
}

export const findNHAN_VIEN_ByUsername = async (username) => {
    try {
        const employee = await db('NHAN_VIEN')
            .where('TenDangNhap', username)
            .first();
        return employee;
    } catch (error) {
        console.error('Error finding employee:', error);
        throw error;
    }
}