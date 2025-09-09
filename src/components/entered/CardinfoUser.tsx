import React, { useEffect, useState } from 'react';
import { CardInfoUserStyle } from '@/components/StyledComponent/CardInfoUser.style';
import Typography from '@mui/material/Typography';
import { setUser } from '@/store/userSlice';

interface User {
  name: string;
  email: string;
  picture: string;
  id: string;
}

const CardInfoUserComponent = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      window.location.href = '/';
    }
  }, []);

  console.log('this is user', user);

  if (!user) {
    return <div>Загрузка...</div>;
  }
  return (
    <>
      <CardInfoUserStyle>
        <Typography sx={{ color: 'white' }}>
          Welcome, {user.name}! 👋
        </Typography>
        <img
          src={user.picture}
          alt="avatar"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            margin: '0 auto',
          }}
        />
        <p style={{ color: 'white', marginTop: '10px' }}>
          <strong>Email:</strong> {user.email}
        </p>
      </CardInfoUserStyle>
    </>
  );
};

export default CardInfoUserComponent;
