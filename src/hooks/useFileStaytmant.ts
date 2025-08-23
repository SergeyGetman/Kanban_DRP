import { useFileContext } from './useFileContext';

export const useFileStaytmantComponent = () => {
  const { isUploaded } = useFileContext();
  const message = isUploaded ? '✅ Файл загружен' : '📁 Загрузите файл';

  return {
    isUploaded,
    message,
  };
};
