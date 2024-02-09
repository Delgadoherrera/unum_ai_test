import React from 'react';

interface FileInputProps {
  setFile: (file: File) => void;
}

const FileInput: React.FC<FileInputProps> = ({ setFile }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFile(file);
    }
  };

  return (
    <div>
      <label htmlFor="fileInput">Cargar Archivo:</label>
      <input type="file" id="fileInput" onChange={handleFileChange} />
    </div>
  );
}

export default FileInput;
