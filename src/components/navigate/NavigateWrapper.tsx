import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Box } from '@mui/material';

const NavigateWrapper = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Шапка с навигацией */}
      <AppBar
        position="static"
        color="primary"
        sx={{ marginBottom: '20px', backgroundColor: '#2a343f' }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => navigate('/auth-new-user')}
          >
            Sign In
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => navigate('/register-new-user')}
          >
            Register
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => navigate('/attach-files')}
          >
            Attach Files
          </Button>
        </Toolbar>
      </AppBar>

      {/* Основной контент страницы */}
      <Container maxWidth="lg">
        <Box sx={{ padding: '20px' }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default NavigateWrapper;
