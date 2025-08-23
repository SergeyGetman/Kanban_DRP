import React, { createContext, useState, ReactNode } from 'react';

interface UploadedFile {
  file: File;
  preview: string;
}

interface FlagContextType {
  isUploaded: boolean;
  setIsUploaded: (value: boolean) => void;
}

interface FileContextType {
  files: UploadedFile[];
  isUploaded: boolean;
  addFiles: (newFiles: FileList | null) => void;
  removeFile: (index: number) => void;
  clearFiles: () => void;
}

export const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);

  const addFiles = (newFiles: FileList | null) => {
    if (!newFiles || files.length > 0) return;

    const fileArray = Array.from(newFiles).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setFiles((prev) => [...prev, ...fileArray]);
    setIsUploaded(true);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => {
      const newFiles = prev.filter((_, i) => i !== index);
      prev[index] && URL.revokeObjectURL(prev[index].preview);
      return newFiles;
    });

    if (files.length <= 1) {
      setIsUploaded(false);
    }
  };

  const clearFiles = () => {
    files.forEach((f) => URL.revokeObjectURL(f.preview));
    setFiles([]);
    setIsUploaded(false);
  };

  return (
    <FileContext.Provider
      value={{
        files,
        isUploaded,
        addFiles,
        removeFile,
        clearFiles,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};
