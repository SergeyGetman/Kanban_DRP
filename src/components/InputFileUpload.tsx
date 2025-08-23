import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useFileContext } from '../hooks/useFileContext';
import { FC } from 'React';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

type IUploads = {
  status: boolean;
  message: string;
};

const Uploads: FC<IUploads> = ({ status, message }) => {
  const { addFiles } = useFileContext();

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <VisuallyHiddenInput type="file" onChange={(event) => addFiles(event.target.files)} multiple />
      {status && message}
    </Button>
  );
};
export default Uploads;
