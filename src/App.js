import "./App.css";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import useDimension from "./useDimension";

function App() {
  const browserWidth = useDimension();

  if (browserWidth > 722) {
    console.log("grand écran");
  } else {
    console.log("petit écran");
  }

  return <div className="App"></div>;
}

export default App;
