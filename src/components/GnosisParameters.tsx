import React, { useState } from "react";
import InputPrompt from "../InputPrompt";
import ParameterInput from "../ParameterInput";
import ApiResponse from "../ApiResponse";
import FileInput from "../FileInput";
import { Button } from "antd";

interface Parameters {
  chunkSize: number | null;
  chunkOverlap: number | null;
  temperature: number | null;
}

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [parameters, setParameters] = useState<Parameters>({
    chunkSize: null,
    chunkOverlap: null,
    temperature: null,
  });
  const [file, setFile] = useState<File | null>(null);
  const [apiResponse, setApiResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    setLoading(true); // Inicia el indicador de carga
    const formData = new FormData();
    formData.append("question", prompt);
    if (file) formData.append("file", file, file.name);
    Object.keys(parameters).forEach((key: string) => {
      const value = parameters[key as keyof Parameters];
      if (value !== null) {
        formData.append(key, value.toString());
      }
    });

    fetch("https://ledesma.devingfor.art:8087/ia/api/assets/answer", {
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
      <InputPrompt setPrompt={setPrompt} />
      <div className="parameterInput">
        <ParameterInput
          name="chunk_size"
          setParameters={setParameters}
          parameters={parameters}
        />
        <ParameterInput
          name="chunk_overlap"
          setParameters={setParameters}
          parameters={parameters}
        />
        <ParameterInput
          name="temperature"
          setParameters={setParameters}
          parameters={parameters}
        />
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
