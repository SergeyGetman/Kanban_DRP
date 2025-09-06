import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LogoCompany from '../../public/favicon.jpg';
import { Box } from '@mui/material';
import Forms from './Form';
import { FormLayoutCustom } from './StyledComponent/ModalWindow.style';
import MediaCardInfoUser from './MediaCardInfo';
import { CardInfoUserStyle } from './StyledComponent/CardInfoUser.style';
import LogoutButton from './LogOutGoogle';
import { useEffect, useState } from 'react';

export default function MediaCard() {
  return (
    <Box
      style={{
        margin: '10px 20px',
        width: 'auto',
        backgroundColor: '#ffffff00',
        padding: '50px',
        position: 'relative',
      }}
    >
      <CardMedia
        sx={{
          margin: '0 auto',
          height: '100px',
          width: '100px',
          borderRadius: '50%',
          marginLeft: 'auto',
          right: '40px',
          top: '0px',
          position: 'absolute',
          opacity: '0.6',
        }}
        image={LogoCompany}
      >
        <div style={{ marginTop: '0 auto' }}>
          <LogoutButton />
        </div>
      </CardMedia>

      <Card
        sx={{
          maxWidth: 660,
          background: 'radial-gradient(circle, rgb(118 123 149 / 92%) 0%, rgba(8, 22, 38, 1) 100%)',
        }}
      >
        <CardContent>
          <FormLayoutCustom>
            <Forms />
          </FormLayoutCustom>
        </CardContent>
      </Card>
    </Box>
  );
}
