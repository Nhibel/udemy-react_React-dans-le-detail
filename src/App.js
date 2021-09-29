import "./App.css";
import { useState, useEffect } from "react";
import Timer from "./Timer";

function App() {
  const [toggle, setToggle] = useState(true);

  const toggleFunc = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <button onClick={toggleFunc}>Toggle</button>
      <h2>{toggle && <Timer />}</h2>
    </div>
  );
}

export default App;
