import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('google_token');
    localStorage.removeItem('user');

    navigate('/');
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        backgroundColor: 'rgb(101 20 12)',
        color: 'white',
        border: 'none',
        padding: '10px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      🚪 LOGOUT
    </button>
  );
};

export default LogoutButton;
