import { Outlet } from 'react-router';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li><a href="/admin/dashboard">Dashboard</a></li>
            <li><a href="/admin/customers">Khách hàng</a></li>
            <li><a href="/admin/appointments">Lịch hẹn</a></li>
            <li><a href="/admin/inventory">Kho hàng</a></li>
          </ul>
        </nav>
      </aside>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
