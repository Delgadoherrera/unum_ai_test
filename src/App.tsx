import React from "react";
import GlobalMenu from "./components/GlobalMenu";
import GnosisParameters from "./components/GnosisParameters";
import BarcodeParameters from "./components/BarcodeParameters";

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
        {globalMenuOpt === "Barcode" && <BarcodeParameters />}

      </div>
    </>
  );
};

export default App;
