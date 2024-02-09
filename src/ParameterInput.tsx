import { Badge, Breadcrumb, Input } from 'antd';
import React from 'react';

interface ParameterInputProps {
  name: string;
  parameters: {
    chunkSize: number | null;
    chunkOverlap: number | null;
    temperature: number | null;
  };
  setParameters: React.Dispatch<React.SetStateAction<{
    chunkSize: number | null;
    chunkOverlap: number | null;
    temperature: number | null;
  }>>;
}

const ParameterInput: React.FC<ParameterInputProps> = ({ name, parameters, setParameters }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    let newValue: number | null = null;

    if (value !== '') {
      if (name === 'temperature') {
        // Permite decimales para 'temperature'
        newValue = parseFloat(value);
      } else {
        // Asegura valores enteros para 'chunkSize' y 'chunkOverlap'
        newValue = parseInt(value, 10);
      }
    }

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
        name={name} // Importante para identificar el campo que se está actualizando
        value={parameters[name as keyof typeof parameters] || ''}
        onChange={handleChange}
        step={name === 'temperature' ? "0.1" : "1"} // Permite incrementos decimales solo para 'temperature'
      />
    </div>
  );
}

export default ParameterInput;
