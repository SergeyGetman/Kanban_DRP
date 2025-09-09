import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('google_token');
  const location = useLocation();

  if (!token) {
    return (
      <Navigate to="/register-new-user" state={{ from: location }} replace />
    );
  }

  return children;
};

export default ProtectedRoute;
