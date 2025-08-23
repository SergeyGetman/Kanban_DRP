import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useFileContext } from '../hooks/useFileContext';
import CardMedia from '@mui/material/CardMedia';

import { FC } from 'React';

import LogoStar from '../assets/imsges/difreight-difreyt.jpg';
import { FormStyleAffterUpload } from '../../Index.style';

type IForComponetnMedia = {
  stateAfterUpload: boolean;
};

const ForComponetnMedia: FC<IForComponetnMedia> = ({ stateAfterUpload }) => {
  const { files } = useFileContext();

  return (
    <div>
      <CardMedia component="img" alt="green iguana" height="140" width="150px" image={LogoStar} />
    </div>
  );
};

export default function SceletonComponent() {
  return (
    <>
      <FormStyleAffterUpload></FormStyleAffterUpload>
      <ForComponetnMedia state={true} /> && (
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={40} height={40} />
        <Skeleton variant="rectangular" width="auto" height={60} />
        <Skeleton variant="rounded" width="auto" height={60} />
      </Stack>
      )
    </>
  );
}
