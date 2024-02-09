import {  Breadcrumb, Input } from 'antd';
import React from 'react';

interface ParameterInputProps {
  name: 'chunk_size' | 'chunk_overlap' | 'temperature'; // Asegurarse de que name corresponda a las claves
  parameters: {
    chunk_size: number | null;
    chunk_overlap: number | null;
    temperature: number | null;
  };
  setParameters: React.Dispatch<React.SetStateAction<{
    chunk_size: number | null;
    chunk_overlap: number | null;
    temperature: number | null;
  }>>;
}

const ParameterInput: React.FC<ParameterInputProps> = ({ name, parameters, setParameters }) => {
  // Establecer valores predeterminados
  const defaultValues = {
    chunk_size: 3000,
    chunk_overlap: 1000,
    temperature: 0.5,
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newValue: number | null = value !== '' ? parseFloat(value) : null;

    setParameters(prevParams => ({
      ...prevParams,
      [name]: newValue,
    }));
  };

  return (
    <div>
      <Breadcrumb> {name}:</Breadcrumb>
      <Input
        type="number"
        id={name}
        name={name}
        value={parameters[name] || ''}
        onChange={handleChange}
        placeholder={`${defaultValues[name]}`}
        step={name === 'temperature' ? "0.1" : "1"} // Permite incrementos decimales solo para 'temperature'
      />
    </div>
  );
}

export default ParameterInput;
