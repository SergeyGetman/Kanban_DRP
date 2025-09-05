import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useFileContext } from '../hooks/useFileContext';
import CardMedia from '@mui/material/CardMedia';
import { FC } from 'react'; // ✅ исправлен импорт

import LogoStar from '../assets/imsges/skeleton.png';
import { FormStyleAffterUpload } from '../../Index.style';
import { Box, LinearProgress } from '@mui/material';

type IForComponetnMedia = {
  stateAfterUpload: boolean;
};

const ForComponetnMedia: FC<IForComponetnMedia> = ({ stateAfterUpload }) => {
  const { files } = useFileContext();

  const imageUrl = files.length > 0 ? files[0].preview : LogoStar;

  return (
    <div>
      <CardMedia
        component="img"
        alt="Preview or default logo"
        sx={{
          height: '200px',
          width: 'auto',
          margin: '0 auto',
          borderRadius: '3px',
          opacity: stateAfterUpload || files.length > 0 ? 1 : 0.5,
          transition: 'opacity 0.3s ease-in-out',
        }}
        image={imageUrl}
      />
    </div>
  );
};

export default function SkeletonComponent() {
  const { files } = useFileContext();
  const isUploaded = files.length > 0;

  return (
    <>
      <FormStyleAffterUpload>
        <ForComponetnMedia stateAfterUpload={isUploaded} />
      </FormStyleAffterUpload>

      {!isUploaded && (
        <Stack spacing={1}>
          <Box sx={{ width: '100%' }}>
            <LinearProgress
              color="primary"
              sx={{
                '& .MuiLinearProgress-bar': {
                  animationDuration: '4s',
                },
              }}
            />
          </Box>
          <Skeleton variant="secondary" width="auto" height={20} />
        </Stack>
      )}
    </>
  );
}
