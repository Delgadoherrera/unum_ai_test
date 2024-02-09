import React from 'react';

interface ApiResponseProps {
  response: string | object; // Acepta tanto strings como objetos
}

const ApiResponse: React.FC<ApiResponseProps> = ({ response }) => {
  // Asegurarse de que la respuesta sea un string bien formateado
  const responseString = typeof response === 'object' ? JSON.stringify(response, null, 2) : response;

  return (
    <div>
      <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{responseString}</pre>
    </div>
  );
}

export default ApiResponse;
