import { Breadcrumb, Input } from 'antd';
import React from 'react';

interface ParameterInputProps {
  name: 'chunk_size' | 'chunk_overlap' | 'temperature' | 'pages'; // Asegurarse de que name corresponda a las claves
  parameters: {
    chunk_size: number | null;
    chunk_overlap: number | null;
    temperature: number | null;
    pages: string | number | null; // Ajustado para aceptar tanto string como number
  };
  setParameters: React.Dispatch<React.SetStateAction<{
    chunk_size: number | null;
    chunk_overlap: number | null;
    temperature: number | null;
    pages: string | number | null; // Ajustado para aceptar tanto string como number
  }>>;
}

const ParameterInput: React.FC<ParameterInputProps> = ({ name, parameters, setParameters }) => {
  // Establecer valores predeterminados
  const defaultValues = {
    chunk_size: 3000,
    chunk_overlap: 1000,
    temperature: 0.5,
    pages: 'T', // Suponiendo 'T' como valor predeterminado de ejemplo para 'pages'
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let newValue: number | string | null;

    // Diferenciar el manejo para 'pages' ya que puede ser string o number
    if (name === 'pages') {
      // No se convierte a número para permitir valores string
      newValue = value !== '' ? value : null;
    } else {
      // Para los demás campos, se convierte a número si es posible, de lo contrario null
      newValue = value !== '' ? parseFloat(value) : null;
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
        id={name}
        name={name}
        value={parameters[name] || ''}
        onChange={handleChange}
        placeholder={`${defaultValues[name]}`}
        step={name === 'temperature' ? "0.1" : "1"} // Permite incrementos decimales solo para 'temperature'
        type={name === 'pages' ? "text" : "number"} // Ajustar el tipo de input basado en el campo
      />
    </div>
  );
}

export default ParameterInput;
