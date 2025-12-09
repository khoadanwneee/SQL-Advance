    import { useState } from 'react';
    import { useNavigate } from 'react-router';

    const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
        const response = await fetch('http://localhost:3000/admin/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            TenDangNhap: credentials.username,
            MatKhau: credentials.password
            })
        });

        const data = await response.json();
        
        if (data.success) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('role', data.role);
            navigate('/admin/dashboard');
        } else {
            alert(data.message);
        }
        } catch (error) {
        alert('Đăng nhập thất bại');
        }
    };

    return (
        <div className="login-page">
        <h1>Đăng nhập Admin</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Tên đăng nhập"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
            <input
            type="password"
            placeholder="Mật khẩu"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <button type="submit">Đăng nhập</button>
        </form>
        </div>
    );
    };

    export default AdminLogin;
