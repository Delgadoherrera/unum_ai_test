import React from "react";

interface InputPromptProps {
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
}

const InputPrompt: React.FC<InputPromptProps> = ({ setPrompt }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(event.target.value);
  };

  return (
    <div>
      <textarea
        id="promptInput"
        onChange={handleChange}
        rows={4} // Puedes ajustar el número de filas según tus necesidades
        style={{ width: "100%", minHeight: "400px" }} // Ajusta el ancho al 100% del contenedor padre
        placeholder="Ingrese prompt"
      />
    </div>
  );
};

export default InputPrompt;
