import { useEffect, useState } from 'react';
import LogoutButton from './LogOutGoogle';
import { Box, Typography } from '@mui/material';
import { CardInfoUserStyle } from './StyledComponent/CardInfoUser.style';
import MediaCard from './CardsForm';

interface User {
  name: string;
  email: string;
  picture: string;
  id: string;
}

function MediaCardInfoUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      window.location.href = '/';
    }
  }, []);

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <CardInfoUserStyle>
        <Typography>Welcome, {user.name}! 👋</Typography>
        <img
          src={user.picture}
          alt="avatar"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: '3px solid #1a73e8',
          }}
        />
        <p style={{ color: '#555', marginTop: '10px' }}>
          <strong>Email:</strong> {user.email}
        </p>
        <div style={{ marginTop: '0 auto' }}>
          <LogoutButton />
        </div>
      </CardInfoUserStyle>
      <MediaCard />
    </>
  );
}

export default MediaCardInfoUser;
