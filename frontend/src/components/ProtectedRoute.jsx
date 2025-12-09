import { Navigate } from 'react-router';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Decode token để lấy role
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const userRole = payload.role;

    if (allowedRoles && !allowedRoles.includes(userRole)) {
      // Redirect về trang phù hợp với role
      if (userRole === 'customer') {
        return <Navigate to="/" replace />;
      } else {
        return <Navigate to="/admin/dashboard" replace />;
      }
    }

    return children;
  } catch (error) {
    localStorage.removeItem('token');
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
