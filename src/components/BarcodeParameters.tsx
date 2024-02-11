import React, { useState } from "react";
import ParameterInput from "../ParameterInput";
import ApiResponse from "../ApiResponse";
import FileInput from "../FileInput";
import { Button } from "antd";

interface Parameters {
  chunk_size: number | null;
  chunk_overlap: number | null;
  temperature: number | null;
}

const App: React.FC = () => {
  const [parameters, setParameters] = useState<Parameters>({
    chunk_size: null,
    chunk_overlap: null,
    temperature: null,
  });
  const [file, setFile] = useState<File | null>(null);
  const [apiResponse, setApiResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    setLoading(true); // Inicia el indicador de carga
    const formData = new FormData();
    if (file) formData.append("file", file, file.name);
    Object.keys(parameters).forEach((key: string) => {
      const value = parameters[key as keyof Parameters];
      if (value !== null) {
        formData.append(key, value.toString());
      }
    });

    fetch("https://ledesma.devingfor.art/ia/api/assets/barcode", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(JSON.stringify(data, null, 2));
        setLoading(false); // Detiene el indicador de carga
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error);
        setLoading(false); // Detiene el indicador de carga en caso de error
      });
  };

  return (
    <div className="App">
      <FileInput setFile={setFile} />
      <div className="parameterInput">
        <ParameterInput
          name="pages"
          setParameters={setParameters}
          parameters={parameters}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p> T = todas las paginas;</p>
          <p> P = primera pagina;</p>
          <p> U = ultima pagina;</p>
          <p> 7 = buscar en la pagina 7;</p>
        </div>
      </div>

      <Button onClick={handleSubmit} disabled={loading}>
        Enviar
      </Button>
      {loading ? (
        <div
          className="loader"
          style={{
            border: "16px solid #f3f3f3",
            borderRadius: "50%",
            borderTop: "16px solid #3498db",
            width: "120px",
            height: "120px",
            animation: "spin 2s linear infinite",
            margin: "auto",
          }}
        ></div>
      ) : (
        <ApiResponse response={apiResponse} />
      )}
    </div>
  );
};

export default App;
