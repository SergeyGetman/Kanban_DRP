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

export default function MediaCard() {
  return (
    <Box style={{ margin: '185px 400px', width: 'max-content' }}>
      <Card
        sx={{
          maxWidth: 660,
          background: 'radial-gradient(circle, rgb(118 123 149 / 92%) 0%, rgba(8, 22, 38, 1) 100%)',
        }}
      >
        <CardMedia
          sx={{ margin: '20px auto', height: '100px', width: '100px', borderRadius: '50%' }}
          image={LogoCompany}
        ></CardMedia>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '-125px' }}>
          <Box
            sx={{
              fontSize: '90px',
              fontWeight: '700',
              fontFamily: 'math',
              boxShadow: '-3px 3px 2px 1px #d5d8e5',
            }}
          >
            TO
          </Box>

          <Box
            sx={{
              fontWeight: '700',
              fontSize: '90px',
              fontFamily: 'math',
              boxShadow: '6px -1px 2px 1px #3f8fd2e6',
            }}
          >
            DO
          </Box>
        </Box>

        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
            fontWeight="600"
            fontFamily="monospace"
          >
            ADD
          </Typography>
          <FormLayoutCustom>
            <Forms />
          </FormLayoutCustom>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{ cursor: 'pointer', color: '#111213', fontSize: '12px' }}>
            Share
          </Button>
          <Button size="small" sx={{ color: '#111213' }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
