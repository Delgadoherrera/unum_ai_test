import React from "react";
import GlobalMenu from "./components/GlobalMenu";
import GnosisParameters from "./components/GnosisParameters";
import { useSelector } from "react-redux";

const App: React.FC = () => {
  const selectGlobalMenuOpt = (state) => state.data.globalMenuOpt; // Asume que 'data' es el key de tu slice en el root reducer
  const globalMenuOpt = useSelector(selectGlobalMenuOpt);
  console.log("globalMenuOut", globalMenuOpt);
  return (
    <>
      <div className="appContent">
        <GlobalMenu />
        {globalMenuOpt === "Gnosis" && <GnosisParameters />}
      </div>
    </>

    /*     <div className="App">
      <FileInput setFile={setFile} />
      <InputPrompt setPrompt={setPrompt} />
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
      <button onClick={handleSubmit} disabled={loading}>
        Enviar
      </button>
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
    </div> */
  );
};

export default App;
