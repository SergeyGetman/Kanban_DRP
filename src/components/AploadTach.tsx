import { Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FC } from 'React';
import VisuallyHiddenInput from './InputFileUpload';

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
      <VisuallyHiddenInput type="file" onChange={(event) => console.log(event.target.files)} multiple />
    </Button>
  );
};

export default FileUpload;
