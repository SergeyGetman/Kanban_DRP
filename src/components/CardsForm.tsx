import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LogoCompany from '../assets/imsges/logo_sec.png';
import { Box } from '@mui/material';
import Forms from './Form';

export default function MediaCard() {
  return (
    <Box style={{ margin: '185px 400px', width: 'max-content' }}>
      <Card sx={{ maxWidth: 660 }}>
        <CardMedia sx={{ margin: '0 auto', height: '100px', width: '100px' }} image={LogoCompany}></CardMedia>
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
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
            continents except Antarctica
          </Typography>

          <Forms />
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
