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
        backgroundColor: 'rgb(205 36 19 / 68%);',
        margin: '10px 10px',
        color: 'white',
        border: 'none',
        padding: '20px 10px',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '14px',
      }}
    >
      LOGOUT
    </button>
  );
};

export default LogoutButton;
