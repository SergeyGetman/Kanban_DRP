import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LogoCompany from '../assets/imsges/logo_sec.png';
import { Box } from '@mui/material';

export default function MediaCard() {
  return (
    <Box style={{ margin: '185px 400px' }}>
      <Card sx={{ maxWidth: 460 }}>
        <CardMedia
          sx={{ height: '50px', width: '50px', margin: '0 auto' }}
          image={LogoCompany}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            · DiFFreight is one of the most dynamically growing logistics companies in Ukraine. Our company
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            specializes in international transportation around the world.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            specializes in international transportation around the world.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
