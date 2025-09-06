import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FC } from 'React';
import VisuallyHiddenInput from './InputFileUpload';
import LogoutButton from './LogOutGoogle';
import React from 'react';

type IFileUpload = {
  image: never;
};

const FileUpload: FC<IFileUpload> = () => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      console.log('Загруженные файлы:', Array.from(files));
    }
  };

  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <VisuallyHiddenInput type="file" onChange={handleFileChange} multiple />
      <LogoutButton />
    </Button>
  );
};

export default FileUpload;
